const  assert = require('assert');
const Decorator = require('../decorator.js');


describe('Decorator', function(){
    let decorator; 

    beforeEach( function(){
        decorator = new Decorator([]);
    });
    it("should start with an empty paint stock", function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual,[]);
    })

    it("should add a can of paint to paint stock", function(){
        decorator.addPaint("Elephant's Breath");
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1);
    })

   
});