# Wedding Planner Portfolio Backend

This API allows you to create a User Known as a wedding planner, who can create a portfolio of weddings they have worked on.

### Hosted URL for BackEnd

## [https://wedding-planner-buildweek.herokuapp.com/](https://wedding-planner-buildweek.herokuapp.com/)

# Endpoints

### Creating a Wedding Planner User

## POST /auth/user/login

#### Expected Payload:

```
{
    username: user,
    password: password1234
}
```

#### Returns:

```
{
  "message": "Welcome user!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

## POST /auth/user/register

The email,password and username must be unique and are required.password.The password must be 12 characters.

#### Expected Payload:

```
{
    username: "weddingPlaner",
    password: "password1234",
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
}
```

#### Returns:

```
{
  "message": "successfully registered new user weddingPlaner, user ID 1"
}
```

## GET /auth/user/

Will get an array of all the current users. Requires client to be logged in with a token.

#### Expected Payload:

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
[
    {
    username: "weddingPlaner",
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
    },
    {
    username: "weddingPlaner1",
    name: "Sarah",
    phone: 18642341020,
    email: "creativeweddings@gmail.com",
    location: "Portland"
    },
    {
    username: "weddingPlaner2",
    name: "Jessica Jung",
    phone: 18642341020,
    email: "jessica.jung.wedding@email.com",
    location: "NYC"
    }
]
```

## GET /auth/user/:id

Will get current user. Requires client to be logged in with a token.

#### Expected Payload:

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
{
    username: "weddingPlaner",
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
}
```

## POST /auth/weddings/user/

create a wedding post for the current user. will require a token. It will user's token to determine the user ID.

### wedding_name is required and must be unique. description is required.

#### Expected Payload:

```
{
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    image_url: wwww.image.com/wedding1
}
```

#### Returns:

```
{
    id: 1,
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    image_url: null,
    user_id: 2
}
```

## GET /auth/weddings/

Returns an array of all wedding post. It will require a token.

#### Expected Payload:

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
[
    {
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
        "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    image_url: null,
    user_id: 1
    },
    {
    wedding_name: "Tori and Darci Wedding",
    venue: "Beach Side Resort",
    guest_num: 100,
    description:
        "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
    image_url: null,
    user_id: 3
    },
    {
    wedding_name: "The Gates's Wedding",
    venue: "Space needle",
    guest_num: 120,
    description:
        "Under the beautiful night sky shining through the space needle windows, a wonderful couple were able to experience their wedding fantasy. The expense of the wedding ended up being way over budget, but the couple did not care. They were able to have over 120 guests that they love and care about see their dream come true.",
    image_url:
        "https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80",
    image_url: null,
    user_id: 2
    },
]

```

## GET /auth/weddings/user/

Returns an array of a User's wedding post. It will require a token which will provide the user's ID.

#### Expected Payload:

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
[
    {
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
        "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    image_url: null,
    user_id: 1
    },
    {
    wedding_name: "Tori and Darci Wedding",
    venue: "Beach Side Resort",
    guest_num: 100,
    description:
        "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
    image_url: null,
    user_id: 1
    }
]

```

## PUT /auth/weddings/:id

edit a wedding post by its ID. It will require a token. It will use the url paramas determine the wedding ID.

#### Expected Payload:

```
{
    wedding_name: "Johns's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    image_url: "",

}
```

#### Returns:

```
{
    id: 1,
    wedding_name: "John's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    image_url: "",
    user_id: 2
}
```

## DELETE /auth/weddings/:id

Delete a wedding post by its ID. It will require a token. It will use the url paramas determine the wedding ID.

#### Expected Payload:

/auth/weddings/1

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
{
  "message": "deleted a wedding",
  "Deleted": 1
}
```

## GET /portfolios

A public unprotected route that gives you an array of all of the users basic contact info with their wedding post.

#### Expected Payload:

```
null
```

#### Returns:

```
[
  {
    "id": 1,
    "name": "John Smith",
    "phone": 18002341000,
    "email": "johnSmith@gmail.com",
    "location": "Seattle, WA",
    "wedding_name": "Smith's Wedding",
    "venue": "Old Winery",
    "guest_num": 200,
    "description": "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    "image_url": null,
    "user_id": 1
  },
  {
    "id": 5,
    "name": "Sarah",
    "phone": 18642341020,
    "email": "creativeweddings@gmail.com",
    "location": "Portland",
    "wedding_name": "The Gates's Wedding",
    "venue": "Space needle",
    "guest_num": 120,
    "description": "Under the beautiful night sky shining through the space needle windows, a wonderful couple were able to experience their wedding fantasy. The expense of the wedding ended up being way over budget, but the couple did not care. They were able to have over 120 guests that they love and care about see their dream come true.",
    "image_url": "https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80",
    "user_id": 2
  },
  {
    "id": 3,
    "name": "Jessica Jung",
    "phone": 18642341020,
    "email": "jessica.jung.wedding@email.com",
    "location": "NYC",
    "wedding_name": "Tori and Darci Wedding",
    "venue": "Beach Side Resort",
    "guest_num": 100,
    "description": "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
    "image_url": null,
    "user_id": 3
  },
  {
    "id": 6,
    "name": "Jessica Jung",
    "phone": 18642341020,
    "email": "jessica.jung.wedding@email.com",
    "location": "NYC",
    "wedding_name": "j's edding",
    "venue": "Old Winey",
    "guest_num": 100,
    "description": "It wass fu",
    "image_url": "",
    "user_id": 3
  }
]
```

## GET /portfolios/:id

A public unprotected route that gives you an array of a users basic contact info with their wedding post.

#### Expected Payload:

```
put the user's ID in the url of the get request
```

#### Returns:

```
[
  {
    "id": 3,
    "name": "Jessica Jung",
    "phone": 18642341020,
    "email": "jessica.jung.wedding@email.com",
    "location": "NYC",
    "wedding_name": "Tori and Darci Wedding",
    "venue": "Beach Side Resort",
    "guest_num": 100,
    "description": "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
    "image_url": null,
    "user_id": 3
  },
  {
    "id": 6,
    "name": "Jessica Jung",
    "phone": 18642341020,
    "email": "jessica.jung.wedding@email.com",
    "location": "NYC",
    "wedding_name": "jon's wedding",
    "venue": "Old Winey",
    "guest_num": 100,
    "description": "It wass fun",
    "image_url": "",
    "user_id": 3
  }
]
```
