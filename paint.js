const Paint = function(litresOfPaint, empty) {
    this.litresOfPaint = litresOfPaint;
    this.empty = empty;
} 

Paint.prototype.emptyPaint = function() {
    this.litresOfPaint = 0;
}

module.exports = Paint;