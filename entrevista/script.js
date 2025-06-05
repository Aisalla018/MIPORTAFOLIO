const apiURL = "http://localhost:5000/pedidos";

async function agregarPedido() {
    const cliente = document.getElementById("cliente").value;
    const estado = document.getElementById("estado").value;

    if (!cliente) {
        alert("Por favor, ingresa el nombre del cliente.");
        return;
    }

    const nuevoPedido = { cliente, estado };

    await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoPedido)
    });

    obtenerPedidos();
}

async function obtenerPedidos() {
    const respuesta = await fetch(apiURL);
    const pedidos = await respuesta.json();

    const lista = document.getElementById("listaPedidos");
    lista.innerHTML = "";
    
    pedidos.forEach(pedido => {
        const elemento = document.createElement("li");
        elemento.textContent = `${pedido.cliente} - Estado: ${pedido.estado}`;
        lista.appendChild(elemento);
    });
}

document.addEventListener("DOMContentLoaded", obtenerPedidos);