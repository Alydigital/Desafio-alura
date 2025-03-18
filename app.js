// Array inicial para los nombres que se ingresan
let amigos = [];

// Tomar el valor del input y agregarlo al array
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Verificar si el nombre está vacío o ya está en la lista
    if (nombre === "" || amigos.includes(nombre)) {
        alert('Por favor, inserte un nombre válido o que no esté repetido.');
        return; // Detener la función si la validación falla
    }

    amigos.push(nombre);
    input.value = ''; // Limpiar el campo de entrada

    actualizarLista(); // 📌 Llamamos a la función para actualizar la lista en pantalla
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
