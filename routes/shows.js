const express = require('express');
const { logTable, logAllTables } = require('sequelize-logger');
const { Show } = require('../models');
const router = express.Router();

//GET
router.get("/", (req, res) => {
    //Validating router
    console.log("===> showRouter is up and working properly <===")
    res.sendStatus(200)
})

//GET
router.get("/all", async (req, res) => {
    //Getting all the Shows
    const data = await Show.findAll()
    res.send(data)
})

//GET
router.get("/:id", async (req, res) => {
    //Finding a show by the id
    const data = await Show.findByPk(req.params.id)

    //If the user can't be found, send an error
    if(!data) {
        res.status(404).send(`No show with id ${req.params.id}`)
    }
    //Otherwise send data
    res.send(data)
})

router.put("/:id", async (req, res) => {
    console.log(req.body)
    //updating show status
    let foundShow = await Show.findByPk(req.body.id)
    await foundShow.update({available: req.body.available})
    //send something back
    await logTable(Show)
    res.sendStatus(200)
    

})

//DELETE
router.delete("/", async (req, res) => {
    //Deleting one show by the id
    const deleted = await Show.destroy({
        where: {id: req.params.id}
    })
    if(!deleted) {
        res.status(404).send(`No show with id ${req.params.id}`)
    }
    await logTable(Show)
    res.status(202).send(`Show with id ${req.params.id} was deleted`)
})

module.exports = router