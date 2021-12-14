
class Color {
    getColor(): string {
        // let color:string = (Math.floor(Math.random() * (256 - 0)) + 0).toString().padStart(3, '0');
        let color:string = (Math.floor(Math.random() * (256 - 0)) + 0).toString();
        color = color.length<3 && color.length>1? '0'.concat(color): '00'.concat(color)
        return color
    }
    generateColor (): string {
       return `rgb(${this.getColor()}, ${this.getColor()}, ${this.getColor()})`
    }

}

const colorGenerated:string = new Color().generateColor()
console.log(colorGenerated)