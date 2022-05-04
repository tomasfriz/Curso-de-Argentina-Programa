/*
Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
DiagonalVertical y DiagonalHorizontal.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
Y también debe de tener un método que calcule el area, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
Este método devolverá un número.
*/
class Rombo {
    diagonalVertical: number;
    diagonalHorizontal: number;
    calcularArea(): number {
        return this.diagonalHorizontal * this.diagonalVertical;
    };
    constructor(diagonalVertical: number, diagonalHorizontal: number) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
}