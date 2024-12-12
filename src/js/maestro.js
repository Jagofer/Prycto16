export function cargarMaestro() {
    const maestro = document.getElementById('maestro');
    maestro.innerHTML = `
        <ul>
            <li onclick="mostrarDetalle(1)">Item 1</li>
            <li onclick="mostrarDetalle(2)">Item 2</li>
            <li onclick="mostrarDetalle(3)">Item 3</li>
        </ul>
    `;
}
