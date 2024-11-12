# Taino Language App

<!-- TODO: Write more about the background of this project -->
This project is for a PWA(Progressive Web App) that lets those who seek to learn the Taino language do so. 

<!-- TODO: Add background section  -->

## Stack 
- Frontend:
    - Framework: React Native + Expo
    - Data Fetching: Axios
- Backend:
    - PostgreSQL(Avien.io)
    - Drizzle ORM
    - Nest.js

## Requirements
- Node.js v20

## Run Locally

Clone this repository:
```bash
git clone https://github.com/itskarelleh/taino-language-app.git
``` 

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

For more details on how to run the project, please refer to the [get started guide](./docs/getting-started.md).

<!-- TODO: Add Contributors section -->
<!-- ## Contributors -->
<!-- ## Contributors -->
