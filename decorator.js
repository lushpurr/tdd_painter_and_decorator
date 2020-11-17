const Decorator = function(paintStock){
    this.paintStock = paintStock;
};

Decorator.prototype.addPaint = function(paint){
    this.paintStock.push(paint); 

};

Decorator.prototype.calculateLitres = function(){
    let litres = 0;
    for(let paint in this.paintStock){
        console.log(paint);
        litres += paint.litresOfPaint;
    };
    return litres;
};


module.exports = Decorator;