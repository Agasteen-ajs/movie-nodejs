const Movies = require("../models/movies");

const addAllMovies = (req,res) => {
    Movies.insertMany({
        upvotes : 256,
        name : "Raiders of the Lost Ark",
        rating : 8.4,
        year : 1981,
        genre : "Sci-Fi",
        trailer: "https://www.youtube.com/watch?v=XkkzKHCx154",
        cast : [
            {
                "name": "Harrison Ford",
                "age": 78,
                "nationality": "USA"
            },
            {
                "name": "Karen Allen",
                "age": "69",
                "nationality": "USA"
            }
        ]
    }).then((data) => res.json(data))
    .catch(err => console.log(err))
}

const updateMovie = (req,res) => {gi
    const id = req.params.movieId;
    const movieData = req.body
    
    console.log(id)
    console.log(movieData)
}



module.exports = {addAllMovies , updateMovie}