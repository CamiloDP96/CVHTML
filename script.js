console.log("Hoja de Vida Interactiva Cargada");
document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});
function solicitarCorreo() {
    // Solicitar al usuario su correo electrónico
    var correoUsuario = prompt("Por favor, introduce tu correo electrónico:");

    // Verificar si el usuario ingresó un correo
    if (correoUsuario) {
      // Mostrar un mensaje de agradecimiento
        alert("Gracias " + correoUsuario + ", me pondré en contacto contigo pronto!");
    } else {
      // Mostrar un mensaje en caso de que el usuario no haya ingresado un correo
        alert("No ingresaste un correo. Por favor, inténtalo de nuevo.");
    }
};

