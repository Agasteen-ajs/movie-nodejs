const bodyParser = require("body-parser");
const express = require("express");
const app = express()
const mongoose = require("mongoose");
const movies = require("./routes/movies")
const cors = require("cors")

app.get("/", (req,res) => {
    res.send("hello");
} )

mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/movies', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log('DB CONNECTED');
	})

app.use("/api",movies)
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})