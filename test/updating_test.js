const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

// describe('name of test', function(){})
describe('Updating records', function (){
  let char
  beforeEach(function(done){
      char = new MarioChar({
      name:'Toad',
      weight:30
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
  
  it('Increments the weight by 1', function(done){
    MarioChar.update({}, 
      {
        $inc:{ //operators - take current weight and add one async
          weight:1
        }
      })
      .then(
        function(){
          MarioChar.findOne({name:'Toad'}).then((record)=>{
            assert(record.weight === 31)
            done()
          })
        })
         
  })
})