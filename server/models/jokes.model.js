const mongoose = require("mongoose")


const JokesSchema = new mongoose.Schema({
    setup:{ 
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    },
    punchline:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    },
    isImportant:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})


const Jokes = mongoose.model("Joke", JokesSchema);
module.exports = Jokes;

