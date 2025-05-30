document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");
  const errorMsg = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = usuarioInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (usuario === "admin" && contrasena === "1234") {
      window.location.href = "dashboard.html";
    } else {
      errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
  });
});
