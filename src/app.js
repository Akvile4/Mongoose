require('./db/connection');
const mongoose = require('mongoose');

const yargs = require('yargs/yargs');
const { addMovie, list } = require('./film/filmMethods');
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
        list()
        console.log('list')
    }
    else {
        console.log('wrong commamnd')
    }
}

app()