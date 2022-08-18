const db = require('../db');
const Show = require('./shows');
const User = require('./users')

//Async funtion to add some fake data
async function seed () {

    //Deletes fake data from tables and recreates them empty
    await db.sync({force: true})

    //Some fake data
    await User.create({
        name: 'John',
        surname: 'Smith',
        email: 'johnsmith@fake.com',
        fav_genre: 'action',
        shows_wateched: 'Mission Impossible',
        password: '103693'
    })

    await User.create({
        name: 'Jennifer',
        surname: 'Lopez',
        email: 'jenny@fake.com',
        fav_genre: 'romantic',
        shows_wateched: 'Cheese love',
        password: '396103'
    })

    await Show.create({
        name: 'Avenger Asseble',
        genre: 'Action',
        rating: '5'
    })

    await Show.create({
        name: 'Persuadion',
        genre: 'Romantic',
        rating: '1'
    })

}

module.exports = {Show, User}