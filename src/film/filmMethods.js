const mongoose = require('mongoose');
const FilmModel = require('./filmModel');

exports.addMovie = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log('Movie created')
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close();
}

exports.list = async () => {
    try {
        console.log(
        await FilmModel.find({})
        )
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
}