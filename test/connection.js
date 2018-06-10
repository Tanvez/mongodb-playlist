const mongoose = require('mongoose')

// Connect to the DB before test runs

before((done)=>{
//connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo')//if not exist create it
  mongoose.connection.once('open', function(){ //listener for one time
  console.log('Connection has been made, now make fireworks...')
  done()
  }).on('error', function(error){
  console.log('Connection error:', error)
  })
})

//Drop the characters collection before each test
beforeEach(function(done){
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done()
  }) // async request
})