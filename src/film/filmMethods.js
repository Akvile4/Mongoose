const mongoose = require('mongoose');
const FilmModel = require('./filmModel');
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

    // we are passing arguments of title and actor -> newFilm
exports.addMovie = async (newFilm) => {
    try {
            // with passed arguments we are creating FilmModel which is schema that will store our data
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log('Movie created')
    } catch (error) {
        console.log(error)
    }
        // close the connection so the terminal will stop running
    // mongoose.connection.close();
}

exports.list = async () => {
    try {
            // prints out the whole list of documents we have in our database
        console.log(
            // find all the documents
        await FilmModel.find({})
        )
    } catch (error) {
        console.log(error)
    }
    // mongoose.connection.close()
}

exports.update = async () => {
    try {
            // first {} shows what we are targeting and the second {} to what we want to update
            // in this case we are targeting name key
        await FilmModel.updateOne({name: argv.oldName}, {name: argv.newName});
        console.log('update successfull')
    } catch (error) {
        console.log(error)
    }
    // mongoose.connection.close()
}

exports.deleteOne = async () => {
    try {
        // we have to tell which movie we wanto to delete, we have to put the same title as in database
        await FilmModel.deleteOne( { name: argv.title });
        console.log('its been deleted')
    } catch (error) {
        console.log(error)
    }
    // mongoose.connection.close();
}