const express = require('express');
const { User, Show } = require('../models');
const router = express.Router();

router.get("/", (req, res) => {
    //Validating router
    console.log("===> userRouter is up and working properly <===")
    res.sendStatus(200)
})

router.get("/all", async (req, res) => {
    //Getting all the users
    const data = await User.findAll()
    res.send(data)
})

router.get("/:id", async (req, res) => {
    //Finding a user by the id
    const data = await User.findByPk(req.params.id)

    //If the user can't be found, send an error
    if(!data) {
        res.status(404).send(`No user with id ${req.params.id}`)
    }
    //Otherwise send data
    res.send(data)
})

//Get all movies wtched by user
router.get("/:id/movies", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    const shows = await user.getShows()
    res.send(shows)
})

router.post("/:id/movies/:sid", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    const show = await Show.findByPk(req.params.sid)
    await user.addShow(show)
    res.sendStatus(201)
})


module.exports = router