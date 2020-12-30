const express = require("express");
const router = express.Router();
const {addAllMovies, updateMovie} = require("../controller/addMovie")

router.post("/addMovies",addAllMovies)
router.put("/updateMovie/:movieId",updateMovie)

module.exports = router;