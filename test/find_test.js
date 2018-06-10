const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

// describe('name of test', function(){})
describe('Finding records', function (){
  let char
  beforeEach(function(done){
      char = new MarioChar({
      name:'Toad'
    })  
    char.save()
      .then((()=>{
      done()
    }))

  })
  //Create tests
  //it block describes one test block
  it('Finds one record by name from the database', function(done){
    MarioChar.findOne({name: 'Toad'})
    .then(result=>{
      assert(result.name === 'Toad')
      done()
    })
  })
  it('Finds one record by ID from the database', function(done){
    MarioChar.findById({_id: char._id})
    .then(result=>{
      assert(result._id.toString() === char._id.toString())
      done()
    })
  })
})