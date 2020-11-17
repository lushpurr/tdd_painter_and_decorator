const Decorator = function(paintStock){
    this.paintStock = paintStock;
};

Decorator.prototype.addPaint = function(paintCan){
    this.paintStock.push(paintCan); 

}


module.exports = Decorator;