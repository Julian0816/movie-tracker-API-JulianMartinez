const express = require('express');
const { User } = require('../models');
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

router.get("/:id", async(req, res) => {
    //Finding a user by the id
    const data = await User.findByPk(req.params.id)

    //If the user can't be found, send an error
    if(!data) {
        res.status(404).send(`No user with id ${req.params.id}`)
    }
    //Otherwise send data
    res.send(data)
})

module.exports = router