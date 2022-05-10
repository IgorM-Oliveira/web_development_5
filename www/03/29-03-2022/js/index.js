const heigth = 1.75
const weight = 76

let imc = weight/(heigth*heigth)

const classificacao = [
    {imc: [0, 18.5], name: 'Magreza', grau: 0},
    {imc: [18.5, 24.9], name: 'Normal', grau: 0},
    {imc: [25, 29.9], name: 'Sobrepeso', grau: 1},
    {imc: [30, 39.9], name: 'Obesidade', grau: 2},
    {imc: [40, Infinity], name: 'Obesidade Grave', grau: 3}
]

classificacao.forEach((item) => {
    if (imc > item.imc[0] && imc <= item.imc[1]) {
        alert(`IMC: ${imc.toFixed(2)}\nClassificação: ${item.name}\nGrau: ${item.grau}\n`)
    }
});