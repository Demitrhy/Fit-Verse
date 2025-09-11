
const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  console.log("Passei por aqui", imc);
  return imc.toFixed(2);
};

const classificarIMC = (imc) => {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau I";
  if (imc < 40) return "Obesidade grau II";
  return "Obesidade grau III (mórbida)";
};

const getData = async (height, weight) => {
  try {
    const alturaMetros = height / 100; 
    const imc = calcularIMC(weight, alturaMetros);
    const classificacao = classificarIMC(imc);

    return {
      info: {
        bmi: imc,
        health: classificacao,
      }
    };
  } catch (error) {
    console.error("Erro ao calcular IMC:", error);
  }
};

export default getData;

