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
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:2,
                name:'Ron Howard',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:3,
                name:'Morris D. Small',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:4,
                name:'Tony Sebastian Ukpo',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:5,
                name:'Jerry Lewis',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:6,
                name:'Kyle Newacheck',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:7,
                name:'Derrick Comedy',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:8,
                name:'Gary Trousdale',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:9,
                name:'Barry Williams',
                birth_year: '',
                death_year: '',
                bio: '',
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
                id:10,
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
        id:1,
        name:'Comedy',
        description:'   ',
    },
    {
        id:2,
        name:'Action',
        description:'   ',
    },
    {
        id:3,
        name:'Adventure',
        description:'   ',
    },
    {
        id:4,
        name:'Romance',
        description:'   ',
    },
    {
        id:5,
        name:'Documentary',
        description:'   ',
    },
    {
        id:6,
        name:'Music',
        description:'   ',
    },
];

// Director objects
const Directors = [
    {
        id: 1,
        name: 'Jason Moore',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 2,
        name: 'Ron Howard',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 3,
        name: 'Morris D. Small',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 4,
        name: 'Tony Sebastian Ukpo',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 5,
        name: 'Jerry Lewis',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 6,
        name: 'Kyle Newacheck',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 7,
        name: 'Derrick Comedy',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 8,
        name: 'Gary Trousdale',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 9,
        name: 'Barry Williams',
        birth_year: '',
        death_year: '',
        bio: '',
    },
    {
        id: 10,
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

// Add data on a new user to our list of users.
let Users = [
    {
                id:1,
                username:'john_smith',
                email:'john@example.com',
                name: "John Smith",
                password:'XXXXXX',
                state: "active",
    },
    {
                id:2,
                username:'Chris_Tony',
                email:'ctony@example.com',
                name: "Chris Tony",
                password:'XXXXX',
                state: "active",
    },   
];

app.post('/users/usersid/:id', (req, res) => {
    let newUser = req.body;
    if (!newUser.id) {
        const user = Users.find(g =>  g.id === parseInt(req.params.id))
    res.json(user || []);
    res.status(400).send(user);
        } else {
    newUser.id = uuid.v4();
    Users.push(newUser);
    res.status(201).send(newUser);
        }
});

//  Allow existing user to deregister by ID
app.delete('/users/:id', (req, res) => {
    let user = Users.find((user) => { return user.id ===  parseInt(req.params.id) });
        if (user) {
        Users = Users.filter((obj) => { return obj.id !==  parseInt(req.params.id)});
    res.status(201).send('user ' + req.params.id + ' was deleted.');
        }
});

// Allow user to add a movie to their favorite movies list
app.patch('/users/:id/favourites', (req, res) => {
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
app.delete('/users/:id/favourites', (req, res) => {
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

