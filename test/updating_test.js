const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

// describe('name of test', function(){})
describe('Updating records', function (){
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
  it('Updates one record in the database', function(done){
    MarioChar.findOneAndUpdate({name:'Toad'}, {name:'ShyGuy'})
    .then(()=>{
      MarioChar.findOne({_id:char._id})
      .then((result)=>{
        assert(result.name==='ShyGuy')
        done()
      })
    })
  })
  
})