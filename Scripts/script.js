document.addEventListener('DOMContentLoaded', function() {
// Función para manejar el envío del formulario de registro
function loginUser(event) {
   
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Aquí puedes realizar una validación más compleja si es necesario

    // Simulación del envío de datos al servidor (en este caso, simplemente mostramos los datos en la consola)
    console.log('Datos del usuario registrados:');
    console.log('Nombre:', name);
    console.log('Contraseña:', password);

    // Limpiar los campos de entrada
    nameInput.value = '';
    passwordInput.value = '';
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Aquí podrías enviar los datos al servidor utilizando AJAX o Fetch para procesar el registro
}
function registerUser (event){
    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;
     // Mostrar los valores en la consola
     console.log("Nombre:", nombre);
     console.log("Celular:", celular);
     console.log("Email:", email);
     console.log("Contraseña:", password);
 
     // Limpiar los campos de entrada
     document.getElementById("nombre").value = "";
     document.getElementById("celular").value = "";
     document.getElementById("email").value = "";
     document.getElementById("newPassword").value = "";
 
     event.preventDefault(); // Evitar el envío del formulario por defecto
}

// Agregar un evento de escucha para el clic en el enlace
const loginLink = document.getElementById('loginLink');
loginLink.addEventListener('click', function(event) {
    // Llamar a la función registerUser() para manejar el registro del usuario
    loginUser(event);
});
// Agregar un evento de escucha para el clic en enlace registrarse
const registerLink = document.getElementById('registroLink');
registerLink.addEventListener('click',function(event) {
    registerUser(event);
});


const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        loginUser(event);
    }
});

passwordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        loginUser(event);
    }
});

    const loginBox = document.getElementById('login-box');
    const registroBox = document.getElementById('registro-box');
    const volverLinkLogin = document.getElementById('volverLinkLogin');
    const volverLinkRegister = document.getElementById('volverLinkRegister');

    // Agregar eventos de clic a los enlaces "Volver" para alternar entre los formularios
   
        volverLinkLogin.addEventListener('click', function(event) {
        event.preventDefault();
        registroBox.classList.remove('hide-form');
        registroBox.classList.add('show-form');
        loginBox.classList.add('hide-form');

        setTimeout(()=>{
            loginBox.style.display = 'none';
            registroBox.style.display = 'block';
        },500)
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    
      });
      
        volverLinkRegister.addEventListener('click', function(event) {
        event.preventDefault();
        loginBox.classList.remove('hide-form');
        loginBox.classList.add('show-form');
        registroBox.classList.add('hide-form');
        setTimeout(()=>{
            loginBox.style.display = 'block';
            registroBox.style.display = 'none';
        },500)
        document.getElementById("nombre").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("email").value = "";
        document.getElementById("newPassword").value = "";
    
      });
      
    
});
// Obtener el input de correo electrónico
const emailInput = document.getElementById('email');

// Agregar un event listener para el evento blur (cuando el input pierde el foco)
emailInput.addEventListener('blur', function() {
    // Verificar si el input tiene un valor
    if (emailInput.value.trim() !== '') {
        // Si tiene un valor, agregar la clase 'filled' al input
        emailInput.classList.add('filled');
    } else {
        // Si está vacío, eliminar la clase 'filled' del input
        emailInput.classList.remove('filled');
    }
});



// Funcion que valida la clave en tiempo real dependiendo que input este leyendo
function validarClave(claveMensaje) {
 

    // Expresiones regulares para verificar la presencia de mayúscula, número y símbolo
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    let message = '';
    if(claveMensaje == 'claveMensaje2' ){
        const passwordInputLogin = document.getElementById('password');
        const password = passwordInputLogin.value;
        if(password===''){
            message = '';
        }else if (!uppercaseRegex.test(password)) {
            message += 'Debe contener al menos una mayúscula. ';
        }else if (!numberRegex.test(password)) {
            message += 'Debe contener al menos un número. ';
        }else if (!symbolRegex.test(password)) {
            message += 'Debe contener al menos un símbolo. ';
        }else if(password.length<=6){
            message += 'Debe tener al menos 7 digitos';
        }
    }else if(claveMensaje == 'claveMensaje'){
        const passwordInput = document.getElementById('newPassword');
        const password = passwordInput.value;
        if(password===''){
            message = '';
        }else if (!uppercaseRegex.test(password)) {
            message += 'Debe contener al menos una mayúscula. ';
        }else if (!numberRegex.test(password)) {
            message += 'Debe contener al menos un número. ';
        }else if (!symbolRegex.test(password)) {
            message += 'Debe contener al menos un símbolo. ';
        }else if(password.length<=6){
            message += 'Debe tener al menos 7 digitos';
        }
    };      
    const passwordMessage = document.getElementById(claveMensaje);
    passwordMessage.textContent = message;
    return message;
}