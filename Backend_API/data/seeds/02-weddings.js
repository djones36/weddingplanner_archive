exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("wedding").then(function() {
    // Inserts seed entries
    return knex("wedding").insert([
      {
        wedding_name: "Smith's Wedding",
        venue: "Old Winery",
        guest_num: 200,
        description:
          "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
        user_id: 1
      },
      {
        wedding_name: "Jennifer Cutler & Oscar Flores Wedding",
        venue: "Smith's Farm",
        guest_num: 50,
        description:
          "It was a traditional wedding held on a lovely fall evening. We were able to plan a wedding for 50 guests. With farm animals in the distance you could feel the wedding party and guests felt the warmth of the country setting.",
        user_id: 2
      },
      {
        wedding_name: "Tori and Darci Wedding",
        venue: "Beach Side Resort",
        guest_num: 100,
        description:
          "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
        user_id: 3
      },
      {
        wedding_name: "The John and Mike's Wedding",
        venue: "Hawaii Beach",
        guest_num: 30,
        description:
          "On the sunny beach a small intimate service was held. We were able to plan full fledge wedding dream. Hawaii bringing the classic ocean sounds, and palm trees, the guests of 30 people were able to witness the lovely couple tie the knot.",
        user_id: 1
      },
      {
        wedding_name: "The Gates's Wedding",
        venue: "Space needle",
        guest_num: 120,
        description:
          "Under the beautiful night sky shining through the space needle windows, a wonderful couple were able to experience their wedding fantasy. The expense of the wedding ended up being way over budget, but the couple did not care. They were able to have over 120 guests that they love and care about see their dream come true.",
        image_url:
          "https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80",
        user_id: 2
      },
      {
        wedding_name: "Hunter & Mackenzie Wedding",
        venue: "East Sun Winery",
        guest_num: 150,
        description:
          "It was a nontraditional wedding held on a warm summer afternoon. We were able to plan a wedding for over 150 guests. The theme was formal country with a slight winery feel.",
        image_url: "",
        user_id: 3
      }
    ]);
  });
};
