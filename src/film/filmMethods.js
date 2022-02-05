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
		console.log(`Movie ${argv.title} added!`)
	} catch (error) {
		console.log(error)
	}
	// mongoose.connection.close();
}
	// to find one movie with specific details
exports.listOne = async () => {
	try {
		console.log(
			await FilmModel.findOne(
				{title: argv.title, actor: argv.actor}
			)
		)
	} catch (error) {
		console.log(error)
	}
}

exports.list = async () => {
	try {
			// finds all the movies with specifil filter
		if (argv.title) {
			console.log(
				await FilmModel.find(
					{title: argv.title}
				)
			)
		}
		else if (argv.actor) {
			console.log(
				await FilmModel.find(
					{actor: argv.actor}
				)
			)
		}
		else if (argv.genre) {
			console.log(
				await FilmModel.find(
					{genre: argv.genre}
				)
			)
		}
		else if (argv.year) {
			console.log(
				await FilmModel.find(
					{year: argv.year}
				)
			)
		}
		else {
				// prints out the whole list of documents we have in our database
			console.log(
					// find all the documents
				await FilmModel.find({})
			)
		}
	} catch (error) {
		console.log(error)
	}
	// mongoose.connection.close()
}

exports.update = async () => {
	try {
			// first {} shows what we are targeting and the second {} to what we want to update
			// in this case we are targeting name key
		await FilmModel.updateOne(
			{title: argv.oldName}, {title: argv.newName}
		);
		console.log(`Movie's title ${argv.oldName} was updated to ${argv.newName}!`)
	} catch (error) {
		console.log(error)
	}
}

exports.deleteOne = async () => {
	try {
		// we have to tell which movie we wanto to delete, we have to put the same title as in database
		// if there movie movies with the same name , we have to be specific
		await FilmModel.deleteOne( 
			{ title: argv.title, actor: argv.actor }
		);
		console.log(`Movie ${argv.title} was deleted!`)
	} catch (error) {
		console.log(error)
	}
}

exports.deleteMany = async () => {
	try {
			// deletes all the movies with what we ask
		if (argv.title) {
			await FilmModel.deleteMany( 
				{title: argv.title} 
			);
			console.log(`All movies called ${argv.title} were deleted`)
		}
		else if (argv.actor) {
			await FilmModel.deleteMany( 
				{actor: argv.actor} 
			);
			console.log(`All movies with ${argv.actor} were deleted`)
		}
		else if (argv.genre) {
			await FilmModel.deleteMany( 
				{genre: argv.genre} 
			);
			console.log(`All movies with ${argv.genre} were deleted`)
		}
		else if (argv.year) {
			await FilmModel.deleteMany( 
				{year: argv.year} 
			);
			console.log(`All movies with ${argv.year} were deleted`)
		}
		else {
				// to delete all movies from the database
			await FilmModel.deleteMany()
			console.log('All moovies have been deleted!')
		}
	} catch (error) {
		console.log(error)
	}
}