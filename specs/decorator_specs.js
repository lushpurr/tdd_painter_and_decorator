const  assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

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
        paint = new Paint(10, false);
        decorator.addPaint(paint);
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1);
    });

    it("should be able to calculate paint litres in stock", function(){
        paint = new Paint(10, false);
        decorator.addPaint(paint);
        const actual = decorator.calculateLitres();
        assert.deepStrictEqual(actual, 10);
    })

   
});