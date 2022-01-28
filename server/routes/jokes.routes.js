const Jokes = require("../controllers/jokes.controller")

module.exports = (app) =>{
    app.get("/api/jokes", Jokes.findAll)
    app.post("/api/jokes", Jokes.create)
    app.get("/api/jokes/:id", Jokes.findOne)
    app.put("/api/jokes/:id", Jokes.update)
    app.delete("/api/jokes/:id", Jokes.delete)
}