function plus(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    let c = a + b;
    document.getElementById("result").textContent = c;
}
function minus(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    let c = a - b;
    document.getElementById("result").textContent = c;
}
function multiply(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    document.getElementById("result").textContent = c;
    alert(c);
}
function divide(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    if(b !== 0){
        let c = a / b;
        document.getElementById("result").textContent = c;
    }
    else{
        document.getElementById("result").textContent = "Ділення на нуль неможливе";
    }
}