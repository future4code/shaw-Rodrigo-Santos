//2)

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const calculadora = (num1, num2) => {
  switch (operacao) {
    case "add":
      return num1 + num2
      break;
    case "sub":
        return num1 - num2;
      break;
    case "mult":
        return num1 * num2;
      break;
    case "div":
        return num1 / num2;
      break;

    default:
      console.log("Insira valores válidos");
      break;
  }
};

console.log(calculadora(num1, num2));