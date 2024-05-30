function calcularIMC() {
    const peso = (document.getElementById('peso').value);
    const estatura = (document.getElementById('estatura').value);
    const imc = peso / (estatura * estatura);
    alert(`Tu IMC es ${imc.toFixed(2)}`);
}
