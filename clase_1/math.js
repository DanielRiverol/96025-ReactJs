const sumar = (a, b) => {
  return a + b;
};
const restar = (a, b) => {
  return a - b;
};
const dividir = (a, b) => {
  if (b === 0) {
    return "no se puede dividir por 0";
  }
  return a / b;
};
const multiplicar = (a, b) => {
  return a * b;
};

const calculadora = (a, b, op) => {
  switch (op) {
    case "+":
      return sumar(a, b);

    default:
      break;
  }
};
export default {
  sumar: sumar,
  restar: restar,
  multiplicar: multiplicar,
  dividir: dividir,
};
// export default calculadora
