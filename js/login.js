const USUARIO_ADMIN = "admin";
const PASSWORD_ADMIN = "1234";

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value;

        if (usuario === USUARIO_ADMIN && password === PASSWORD_ADMIN) {

            // Activar sesión
            localStorage.setItem("sesionActiva", "true");

            // Guardar mensaje de bienvenida
            sessionStorage.setItem(
                "mensajeBienvenida",
                "Página iniciada correctamente"
            );

            // Ir a la página principal
            window.location.href = "index.html";

        } else {

            // Mostrar error
            document.getElementById("mensaje").textContent =
                "Usuario o contraseña incorrectos.";

        }

    });

}