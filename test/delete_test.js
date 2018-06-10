const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

// describe('name of test', function(){})
describe('Deleting records', function (){
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
  it('Deletes one record by name from the database', function(done){
    MarioChar.findOneAndRemove({name: 'Toad'})
    .then(()=>{
      MarioChar.findOne({name:'Toad'}).then(result=>{
        assert(result===null)
        done()
      })
    })
  })
  
})