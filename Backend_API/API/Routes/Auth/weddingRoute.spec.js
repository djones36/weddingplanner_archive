const request = require("supertest");
const server = require("../../server");
let token;
describe("Wedding Route", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  beforeAll(done => {
    request(server)
      .post("/api/auth/user/login")
      .send({ username: "testMan1", password: "password2222" })
      .end((err, res) => {
        token = res.body.token;
        console.log(res.body);
        done();
      });
  });
  describe("GET /api/auth/weddings/", () => {
    it("should return http status of 400 no token", () => {
      return request(server)
        .get("/api/auth/weddings/")
        .then(response => {
          expect(response.status).toBe(400);
        });
    });
    // should return json
    it("should return JSON", async () => {
      const response = await request(server).get("/api/auth/weddings/");
      // toMatch uses a regular expression to check the value
      expect(response.type).toMatch(/json/i);
    });
  });
  describe("Get /api/auth/weddings", () => {
    it("should return http status of 200 with token", async () => {
      return request(server)
        .get("/api/auth/weddings/")
        .set("Authorization", token)
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    it("should return JSON", async () => {
      const response = await request(server)
        .get("/api/auth/weddings/")
        .set("Authorization", token);
      // toMatch uses a regular expression to check the value
      expect(response.type).toMatch(/json/i);
    });
  });
});
