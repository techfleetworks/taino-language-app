export const mockData = {
  lessons: [
    {
      id: "482F80CA-D720-41C8-945D-93A6CD90F487",
      updated_at: "2024-10-01T10:00:00Z",
      created_at: "2024-10-01T10:00:00Z",
      slides: [
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "reading",
          category: "introduction",
          text: "Tau! Hello! I'm Zunzún, I’ll be your guide on your learning journey. \n\nI’m a hummingbird, known to be a messenger of Yaya, the Taíno Great Spirit.",
          //order: 1
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "reading",
          category: "introduction",
          text: "In the Taíno culture, Hummingbirds are sacred symbol of rebirth and bring new life into the world.",
          //order: 2
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "reading",
          category: "introduction",
          text: "Learn Taíno aims to help the revitalization of the Taíno by helping you learn all about the origins, culture, people and language.",
          //order: 3
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "reading",
          category: "introduction",
          text: "Ready to try your first lesson?",
          //order: 4
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "reading",
          category: "introduction",
          text: "Whether you are looking to reconnect with your Taíno ancestry or are curious about Taíno culture, I Welcome you to join me here at Learn Taíno!",
          //order: 5
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "reading",
          category: "introduction",
          text: "Before we start our Taíno learning journey, let’s take a moment to learn about the history of the  Taíno language.",
          //order: 6
        },
        {
          title: "Lesson 1: Greetings",
          category: "introduction",
          type: "cover",
          description: "Learn how to introduce yourself by saying “hello, my name is…",
          image: "./assets/images/emoji _waving hand.png",
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "correct_image",
          category: "assessment",
          question: "tau",
          options: [
            {
              image: "./assets/illustrations/hello.png",
              user_translations: ["hello", "hola"],
            },
            {
              image: "./assets/illustrations/goodbye.png",
              user_translations: ["bye", "adios"],
            },
            {
              image: "./assets/illustrations/thank-you.png",
              user_translations: ["thanks", "gracias"],
            },
            {
              image: "./assets/illustrations/sorry.png",
              user_translations: ["sorry", "lo siento"],
            },
          ],
          correctIndex: 0,
          order: 3
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "correct_image",
          category: "assessment",
          question: "dak",
          options: [
            {
              image: "./assets/illustrations/hello.png",
              user_translations: ["hello", "hola"],
            },
            {
              image: "./assets/illustrations/goodbye.png",
              user_translations: ["bye", "adios"],
            },
            {
              image: "./assets/illustrations/me.png",
              user_translations: ["i", "yo"],
            },
            {
              image: "./assets/illustrations/sorry.png",
              user_translations: ["sorry", "lo siento"],
            },
          ],
          correctIndex: 2,
          order: 4
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "correct_image",
          category: "assessment",
          question: "anúlia",
          options: [
            {
              image: "./assets/illustrations/hello.png",
              user_translations: ["hello", "hola"],
            },
            {
              image: "./assets/illustrations/goodbye.png",
              user_translations: ["bye", "adios"],
            },
            {
              image: "./assets/illustrations/name.png",
              user_translations: ["name", "nombre"],
            },
            {
              image: "./assets/illustrations/sorry.png",
              user_translations: ["sorry", "lo siento"],
            },
          ],
          correctIndex: 2,
          order: 5
        },
        {
          id: "482F80CA-D720-41C8-945D-93A6CD90F487",
          type: "fill_in_the_blank",
          category: "assessment",
          question: "The Taíno are an Indigenous people of the Americas and the original inhabitants of _____.",
          options: ["Puerto Rico", "The Dominican Republic", "The Caribbean", "The Caribbean & Southern US"],
          correctIndex: 2,
          order: 6
        }
      ]
    }
  ],
  users: [
    {
      id: 'b02f6e9d-1b58-4d88-bc91-7a746a3e8701',
      email: 'user1@example.com',
      created_at: '2024-10-01T10:00:00Z'
    },
    {
      id: 'c3d2a7a5-4e1f-4f5d-8f78-d4a642f8e7b4',
      email: 'user2@example.com',
      created_at: '2024-10-02T10:30:00Z'
    }
  ],
  profiles: [
    {
      id: 'b1a4d9e2-03f2-4d64-9f7c-12345abcd123',
      user_id: 'b02f6e9d-1b58-4d88-bc91-7a746a3e8701',
      displayName: 'User One',
      created_at: '2024-10-01T10:05:00Z'
    },
    {
      id: 'd2b5f4e5-678f-4f5d-8e91-67890efgh456',
      user_id: 'c3d2a7a5-4e1f-4f5d-8f78-d4a642f8e7b4',
      displayName: 'User Two',
      created_at: '2024-10-02T10:35:00Z'
    }
  ]
}
