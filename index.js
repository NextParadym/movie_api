
//Require
const express = require('express');
const app = express(),
morgan = require('morgan');

// Use the Morgan middleware library to log all requests (instead of using 
//the fs module to write to a text file).
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Welcome to mycomedyFlix app!');
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});

//Created a topMovies list.
let topMovies = [
    {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    },
    {
    title: 'Pulp Fiction',
    year: '1994',
    },
    {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    }
];

// GET requests
app.get('/', (req, res) => {
    res.send('Welcome to mycomedyFlix app!');
});

app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

// Serving static files
app.use(express.static('public'));

// error-handling middleware function that will log all application-level errors to the terminal
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});