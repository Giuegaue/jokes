const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "jokes_db";

app.use(cors(), express.json(), express.urlencoded({extended:true}));


require("./config/mongoose.config")(DB)


require("./routes/jokes.routes")(app)


app.listen(PORT, ()=> {
    console.log("server up")
})





