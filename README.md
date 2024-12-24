# Learn Taino
Learn Taino is a language-learning app that helps Taino descendants and culture enthusiasts learn the Taino language and culture.

## Background
The Taíno, the Indigenous people of the Caribbean and parts of the southern U.S. were the first Native Americans to meet Europeans in 1492. Though long thought extinct after colonization, they survived - many Caribbean people today have Taíno ancestry, and efforts are ongoing to preserve their culture and language.

This project aims to aid in the revitalization of the Taíno culture by giving its descendants, as well as language and culture enthusiasts, by providing an easy learning experience for all ages and education levels.

This mono repository contains two major projects for the Taino Language App Project
- learn-taino-pwa: The mobile app for Learn Taino - React + Expo. It is a progressive web app that makes the app accessible to all.
- lesson-authoring-tool: The headless CMS by Payload. This web app allows content creators, lesson authors, and admin users to create and edit lessons and vocabulary.

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
- Node.js v20+
- PNPM v9+

## Run Locally

Clone this repository:
```bash
git clone https://github.com/itskarelleh/taino-language-app.git
```

### Learn Taino PWA
To run the frontend of the Learn Taino App, open a terminal and run the following commands:
```zsh
cd learn-taino-pwa
cp .env.example .env # add the correct values in the newly created .env file
npm install && npx expo start -c
```

To run the server of the Learn Taino App, open another terminal and run the following commands:
```zsh
cd learn-taino-pwa/server
cp .env.example .env # add the correct values in the newly created .env file
npx prisma db pull # Runs introspection for Prisma ORM
npx prisma generate #Generates the Prisma ORM client 
pnpm install && pnpm run start:dev
```

For the lesson-authoring tool, do the following:
```zsh
cd lesson-authoring
pnpm install && pnpm run dev
```

For more details on how to run, deploy, and navigate this project, read the wiki: [Learn Taino GitHub Wiki](https://github.com/itskarelleh/taino-language-app/wiki)
