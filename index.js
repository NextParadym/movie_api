
//Require
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(morgan('common'));


// Use the Morgan middleware library to log all requests (instead of using 
//the fs module to write to a text file).
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Welcome to mycomedyFlix app!');
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});


let topTenMovies = [
    {
        title: 'Pitch Perfect',
        year: '2012',
        genre: ['Comedy', 'Music', 'Romance'],
        director: 'Jason Moore '
    },
    {
        title: 'Solo: A Star Wars Story',
        year: '2018',
        genre: ['Comedy','Action', 'Adventure'],
        director: 'Ron Howard'
    },
    {
        title: 'Detective MJ: Shadow of a Hero',
        year: '2020',
        genre: ['Comedy', 'Action'],
        director: 'Morris D. Small'
    },
    {
        title: 'Mum, Dad, Meet Sam',
        year: '2014',
        genre: ['Comedy', 'Romance'],
        director: 'Tony Sebastian Ukpo'
    },
    {
        title: 'The Nutty Professor',
        year: '1963',
        genre: ['Comedy','Romance'],
        director: 'Jerry Lewis'
    },
    {
        title: 'Game Over, Man!',
        year: '2018',
        genre: ['Comedy', 'Action'],
        director: 'Kyle Newacheck'
    },
    {
        title: 'No Holds Bars Comedy Presents: Pilot',
        year: '2012',
        genre: ['Comedy', 'Action'],
        director: 'Derrick Comedy'
    },
    {
        title: 'The Day After Quarantine',
        year: '2021',
        genre: ['Comedy', 'Adventure'],
        director: 'Gary Trousdale'
    },
    {
        title: 'No Filter the Film',
        year: '2015',
        genre: ['Comedy'],
        director: 'Barry Williams'
    },
    {
        title: 'All Star Comedy Jam',
        year: '2009',
        genre: ['Comedy', 'Documentary'],
        director: 'Leslie Small'
    }
];

//Created a topTenMovies list : GET requests
app.get('/', (req, res) => {
    res.send('Welcome to mycomedyFlix app!');
});

app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});

// Get the list of data about ALL movies
app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

// Get data about a movie by title
app.get('/movies/:title', (req, res) => {
    res.send('Successful GET request returning movie by title');
});

// Get data about a movie by year
app.get('/movies/:year', (req, res) => {
    res.send('Successful GET request returning movie by year');
});


// Get data about movies by genre
app.get('/movies/:genre', (req, res) => {
    res.send('Successful GET request returning movie by genre');
});

//Get data of a director's information by name
app.get('/directors/:name', (req, res) => {
    res.send('Successful GET request of directors information.');
});

// Allow new users to register
app.post('/register', (req, res) => {
    res.send('Successful POST to the server a new user registeration.');
});

// Allow user to update their user info
app.put('/users/:id/:user_info', (req, res) => {
    res.send('Successful PUT to the server a user information.');
});

// Allow user to add a movie to their favorite movies list
app.post('/users/:id/favorites', (req, res) => {
    res.send('Successful POST to the server a favorite movie on the user list.');
});

// Allow user to remove a movie from their favorite  movies list
app.delete('/users/:id/favorites', (req, res) => {
    res.send('Successful DELETE to the server a favorite movie on the user list.');
});

// Allow existing user to deregister
app.delete('/users/:id/unregister', (req, res) => {
    res.send('Successful DELETE a user!');
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


//Created a topTenMovies list.
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

