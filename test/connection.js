const mongoose = require('mongoose')

//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo')//if not exist create it

mongoose.connection.once('open', function(){ //listener for one time
  console.log('Connection has been made, now make fireworks...')
}).on('error', function(error){
  console.log('Connection error:', error)
})