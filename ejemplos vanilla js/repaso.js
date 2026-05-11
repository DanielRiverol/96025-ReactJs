console.log("Repaso");
// template string ``

const nombre1 = "Julian";
console.log(`Hola ${nombre1}`);
// fnuciones
// function sumar(a,b){
//     return a + b
// }
const sumar = (a, b) => a + b;

// objetos
const usuario = { nombre: "juan", edad: 34 };
// desctructuring
const { nombre, edad } = usuario;
// console.log(nombre);
// console.log(edad);
const numeros = [1, 2, 3];
const [primero, segundo, tercero] = numeros;
// console.log(numeros[0]);
// console.log(primero);
// console.log(segundo);
// console.log(tercero);

// if (usuario.edad >= 30) {
//   console.log("Milenial");
// } else {
//   console.log("Centenials");
// }
// // op ternario
// console.log(usuario.edad >= 30 ? "milenial" : "centenial");

// spread ...
const usuarioActualizado = {
  ...usuario,
  edad: 44,
  isActive: true,
};
console.log(usuario);
console.log(usuarioActualizado);
