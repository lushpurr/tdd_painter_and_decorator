const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    let room;
    beforeEach(function(){
        room = new Room(4, false);
    });

    it('should have an area in square metres', function(){
        const actual = room.squareMetres;
        assert.strictEqual(actual, 4);
    })

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })

    it('should be able to paint room', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })
});

