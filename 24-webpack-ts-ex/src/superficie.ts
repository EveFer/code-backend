export default class Superficie {

    static getSquare = (lado: number): number => {
        const superficie:number = lado * lado
        return superficie
    }
    static getRectangle = (height: number, width: number): number => {
        const superficie: number = height * width;
        return superficie
    }
    static getCircle = (radio: number): number => {
        const superficie: number = Math.PI * (radio * radio)
        return superficie
    }
}