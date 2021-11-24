
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
const Directors = Models.Director;
const Genres = Models.Genre;

mongoose.connect('mongodb://localhost:27017/myComedyFlix', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
app.get('/movies', (req, res) => {
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
app.get('/movies/:title', (req, res) => {
    Movies.findOne({ Title : req.params.title })
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//GET
//Gets info about a specific genre
app.get('/genres/genre/:name', (req, res) => {
    Genres.findOne({ "Genre.Name" : req.params.name })
    .then((genre) => {
        res.json(genre);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//GET
//Gets information about a specific director
app.get('/directors/director/:name', (req, res) => {
    Directors.findOne({ "Director.Name" : req.params.name })
    .then((director) => {
        res.json(director);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
    });

//GET
// Get all users
app.get('/users', (req, res) => {
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
app.get('/users/:Username', (req, res) => {
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
app.put('/users/:Username', (req, res) => {
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
app.post('/users/:Username/movies/:MovieID', (req, res) => {
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
app.delete('/users/:Username/movies/:MovieID', (req, res) => {
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
app.delete('/users/:Username', (req, res) => {
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

