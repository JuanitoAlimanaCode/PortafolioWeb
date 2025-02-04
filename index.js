document.addEventListener("DOMContentLoaded", () => {
    const btMostrar1 = document.getElementById("btMostrar1");
    const btOcultar1 = document.getElementById("btOcultar1");
    const detInfo1 = document.getElementById("detInfo1");

    const btMostrar2 = document.getElementById("btMostrar2");
    const btOcultar2 = document.getElementById("btOcultar2");
    const detInfo2 = document.getElementById("detInfo2");

    function setupToggle(btMostrar, btOcultar, detInfo) {
        btMostrar.addEventListener("click", () => {
            btMostrar.style.display = "none";
            btOcultar.style.display = "inline-block";
            detInfo.style.display = "block";
        });

        btOcultar.addEventListener("click", () => {
            btOcultar.style.display = "none";
            detInfo.style.display = "none";
            btMostrar.style.display = "inline-block";
        });
    }

    setupToggle(btMostrar1, btOcultar1, detInfo1);
    setupToggle(btMostrar2, btOcultar2, detInfo2);
});

function irAProyectos(){
    document.getElementById("hacer").scrollIntoView({ behavior: "smooth" });
}

function irAContacto(){
    document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}

function enviarCont() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }
    alert("Hola " + nombre+ ".\nHe recibido tu mensaje:\n" + mensaje + "\nPronto me pondré en contacto contigo al correo:\n" + email)
    document.getElementById("contactForm").submit();
    return true;
}

function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => mostrarUsuarios(data))  
        .catch(error => console.error('Error al obtener los datos:', error));  
}


function mostrarUsuarios(usuarios) {
    const contenedor = document.getElementById('usuarios');  

    usuarios.forEach(usuario => {
        const usuarioElement = document.createElement('div');
        usuarioElement.classList.add('usuario');

        usuarioElement.innerHTML = `
            <h3>${usuario.name}</h3>
            <p>Email: ${usuario.email}</p>
            <p>Teléfono: ${usuario.phone}</p>
            <p>Dirección: ${usuario.address.street}, ${usuario.address.city}</p>
        `;

        contenedor.appendChild(usuarioElement);
    });
}