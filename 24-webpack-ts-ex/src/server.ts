import express from 'express'
import Superficie from './superficie'
import Perimetro from './perimetro'

const app = express();

app.get('/', (req, res) => {
    const resolveSuper = {
        circle: Superficie.getCircle(8),
        square: Superficie.getSquare(10),
        rectangle: Superficie.getRectangle(20, 10)
    }
    const resolvePerimetro = {
        circle: Perimetro.getCircle(8),
        square: Perimetro.getSquare(15),
        rectangle: Perimetro.getRectangle(10, 5)
    }
    res.json({
       superficie: resolveSuper,
       perimetro: resolvePerimetro
    })
})

app.listen(8080, () => {
    console.log('Server running...')
})