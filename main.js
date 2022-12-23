




function calculadora()
{
    let A = Number(document.getElementById('A').value);
    let B = Number(document.getElementById('B').value);
    let Operador = document.getElementById('operacion').value;
    let resultado = 0;

    if(Operador === "Suma")
    {resultado = A + B;}
    else if(Operador === "Resta")
    {resultado = A - B;}
    else if(Operador === "Multiplicacion")
    {resultado = A * B;}
    else if(Operador === "Division")
    {resultado = A / B;}

    document.getElementById('resultado').innerHTML = resultado;

    
}









