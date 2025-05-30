document.addEventListener("DOMContentLoaded", () => {
  // Botón Scroll top
  const btnTop = document.getElementById("btnTop");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Filtro de categorías
  const filtro = document.getElementById('filtroCategoria');
  const tarjetas = document.querySelectorAll('.item-servicios-section');

  filtro.addEventListener('change', function () {
    const categoria = this.value;

    tarjetas.forEach(tarjeta => {
      const clases = tarjeta.className.split(' '); // ← para ver todas las clases

      if (categoria === 'todos' || clases.includes(categoria)) {
        tarjeta.style.display = 'inline-block'; // o 'flex' según tu CSS
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
});
