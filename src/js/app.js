import { cargarMaestro } from './maestro.js';
import { mostrarDetalle } from './detalle.js';

document.addEventListener('DOMContentLoaded', () => {
    cargarMaestro();
});
document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('entrada');
    const nombreElemento = document.getElementById('nombre');
    const apellidoElemento = document.getElementById('apellido');
    let estado = 'nombre'; // Alterna entre 'nombre' y 'apellido'

    entrada.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const valor = entrada.value.trim(); // Elimina espacios al inicio y final
            if (valor) {
                if (estado === 'nombre') {
                    nombreElemento.textContent = `Nombre: ${valor}`;
                    estado = 'apellido'; // Cambia al modo apellido
                    entrada.value = ''; // Limpia el cuadro de texto
                    entrada.placeholder = 'Escribe el apellido';
                } else if (estado === 'apellido') {
                    apellidoElemento.textContent = `Apellido: ${valor}`;
                    estado = 'nombre'; // Regresa al modo nombre
                    entrada.value = ''; // Limpia el cuadro de texto
                    entrada.placeholder = 'Escribe el nombre';
                }
            }
        }
    });
});
