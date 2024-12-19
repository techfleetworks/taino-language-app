import hello from '@/assets/images/hello.png';
import goodbye from '@/assets/images/goodbye.png';
import me from '@/assets/images/me.png';
import sorry from '@/assets/images/sorry.png';
import name from '@/assets/images/name.png';
import thankYou from '@/assets/images/thank-you.png';
import nameAudio from '@/assets/audio/anulia.mp3';
import helloAudio from '@/assets/audio/tau.mp3';
import meAudio from '@/assets/audio/dak.mp3';
import thankYouAudio from '@/assets/audio/jajóm.mp3';
import lessonThumbnail from '@/assets/images/emoji_waving_hand.png'

export const mockData = {

  lessons: [
    {
      id: '482F80CA-D720-41C8-945D-93A6CD90F487',
      title: 'Lesson 1: Greetings',
      description:
        'Learn how to introduce yourself by saying “hello, my name is…',
      thumbnail: lessonThumbnail,
      updated_at: '2024-10-01T10:00:00Z',
      created_at: '2024-10-01T10:00:00Z',
      introduction: {
          category: 'introduction',
          type: 'overview',
          phrase: {
            id: '1',
            taino: "Tau, dak'anulia",
            english: 'Hello, my name is',
          },
          vocab_overview: [
            {
              id: '1',
              taino: 'tau',
              english: 'hello',
            },
            {
              id: '2',
              taino: 'dak',
              english: 'I',
            },
            {
              id: '3',
              taino: 'anúlia',
              english: 'name',
            },
          ],
        },
      activities: [
        {
          id: '482F80CA-D720-41C8-945D-93A6CD90F487',
          type: 'correct_image',
          category: 'assessment',
          prompt: 'tau',
          options: [
            {
              image: hello,
              user_translations: ['hello', 'hola'],
              audio: helloAudio,
            },
            {
              image: goodbye,
              user_translations: ['bye', 'adios'],
              audio: null,
            },
            {
              image: thankYou,
              user_translations: ['thanks', 'gracias'],
              audio: thankYouAudio,
            },
            {
              image: sorry,
              user_translations: ['sorry', 'lo siento'],
              audio: null,
            },
          ],
          correctIndex: 0,
        },
        {
          id: '482F80CA-D720-41C8-945D-93A6CD90F487',
          type: 'correct_image',
          category: 'assessment',
          prompt: 'dak',
          options: [
            {
              image: hello,
              user_translations: ['hello', 'hola'],
              audio: helloAudio,
            },
            {
              image: goodbye,
              user_translations: ['bye', 'adios'],
              audio: null,
            },
            {
              image: me,
              user_translations: ['i', 'yo'],
              audio: meAudio,
            },
            {
              image: sorry,
              user_translations: ['sorry', 'lo siento'],
              audio: null,
            },
          ],
          correctIndex: 2,
        },
        {
          id: '482F80CA-D720-41C8-945D-93A6CD90F487',
          type: 'correct_image',
          category: 'assessment',
          prompt: 'anúlia',
          options: [
            {
              image: hello,
              user_translations: ['hello', 'hola'],
              audio: helloAudio,
            },
            {
              image: goodbye,
              user_translations: ['bye', 'adios'],
              audio: null,
            },
            {
              image: name,
              user_translations: ['name', 'nombre'],
              audio: nameAudio,
            },
            {
              image: sorry,
              user_translations: ['sorry', 'lo siento'],
              audio: null,
            },
          ],
          correctIndex: 2,
        },
      ],
    },
  ],
  users: [
    {
      id: 'b02f6e9d-1b58-4d88-bc91-7a746a3e8701',
      email: 'user1@example.com',
      created_at: '2024-10-01T10:00:00Z',
    },
    {
      id: 'c3d2a7a5-4e1f-4f5d-8f78-d4a642f8e7b4',
      email: 'user2@example.com',
      created_at: '2024-10-02T10:30:00Z',
    },
  ],
  profiles: [
    {
      id: 'b1a4d9e2-03f2-4d64-9f7c-12345abcd123',
      user_id: 'b02f6e9d-1b58-4d88-bc91-7a746a3e8701',
      displayName: 'User One',
      created_at: '2024-10-01T10:05:00Z',
    },
    {
      id: 'd2b5f4e5-678f-4f5d-8e91-67890efgh456',
      user_id: 'c3d2a7a5-4e1f-4f5d-8f78-d4a642f8e7b4',
      displayName: 'User Two',
      created_at: '2024-10-02T10:35:00Z',
    },
  ],
};
