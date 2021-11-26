//
// Require
const express = require('express'),
bodyParser = require('body-parser'),
uuid = require('uuid');

const morgan = require('morgan');
const app = express();

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myComedyFlix', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Require the Passport module and import the “passport.js” file.
const passport = require('passport');
require('./passport');

app.use(passport.initialize())

// Add “auth.js” file into your project.
let auth = require('./auth')(app);

// Serving static files
app.use(express.static('public'));

// Use the Morgan middleware library to log all requests (instead of using 

app.use(morgan('common'));

// default text response when at /
app.get('/', (req, res) => {
    res.send(" welcome to My Comedy Movie Flix!");
    });
//Created a topTenMovies list : GET requests
app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});

//GET
// Get the list of ALL movies-return JSON object when at /movies
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
    Movies.find()
    .then((movie) => {
    res.status(201).json(movie);
    })
    .catch((err) => {
    console.error(err);
    res.status(400).send('Error: ' + err);
    });
});

//GET
//Gets movie by title
app.get('/movies/:title', passport.authenticate('jwt', { session: false }), (req, res) => {
    Movies.findOne({ Title : req.params.title })
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//Old
//GET
//Gets info about a specific genre
<<<<<<< HEAD
app.get('/genres/:name', passport.authenticate('jwt', { session: false }), (req, res) => {
    Movies.findOne({ "Genre.Name" : req.params.name })
    .then((movie) => {
        if (movie) {
            return res.json(movie.Genre);
        }
        return res.send(`Genre ${req.params.name} not found!`, 404)
=======
app.get('/genres/:name', (req, res) => {
    Movies.findOne({ "Genre.Name" : req.params.name })
    .then((movie) => {
        res.json(movie.Genre);
>>>>>>> 3c5bb0829989d5c9e6bd532a088a4a2f50f294c6
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//GET
//Gets information about a specific director
<<<<<<< HEAD
app.get('/directors/:name', passport.authenticate('jwt', { session: false }), (req, res) => {
=======
app.get('/directors/:name', (req, res) => {
>>>>>>> 3c5bb0829989d5c9e6bd532a088a4a2f50f294c6
    Movies.findOne({ "Director.Name" : req.params.name })
    .then((movie) => {
        if (movie) {
            return res.json(movie.Director); 
        }
        return res.send(`Director ${req.params.name} not found!`, 404)
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
    });

//GET
// Get all users
app.get('/users', passport.authenticate('jwt', { session: false }), (req, res) => {
    
    Users.find()
    .then((users) => {
        res.status(201).json(users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//GET
// Get a user by username
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOne({ Username: req.params.Username })
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//PUT
// Update a user's info, by username
/* We’ll expect JSON in this format
{
Username: String,
(required)
Password: String,
(required)
Email: String,
(required)
Birthday: Date
}*/
app.put('/users/:Username',passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, { $set:
    {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday
    }
    },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
    if(err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
    } else {
        res.json(updatedUser);
    }
    });
});

// POST
// Allow new users to register
app.post('/users', (req, res) => {
    console.log(req.body) 
    Users.findOne({ Username: req.body.Username })
    .then((user) => {
    if (user) {
        return res.status(400).send(req.body.Username + 'already exists');
    } else {
        Users.create({
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
            Birthday: req.body.Birthday
        })
        .then((user) =>{res.status(201).json(user) })
        .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
        })
    }
    })
    .catch((error) => {
    console.error(error);
    res.status(500).send('Error: ' + error);
    });
});

// Add a movie to a user's list of favorites
app.post('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, {
        $push: { FavoriteMovies: req.params.MovieID }
    },
     { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
    if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
    } else {
        res.json(updatedUser);
    }
    });
});

// Remove a movie to a user's list of favorites
<<<<<<< HEAD
app.delete('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
=======
app.delete('/users/:Username/movies/:MovieID', (req, res) => {
>>>>>>> 3c5bb0829989d5c9e6bd532a088a4a2f50f294c6
    Users.findOneAndUpdate({ Username : req.params.Username }, {
        $pull: { FavoriteMovies: req.params.MovieID }
    },
     { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
        if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
    } else {
        res.json(updatedUser);
    }
    });
});

//DELETE
// Allow existing users to deregister
app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
        if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
        } else {
        res.status(200).send(req.params.Username + ' was deleted.');
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
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

