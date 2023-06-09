import mongoose from "mongoose";

/* USER TEST DATA */

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
  ];

  export const users = [
    {
        _id: userIds[0],
        firstName: "Matti",
        lastName: "Mattinen",
        email: "matti.mattinen@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p8.jpg",
        friends: [],
        location: "Helsinki, Finland",
        occupation: "Software Engineer",
        viewedProfile: 14561,
        impressions: 888822,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
      },
      {
        _id: userIds[1],
        firstName: "Timo",
        lastName: "Timola",
        email: "timo.timola@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p6.jpg",
        friends: [],
        location: "Espoo, Finland",
        occupation: "Data Scientist",
        viewedProfile: 45468,
        impressions: 19986,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
      },
      {
        _id: userIds[2],
        firstName: "Juho",
        lastName: "Juhoinen",
        email: "juho.juhoinen@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p5.jpg",
        friends: [],
        location: "Porvoo, Finland",
        occupation: "Front-end Developer",
        viewedProfile: 12351,
        impressions: 55555,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
      },
      {
        _id: userIds[3],
        firstName: "Veera",
        lastName: "Veerala",
        email: "veera.veerala@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p1.jpg",
        friends: [],
        location: "Vantaa, Finland",
        occupation: "Product Owner",
        viewedProfile: 41024,
        impressions: 55316,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
      },
      {
        _id: userIds[4],
        firstName: "Teija",
        lastName: "Teijanen",
        email: "teija.teijanen@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p3.jpg",
        friends: [],
        location: "Tampere, Finland",
        occupation: "Scrum Master",
        viewedProfile: 40212,
        impressions: 7758,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
      },
      {
        _id: userIds[5],
        firstName: "Petri",
        lastName: "Petrikainen",
        email: "petri.petrikainen@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p7.jpg",
        friends: [],
        location: "Turku, Finland",
        occupation: "Hacker",
        viewedProfile: 976,
        impressions: 4658,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
      },
      {
        _id: userIds[6],
        firstName: "Laura",
        lastName: "Laurala",
        email: "laura.laurala@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p2.jpg",
        friends: [],
        location: "Kerava, Finland",
        occupation: "Chief Executive Officer",
        viewedProfile: 1510,
        impressions: 77579,
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
      },
      {
        _id: userIds[7],
        firstName: "Eeva",
        lastName: "Eevanen",
        email: "eeva.eevanen@example.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p4.jpg",
        friends: [],
        location: "Rovaniemi, Finland",
        occupation: "Product Designer",
        viewedProfile: 19420,
        impressions: 82970,
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
      },
];

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: "Petri",
        lastName: "Petrikainen",
        location: "Turku, Finland",
        description: "Some really long random description",
        picturePath: "post1.jpg",
        userPicturePath: "p7.jpg",
        likes: new Map([
          [userIds[0], true],
          [userIds[2], true],
          [userIds[3], true],
          [userIds[4], true],
        ]),
        comments: [
          "random comment",
          "another random comment",
          "yet another random comment",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[2],
        firstName: "Juho",
        lastName: "Juhoinen",
        location: "Porvoo, Finland",
        description: "Another really long random description. This one is longer than the previous one.",
        picturePath: "post2.jpg",
        userPicturePath: "p5.jpg",
        likes: new Map([
            [userIds[7], true],
            [userIds[4], true],
            [userIds[1], true],
            [userIds[2], true],
          ]),
        comments: [
          "random comment",
          "another random comment",
          "yet another random comment",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: "Teija",
        lastName: "Teijanen",
        location: "Tampere, Finland",
        description:
          "This is the last really long random description. This one is longer than the previous one. So sad.",
        picturePath: "post3.jpg",
        userPicturePath: "p3.jpg",
        likes: new Map([
          [userIds[1], true],
          [userIds[6], true],
          [userIds[3], true],
          [userIds[5], true],
        ]),
        comments: [
            "I lied again, one more random comment",
            "Why am I doing this?",
            "I'm bored",
            "I'm still bored",
            "All I want to do is play video games",
            "I'm going to play video games",
          ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: "Eeva",
        lastName: "Eevanen",
        location: "Rovaniemi, Finland",
        description:
          "This is one of the many descriptions I have typed today. Please leave a comment. Like if you disagree!",
        picturePath: "post4.jpg",
        userPicturePath: "p4.jpg",
        likes: new Map([
          [userIds[1], true],
          [userIds[3], true],
          [userIds[5], true],
          [userIds[7], true],
        ]),
        comments: [
          "I lied again, one more random comment",
          "Why am I doing this?",
          "Man I'm bored",
          "What should I do?",
          "I'm going to play video games",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: "Timo",
        lastName: "Timola",
        location: "Espoo, Finland",
        description:
          "Look at this. This post is cringe. Please like this post if you agree!",
        picturePath: "post5.jpg",
        userPicturePath: "p6.jpeg",
        likes: new Map([
          [userIds[1], true],
          [userIds[2], true],
          [userIds[0], true],
        ]),
    
        comments: [
          "Can I play video games now?",
          "Do you find this funny?",
          "Never mind, I'm going to play video games",
          "Please this is wrong.",
          "Oskari, stop posting cringe.",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        firstName: "Matti",
        lastName: "Mattinen",
        location: "Helsinki, Finland",
        description:
          "Look at this. This post is cringe. Please like this post if you agree!",
        picturePath: "post6.jpg",
        userPicturePath: "p8.jpeg",
        likes: new Map([
          [userIds[5], true],
          [userIds[3], true],
          [userIds[2], true],
        ]),
    
        comments: [
          "I want to eat",
          "Do you find this sad?",
          "I don't like this kind of content",
          "Please this is wrong.",
          "I have to go to sleep soon. Please contact me soon!",
        ],
      },
];