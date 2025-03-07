window.onload = function() {
    cargarUsuarios();
};



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
    
    let regexNombre = /^[a-zA-Z\s]*$/;
    if (!regexNombre.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false; 
    }

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    alert("Hola " + nombre + ".\nHe recibido tu mensaje:\n" + mensaje + "\nPronto me pondré en contacto contigo al correo:\n" + email);
    document.getElementById("contactForm").submit();
    return true;
}

function cargarUsuarios() {
    fetch("https://jsonplaceholder.org/users")  
        .then(response => response.json())
        .then(data => mostrarUsuarios(data))
        .catch(error => console.error('Error al cargar los usuarios:', error));
}

function mostrarUsuarios(usuarios) {
    let header = document.querySelector(".header");
    let i = 0;

    let mensajeUsuarios = "Usuarios Contactados: ";

    let interval = setInterval(() => {
        
        let usuarioActual = `${usuarios[i].firstname} ${usuarios[i].lastname} - 
        email: ${usuarios[i].email} - 
        Fecha de Nacimiento: ${usuarios[i].birthDate} - 
        Dirección: ${usuarios[i].address.street}, ${usuarios[i].address.suite}, ${usuarios[i].address.city} - 
        Teléfono: ${usuarios[i].phone}`;

        header.innerHTML = mensajeUsuarios + usuarioActual;

        i++;

        if (i >= usuarios.length) {
            clearInterval(interval);
        }
    }, 3000);  
}
