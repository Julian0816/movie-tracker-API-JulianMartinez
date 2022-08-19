const db = require('../db');
const Show = require('./Show');
const User = require('./User')
const {logAllTables} = require('sequelize-logger')

//Tables relationships //Best to keep here.
Show.belongsToMany(User, {through: 'user_show'}) //many to many
User.belongsToMany(Show, {through: 'user_show'}) //many to many

//Async funtion to add some fake data
async function seed () {

    //Deletes fake data from tables and recreates them empty
    await db.sync({force: true})

    //Some fake data
    const john = await User.create({
        name: 'John',
        surname: 'Smith',
        email: 'johnsmith@fake.com',
        fav_genre: 'Action'
    })

    await User.create({
        name: 'Jennifer',
        surname: 'Lopez',
        email: 'jenny@fake.com',
        fav_genre: 'Romantic'
    })

    const show1 = await Show.create({
        name: 'Avengers Assemble',
        genre: 'Action',
        available: true      
    })

    const show2 = await Show.create({
        name: 'Persuadion',
        genre: 'Romantic',
        available: false
    })

    await Show.create({
        name: 'Tenet',
        genre: 'Action',
        available: true
    })

    await Show.create({
        name: 'Avatar',
        genre: 'SciFi',
        available: true
    })

    await Show.create({
        name: 'Warcraft',
        genre: 'SciFi',
        available: true
    })

    await Show.create({
        name: 'Man Of Steel',
        genre: 'SciFi',
        available: true
    })
    
    await john.addShow(show1)
    await john.addShow(show2)

    await logAllTables(db) //Comment out this line to preven logging to the console

}

module.exports = {Show, User, seed}