const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    //Validating router
    console.log("===> showRouter is up and working properly <===")
    res.sendStatus(200)
})

module.exports = router