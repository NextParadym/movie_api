
//Require
const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
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
        title: 'Pitch Perfect',
        year: '2012',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:6,
                name:'Music',
                description:'   '
            },
            {
                id:4,
                name:'Romance',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:'Jason Moore ',
                biography:'   '
            },
            ],
    },
    {
        title: 'Solo: A Star Wars Story',
        year: '2018',
        genre:[
        {
            id:1,
            name:'Comedy',
            description:'   '
        },
        {
            id:2,
            name:'Action',
            description:'   '
        },
        {
            id:3,
            name:'Adventure',
            description:'   '
        },
        ],
        director:[
            {
                id:1,
                name:['Ron Howard'],
                biography:'   '
            },
            ],
    },
    {
        title: 'Detective MJ: Shadow of a Hero',
        year: '2020',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:2,
                name:'Action',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Morris D. Small'],
                biography:'   '
            },
            ],
    },
    {
        title: 'Mum, Dad, Meet Sam',
        year: '2014',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:4,
                name:'Romance',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Tony Sebastian Ukpo'],
                biography:'   '
            },
            ],
    },
    {
        title: 'The Nutty Professor',
        year: '1963',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:4,
                name:'Romance',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Jerry Lewis'],
                biography:'   '
            },
            ],
    },
    {
        title: 'Game Over, Man!',
        year: '2018',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:2,
                name:'Action',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Kyle Newacheck'],
                biography:'   '
            },
            ],
    },
    {
        title: 'No Holds Bars Comedy Presents: Pilot',
        year: '2012',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:2,
                name:'Action',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Derrick Comedy'],
                biography:'   '
            },
            ],
    },
    {
        title: 'The Day After Quarantine',
        year: '2021',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:3,
                name:'Adventure',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Gary Trousdale'],
                biography:'   '
            },
            ],
    },
    {
        title: 'No Filter the Film',
        year: '2015',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:2,
                name:'Adventure',
                description:'   '
            },
            ],
        director:[
            {
                id:1,
                name:['Barry Williams'],
                biography:'   '
            },
            ],
    },
    {
        title: 'All Star Comedy Jam',
        year: '2009',
        genre:[
            {
                id:1,
                name:'Comedy',
                description:'   '
            },
            {
                id:5,
                name:'Documentary',
                description:'   '
            },
            ],
        director:[
            {
                id:2,
                name:'Leslie Small',
                birth_year: '',
                death_year: '',
                bio: '',
            },
            ],
    }
];

const Genres = [
    {
        id:1,
        name:'Comedy',
        description:'   '
    },
    {
        id:2,
        name:'Action',
        description:'   '
    },
    {
        id:3,
        name:'Adventure',
        description:'   '
    },
    {
        id:4,
        name:'Romance',
        description:'   '
    },
    {
        id:5,
        name:'Documentary',
        description:'   '
    },
    {
        id:6,
        name:'Music',
        description:'   '
    },
];

const Directors = [
    {
        id: 1,
        name: 'Jason',
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
    res.json(genre || []);
});

app.get('/genres/id/:id', (req, res) => {
    const genre = Genres.find(g => g.id === parseInt(req.params.id))
    res.json(genre || []);
});

// TODO: do the similar thing whatwe did for Genre
// Create Director array
// Modifiy movies's director attributes
// Here add the logic similar to line 330 & 331 (genreName)
//Get data of a director's information by name
app.get('/directors/:directorName', (req, res) => {
    console.log(req.params.directorName)
    res.send('Successful GET request of directors information.');
});

// Allow new users to register
app.post('/register', (req, res) => {
    res.send('Successful POST to the server a new user registeration.');
});

// Allow user to update their user info
app.put('/users/:id', (req, res) => {
    res.send('Successful PUT to the server a user information.');
});

// Allow user to add a movie to their favorite movies list
app.patch('/users/:id/favorites', (req, res) => {
    res.send('Successful POST to the server a favorite movie on the user list.');
});

// Allow user to remove a movie from their favorite  movies list
app.delete('/users/:id/favorites', (req, res) => {
    res.send('Successful DELETE to the server a favorite movie on the user list.');
});

// Allow existing user to deregister
app.delete('/users/:id', (req, res) => {
    res.send('Successful DELETE a user!');
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
