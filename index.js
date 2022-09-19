const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)
function calcular(){
    console.log(txtOperador.value)
    const operacion = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "/" || operacion == "*") && (!isNaN(op1) && !isNaN(op2))){
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                 resultado = op1 - op2
                break;
            case "/":
                resultado = op1 / op2
                break;
            case "*":
                resultado = op1 * op2
                break;
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= "+ resultado
    } else {
        pResultado.style = "color:red"
        pResultado.innerText = "Cálculo imposible"
    }
}