//variables
//console.log(variable)

// var variable = '2' // desaconsejado su uso
let variable2
const variableconstante = '3'
//tipos de datos

const NUMEROS = 5646546 //number
const STR = 'string' //string
const BOL = true //boolean
const N = null //null
const arreglos = [23132132, 1321321, 'sldkfjaslkfd'] // any[]
const objetos = {
  llave: 'valor',
  objeto2: {
    llave: 2
  }
}
//bucles

const arr = [5, 5, 4, 4, 8, 6, 6]
//    indice 0  1  2  3  4  5  6
// arr[0]
//

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

let i = 0

while (i < arr.length) {
  //  console.log(arr[i])

  i++
}
// METODOS DE ARREGLOS

//foreach no devuelve nada
const arrForEach = arr.forEach((numero, indice) => {
  return numero
})
// devuelve un nuevo array
const arrMap = arr.map((numero, indice) => {
  return indice
})
// devuelve nuevo array con los valores que cumplan la condición
const filtro = arr.filter((numero, indice) => {
  if (numero > 6) return numero
})

//console.log(filtro)

const suma = arr.reduce((total, actual) => {
  return total + actual
}, 0)

//arr.sort()
//arr.reverse()

//funciones

// FUNCIONES DECLARATIVAS

/**
 *
 * @param {number} a
 * @returns {void}
 *
 *
 */

function miFuncion(a, b, ...varios) {
  console.log(varios)

  console.log('miFuncion')
}

// miFuncion(1, 2, 3, 5, 5, 8)

// FUNCIONES EXPRESADAS

const miFuncion2 = function () {
  return 'hola funcion2'
}

//arrowfunction

const miFuncion3 = () => {
  return 'miFuncion3'
}

class MI_CLASE {
  nombre
  apellido
  dni

  //   constructor(persona) {
  //     this.nombre = persona.nombre
  //   }
  setearnombre(nombre) {
    this.nombre = nombre
  }
  devolver() {
    return this.nombre
  }
  static obtener(a, b) {
    return a + b
  }
}
