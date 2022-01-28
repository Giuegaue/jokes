const mongoose = require('mongoose');

module.exports = (DB) =>{
    mongoose.connect(`mongodb://localhost:27017/${DB}`)
    .then(() => console.log(`connected to ${DB}`))
    .catch(err => console.log('cannot connect', err))
}