//Require
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
uuid = require('uuid');
app = express();

// Serving static files
app.use(express.static('public'));
app.use(bodyParser.json());

// Use the Morgan middleware library to log all requests (instead of using 
//the fs module to write to a text file).
app.use(morgan('common'));
app.get('/', (req, res) => {
    res.send('Welcome to MycomedyFlix app!!!');
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});

let topTenMovies = [
    {
        movieID:1,
        title: 'Pitch Perfect',
        year: '2012',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:6,
                name:'Music',
                description:'   '
            },
            {
                genreID:4,
                name:'Romance',
                description:'   '
            },
            ],
        director:[
            {
                directorID:1,
                name:'Jason Moore ',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:2,
        title: 'Solo: A Star Wars Story',
        year: '2018',
        genre:[
        {
            genreID:1,
            name:'Comedy',
            description:'   '
        },
        {
            genreID:2,
            name:'Action',
            description:'   '
        },
        {
            genreID:3,
            name:'Adventure',
            description:'   '
        },
        ],
        director:[
            {
                directorID:2,
                name:'Ron Howard',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID: 3,
        title: 'Detective MJ: Shadow of a Hero',
        year: '2020',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:2,
                name:'Action',
                description:'   '
            },
            ],
        director:[
            {
                directorID:3,
                name:'Morris D. Small',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:4,
        title: 'Mum, Dad, Meet Sam',
        year: '2014',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:4,
                name:'Romance',
                description:'   '
            },
            ],
        director:[
            {
                directorID:4,
                name:'Tony Sebastian Ukpo',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:5,
        title: 'The Nutty Professor',
        year: '1963',
        genre:[
            {
                genreID: 1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID: 4,
                name:'Romance',
                description:'   '
            },
            ],
        director:[
            {
                directorID:5,
                name:'Jerry Lewis',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:6,
        title: 'Game Over, Man!',
        year: '2018',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:2,
                name:'Action',
                description:'   '
            },
            ],
        director:[
            {
                directorID:6,
                name:'Kyle Newacheck',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:7,
        title: 'No Holds Bars Comedy Presents: Pilot',
        year: '2012',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:2,
                name:'Action',
                description:'   '
            },
            ],
        director:[
            {
                directorID:7,
                name:'Derrick Comedy',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:8,
        title: 'The Day After Quarantine',
        year: '2021',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:3,
                name:'Adventure',
                description:'   '
            },
            ],
        director:[
            {
                directorID:8,
                name:'Gary Trousdale',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:9,
        title: 'No Filter the Film',
        year: '2015',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:2,
                name:'Adventure',
                description:'   '
            },
            ],
        director:[
            {
                directorID:9,
                name:'Barry Williams',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    },
    {
        movieID:10,
        title: 'All Star Comedy Jam',
        year: '2009',
        genre:[
            {
                genreID:1,
                name:'Comedy',
                description:'   '
            },
            {
                genreID:5,
                name:'Documentary',
                description:'   '
            },
            ],
        director:[
            {
                directorID:10,
                name:'Leslie Small',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    }
];

// Genre objects
const Genres = [
    {
        genreID:1,
        name:'Comedy',
        description:'   ',
    },
    {
        genreID:2,
        name:'Action',
        description:'   ',
    },
    {
        genreID:3,
        name:'Adventure',
        description:'   ',
    },
    {
        genreID:4,
        name:'Romance',
        description:'   ',
    },
    {
        genreID:5,
        name:'Documentary',
        description:'   ',
    },
    {
        genreID:6,
        name:'Music',
        description:'   ',
    },
];

// Director objects
const Directors = [
    {
        directorID: 1,
        name: 'Jason Moore',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 2,
        name: 'Ron Howard',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 3,
        name: 'Morris D. Small',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 4,
        name: 'Tony Sebastian Ukpo',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 5,
        name: 'Jerry Lewis',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 6,
        name: 'Kyle Newacheck',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 7,
        name: 'Derrick Comedy',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 8,
        name: 'Gary Trousdale',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 9,
        name: 'Barry Williams',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        directorID: 10,
        name: 'Leslie Small',
        birth_year: '',
        death_year: '',
        bio: '',
    },
];

//Created a topTenMovies list : GET requests
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

// Get data about movies by genre by name
app.get('/genres/:genreName', (req, res) => {
    const genre = Genres.find(g => g.name === req.params.genreName)
    res.json(genre);
});

// Get data about movies by directors by name
app.get('/directors/:directorName', (req, res) => {
    const director = Directors.find(g => g.name === req.params.directorName)
    res.json(director || []);
});

// Adding users to list of users.
let Users = [
    {
                userID:1,
                username:'john_smith',
                email:'john@example.com',
                name: "John Smith",
                password:'XXXXXX',
                state: "active",
    },
    {
                userID:2,
                username:'Chris_Tony',
                email:'ctony@example.com',
                name: "Chris Tony",
                password:'XXXXX',
                state: "active",
    },   
];

app.post('/users', (req, res) => {
    let newUser = req.body;
    if (!newUser.userID) {
        const user = Users.find(g =>  g.userID === parseInt(req.params.userID))
    res.json(user || []);
    res.status(400).send(user);
        } else {
    newUser.userID = uuid.v4();
    Users.push(newUser);
    res.status(201).send(newUser);
        }
});

//  Allow existing user to deregister by ID
app.delete('/users/:userID', (req, res) => {
    let user = Users.find((user) => { return user.userID ===  parseInt(req.params.userID) });
        if (user) {
        Users = Users.filter((obj) => { return obj.userID !==  parseInt(req.params.userID)});
    res.status(201).send('user ' + req.params.userID + ' was deleted.');
        }
});

// Allow user to add a movie to their favorite movies list
app.patch('/users/:userID/favorites/:movieName', (req, res) => {
    res.send('Successful POST to the server a favorite movie on the user list.');
});

// Allow new users to register
app.post('/register', (req, res) => {
    res.send('Successful POST to the server a new user registeration.');
});

// Allow user to update their user info
app.put('/users/:userName', (req, res) => {
    res.send('Successful PUT to the server a user information.');
});

// Allow user to remove a movie from their favorite  movies list
app.delete('/users/:userID/favorites/:movieID', (req, res) => {
    res.send('Successful DELETE to the server a favorite movie on the user list.');
});

// error-handling middleware function that will log all application-level errors to the terminal
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});

