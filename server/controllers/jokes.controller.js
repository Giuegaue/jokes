const Jokes = require("../models/jokes.model");

module.exports = {

    findAll: (req, res) =>{
        Jokes.find()
            .then(allJokes => res.json({joke: allJokes}))
            .catch(err => res.json({message: "There was an error res", error: err}))
    },


    findOne: (req, res) =>{
        console.log(req.params)
        Jokes.find(req.params._id)
            .then(joke => res.json(joke))
            .catch(err => res.json({message: "There was an error res", error: err}))
    },


    update: (req, res) =>{
        console.log(req.params)
        Jokes.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json({message: "There was an error res", error: err}))
    },


    create: (req, res) => {
        Jokes.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.json({message: "There was an error res", error: err}))
    },

    delete: (req, res) =>{
        Jokes.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: "There was an error res", error: err}))
    },

}




