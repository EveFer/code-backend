export default class Perimetro {
    static getCircle(radio: number): number {
        return 2*Math.PI*radio 
    }
    static getSquare(lado: number): number {
        return lado*4
    }
    static getRectangle(height: number, width: number): number {
        return 2*height+2*width
    }
}