// Express.js Code Snippets

// CRUD Operations
// Create
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Logic to save user to database
  res.status(201).json(newUser);
});

// Read
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to fetch user from database
  res.json(user);
});

// Update
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  // Logic to update user in database
  res.json(updatedUser);
});

// Delete
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to delete user from database
  res.status(204).send();
});

// Event-Driven Development
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('userCreated', (user) => {
  console.log('New user created:', user);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  // Logic to save user to database
  myEmitter.emit('userCreated', newUser);
  res.status(201).json(newUser);
});

// Authentication (using Passport.js)
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  (username, password, done) => {
    // Logic to verify username and password
    if (username === 'admin' && password === 'password') {
      return done(null, { id: 1, username: 'admin' });
    }
    return done(null, false);
  }
));

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Logged in successfully' });
});
