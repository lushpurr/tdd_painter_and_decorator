const Room = function(squareMetres, painted) {
    this.squareMetres = squareMetres;
    this.painted = painted;

};

Room.prototype.paintRoom = function(){
    this.painted = true;
}
module.exports = Room;