document.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const altura = document.getElementById('altura');
    const correo = document.getElementById('correo');
    const enviar = document.getElementById('enviar');
    const mensaje = document.getElementById('mensaje');

    enviar.onclick = () => {
        
        mensaje.style.color = 'red';

        const edadValue = parseInt(edad.value, 10);
        const alturaValue = parseInt(altura.value, 10);

        if (nombre.value === '' || nombre.value.length > 50) {
            mensaje.textContent = "El nombre no puede estar vacío y debe ser de un máximo de 50 caracteres.";
        } else if (apellido.value === '' || apellido.value.length > 50) {
            mensaje.textContent = "El apellido no puede estar vacío y debe ser de un máximo de 50 caracteres.";
        } else if (isNaN(edadValue) || edadValue < 18) {
            mensaje.textContent = "La edad no debe ser negativa y debe ser mayor o igual a 18 años.";
        } else if (isNaN(alturaValue) || alturaValue < 0 || alturaValue > 230) {
            mensaje.textContent = "La altura no puede ser negativa y no puede ser mayor a 230 cm.";
        } else if (correo.value.trim() === '' || !correo.value.includes('@')) {
            mensaje.textContent = "El correo electrónico no puede estar vacío y debe incluir '@'.";
        } else {
            mensaje.textContent = "Todos los campos fueron ingresados correctamente.";
            mensaje.style.color = 'green';
            nombre.value = ''
            apellido.value = ''
            edad.value = ''
            altura.value = ''
            correo.value = ''
        }

    };
    
});