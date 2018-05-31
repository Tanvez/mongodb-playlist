const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

// describe('name of test', function(){})
describe('some demo tests', function (){

  //Create tests
    //it block describes one test block
  it('Saves a record to the database', function(){

    let char = new MarioChar({
      name:'Toad'
    })

    char.save()
    
  })
})