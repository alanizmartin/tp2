document.addEventListener('DOMContentLoaded', () => {
    const listado = document.getElementById('listado');
    const mostrar = document.getElementById('mostrar');

    mostrar.addEventListener('click', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.ok) {
            const usuarios = await res.json();
            mostrarUsuarios(usuarios);
        } else {
            console.error('Error: no llegaron los datos');
        }
    });

    function mostrarUsuarios(usuarios) {
        usuarios.forEach(usuario => {
            const item = document.createElement('li');
            item.textContent = `${usuario.id} - ${usuario.name} - ${usuario.username} - ${usuario.email} - ${usuario.website}`;
            
            const boton = document.createElement('button');
            boton.textContent = 'Ver tareas';
            item.appendChild(boton);

            const tareasDiv = document.createElement('div');
            tareasDiv.style.display = 'none';
            item.appendChild(tareasDiv);

            boton.addEventListener('click', async () => {
                if (tareasDiv.style.display === 'none') {
                    const tareas = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${usuario.id}`).then(res => res.json());
                    tareasDiv.innerHTML = '';
                    tareas.forEach(tarea => {
                        const tareaItem = document.createElement('p');
                        tareaItem.textContent = tarea.title;
                        tareaItem.style.color = tarea.completed ? 'green' : 'red';
                        tareasDiv.appendChild(tareaItem);
                    });
                    tareasDiv.style.display = 'block';
                    boton.textContent = 'Ocultar tareas';
                } else {
                    tareasDiv.style.display = 'none';
                    boton.textContent = 'Ver tareas';
                }
            });

            listado.appendChild(item);
        });
    }
});
