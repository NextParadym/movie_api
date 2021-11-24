const mongoose = require('mongoose');

let movieSchema = mongoose.Schema({
Title: {type: String, required: true},
Description: {type: String, required: true},
Genre: {
    Name: String,
    Description: String
},

Director: {
    Name: String,
    Bio: String,
    Birthdate: Date
},
ImagePath: String,
Featured: Boolean,
ReleaseYear: Number
});

let genreSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true}
})

let directorSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Bio: {type: String, required: true},
    Birth: Date,
    Dirth: Date
})

let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavouriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});


let Movie = mongoose.model('Movie', movieSchema);
let Genre = mongoose.model('Genre', genreSchema);
let Director = mongoose.model('Director', directorSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.Genre = Genre;
module.exports.Director = Director;
module.exports.User = User;


