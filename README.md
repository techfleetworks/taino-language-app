# Taino Language App

<!-- TODO: Write more about the background of this project -->
This project is for a PWA(Progressive Web App) that lets those who seek to learn the Taino language do so. 

<!-- TODO: Add background section  -->

## Stack 
- Frontend:
    - Language: TypeScript
    - Framework: React Native
    - Data Fetching: Axios
    - Build Tools: Expo Go + Metro
    - Testing: Cypress
- Backend:
    - Language: TypeScript
    - Express.js
    - TypeScript
    - Avien.io(Cloud Hosting for Postgres)
    - Jest
- CI/CD
    - Docker(maybe??)
    - GitHub Actions
- Hosting
    - Netlify

## Requirements
- Node.js v20

## Run Locally

Clone this repository:
```bash
git clone https://github.com/itskarelleh/taino-language-app.git
``` 

For the frontend:
```bash
cd react-native
cp .env.example .env
npm install && npx expo start -c
```

<!-- For the backend: -->
For the backend:
```bash
cd nest-backend
cp .env.example .env
npm install && npm run start:dev
```

or instead of running these separately, you can run the project with the following command:

For more details on how to run the project, please refer to the [get started guide](./docs/getting-started.md).


<!-- TODO: Add Contributors section -->
<!-- ## Contributors -->

