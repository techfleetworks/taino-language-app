export const mockData = {
  lessons: [
    {
      id: 1,
      title: "Lesson 1: Greetings",
      description: "Learn the basics of the Taíno language with this introductory lesson.",
      slides: [
        {
          id: "slide_1",
          type: "reading",
          category: "introduction",
          text: "Whether you are looking to reconnect with your Taíno ancestry or are curious about Taíno culture, I Welcome you to join me here at Learn Taíno!",
          order: 1
        },
        {
          id: "slide_2",
          type: "reading",
          category: "introduction",
          text: "Before we start our Taíno learning journey, let’s take a moment to learn about the history of the  Taíno language.",
          order: 2
        },
        {
          id: "question_1",
          type: "fill_in_the_blank",
          category: "assessment",
          question: "The Taíno are an Indigenous people of the Americas and the original inhabitants of _____.",
          options: ["Puerto Rico", "The Dominican Republic", "The Caribbean", "The Caribbean & Southern US"],
          correctIndex: 3,
          order: 3
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
