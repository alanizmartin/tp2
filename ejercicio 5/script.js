document.addEventListener('DOMContentLoaded', (event) => {
    const valorA = document.getElementById('valorA');
    const valorB = document.getElementById('valorB');
    const valorC = document.getElementById('valorC');
    const calcular = document.getElementById('calcular');

    calcular.onclick = () => {
        const areaRect = valorB.value * valorC.value;
        const areaTri = 0.5 * valorB.value * (valorA.value - valorC.value);
        const areaTotal = areaRect + areaTri;

        alert(`El área del terreno es: ${areaTotal} metros cuadrados`);
        console.log(areaTotal);
    };
});