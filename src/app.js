require('./db/connection');
const mongoose = require('mongoose');
const yargs = require('yargs/yargs');
const { addMovie, list, update, deleteOne, deleteMany, listOne } = require('./film/filmMethods');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;


const app = async () => {
    if (argv.add) {
        await addMovie({
            title: argv.title,
            actor: argv.actor,
            genre: argv.genre,
            year: argv.year,
        })
    }
    else if (argv.listOne) {
        await listOne();
    }
    else if (argv.list) {
        await list();
    }
    else if (argv.updateOne) {
        await update();
    }
    else if (argv.delete) {
        await deleteOne();
    }
    else if (argv.deleteMany) {
        await deleteMany();
    }
    else {
        console.log('wrong commamnd')
    }
        // will close the connection so the terminal will stop running , but we have to await when we are calling any function
    mongoose.connection.close();
}

app()