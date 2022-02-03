require('./db/connection');
const mongoose = require('mongoose');

const yargs = require('yargs/yargs');
const { addMovie, list, update, deleteOne } = require('./film/filmMethods');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;


const app = async () => {
    if (argv.add) {
        await addMovie({
            name: argv.title,
            actor: argv.actor
        })
    }
    else if (argv.list) {
        await list()
        console.log('list')
    }
    // else if (argv.update) {
    //     await FilmModel.updateOne({
    //         name: argv.title,
    //         actor: argv.actor
    //     })
    //     console.log('Update happened');
    // }
    else if (argv.updateOne) {
        await update();
        console.log('We got the updates');
    }
    else if (argv.delete) {
        await deleteOne();
        console.log('DELETED!!!!')
    }
    else {
        console.log('wrong commamnd')
    }
        // will close the connection so the terminal will stop running , but we have to await when we are calling any function
    mongoose.connection.close();
}

app()