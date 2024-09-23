// Encore.ts Code Snippets

// CRUD Operations
import { Encore } from 'encore.dev';

// Create
export const createUser = Encore.define('createUser', async (user) => {
  // Logic to save user to database
  return user;
});

// Read
export const getUser = Encore.define('getUser', async (id: string) => {
  // Logic to fetch user from database
  return user;
});

// Update
export const updateUser = Encore.define('updateUser', async (id: string, user) => {
  // Logic to update user in database
  return user;
});

// Delete
export const deleteUser = Encore.define('deleteUser', async (id: string) => {
  // Logic to delete user from database
  return { success: true };
});

// Event-Driven Development
import { PubSub } from 'encore.dev/pubsub';

const userCreatedTopic = new PubSub.Topic<{id: string, name: string}>('user-created');

export const createUser = Encore.define('createUser', async (user) => {
  // Logic to save user to database
  await userCreatedTopic.publish({ id: user.id, name: user.name });
  return user;
});

// Authentication
import { Auth } from 'encore.dev/auth';

export const login = Encore.define('login', async (username: string, password: string) => {
  // Logic to verify username and password
  if (username === 'admin' && password === 'password') {
    return Auth.generateToken({ userID: '1', username: 'admin' });
  }
  throw new Error('Invalid credentials');
});

// Middleware to require authentication
const requireAuth = Auth.requireAuth();

export const getProtectedResource = Encore.define(
  'getProtectedResource',
  async (ctx: Encore.Context) => {
    // This endpoint requires authentication
    return { message: 'Access granted' };
  },
  { middleware: [requireAuth] }
);
