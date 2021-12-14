var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.getColor = function () {
        // let color:string = (Math.floor(Math.random() * (256 - 0)) + 0).toString().padStart(3, '0');
        var color = (Math.floor(Math.random() * (256 - 0)) + 0).toString();
        if(color.length == 2) color = '0'.concat(color)
        if(color.length == 1 ) color = '00'.concat(color)
        return color;
    };
    Color.prototype.generateColor = function () {
        return "rgb(".concat(this.getColor(), ", ").concat(this.getColor(), ", ").concat(this.getColor(), ")");
    };
    return Color;
}());
var colorGenerated = new Color().generateColor();
console.log(colorGenerated);
