export function mostrarDetalle(id) {
    const detalle = document.getElementById('detalle');
    const detalles = {
        1: "Detalle del Item 1",
        2: "Detalle del Item 2",
        3: "Detalle del Item 3"
    };
    detalle.textContent = detalles[id] || "Selecciona un ítem.";
}
z