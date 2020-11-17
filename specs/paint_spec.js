const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {
    let paint;

    beforeEach( function() {
        paint = new Paint(10, false);
    });

    it("should have a number of litres", function() {
        const actual = paint.litresOfPaint;
        assert.strictEqual(actual, 10);
    });

    it("should check if it's empty", function() {
        const actual = paint.empty;
        assert.strictEqual(actual, false);
    });

    it("should be able to empty itself", function() {
        paint.emptyPaint();
        const actual = paint.litresOfPaint;
        assert.strictEqual(actual, 0);
    })

})