import hello from '@/assets/images/hello.png';
import goodbye from '@/assets/images/goodbye.png';
import me from '@/assets/images/me.png';
import sorry from '@/assets/images/sorry.png';
import name from '@/assets/images/name.png';
import thankYou from '@/assets/images/thank-you.png';
import nameAudio from '@/assets/audio/anulia.mp3';
import helloAudio from '@/assets/audio/tau.mp3';
import meAudio from '@/assets/audio/dak.mp3';
import thankYouAudio from '@/assets/audio/jajom.mp3';
import lessonThumbnail from '@/assets/images/emoji_waving_hand.png'

//TODO: consider removing now that lesson one is in database. The choice is yours 
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
  ]
};
