
const express = require('express');
const app = express(),
morgan = require('morgan');

//Created a topMovies list.
let topBooks = [
    {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
    },
    {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
    },
    {
    title: 'Twilight',
    author: 'Stephanie Meyer'
    }
];

// GET requests
app.get('/', (req, res) => {
    res.send('Welcome to my book club!');
});

app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/books', (req, res) => {
    res.json(topBooks);
});

// Serving static files
app.use(express.static('public'));

  // Use the Morgan middleware library to log all requests (instead of using 
  //the fs module to write to a text file).
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Welcome to my app!');
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});

// error-handling middleware function that will log all application-level errors to the terminal.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});