# Learn Taino
Learn Taino is a language-learning app that helps Taino descendants and culture enthusiasts learn the Taino language and culture.

## Background
The Taíno, the Indigenous people of the Caribbean and parts of the southern U.S., were the first Native Americans to meet Europeans in 1492. Though long thought extinct after colonization, they survived - many Caribbean people today have Taíno ancestry, and efforts are ongoing to preserve their culture and language.

<!-- TODO: Add background section  -->

## Stack 
- Frontend:
    - React Native
    - Expo
- Backend:
    - PostgreSQL(Avien.io)
    - Prisma ORM
    - Nest.js
    - Auth0
    - Cloudflare R2

## Requirements
- Node.js v20

## Run Locally

Clone this repository:
```bash
git clone https://github.com/itskarelleh/taino-language-app.git
```

This mono repository has three main folders: 
react-frontend: The mobile app for Learn Taino - React + Expo
nest-backend: The API and services that the mobile app sends requests and receives responses - Nest.js
lesson-authoring: The headless CMS that allows content creators, lesson authors and admin users to create and edit lessons and vocabulary - Payload CMS

For the frontend:
```zsh
cd react-frontend
cp .env.example .env
npm install && npx expo start -c
```

<!-- For the backend: -->
For the backend:
```zsh
cd nest-backend
cp .env.example .env.development
pnpm install && pnpm run start:dev
```

For the lesson authoring tool:
```zsh
cd lesson-authoring
pnpm install && pnpm run dev
```


For more details on how to run, deploy, and navigate this project, read the wiki: [Learn Taino GitHub Wiki](https://github.com/itskarelleh/taino-language-app/wiki)

<!-- TODO: Add Contributors section -->
<!-- ## Contributors -->
<!-- ## Contributors -->
