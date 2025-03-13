document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle'); // Botón de menú
    const nav = document.querySelector('nav'); // Menú de navegación

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        const isExpanded = nav.classList.toggle('active'); // Alternar la clase "active"
        menuToggle.setAttribute('aria-expanded', isExpanded); // Actualizar atributo ARIA
    }

    // Evento para abrir/cerrar el menú al hacer clic en el botón
    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        const isClickInsideNav = nav.contains(event.target); // Verificar si el clic fue dentro del menú
        const isClickOnToggle = menuToggle.contains(event.target); // Verificar si el clic fue en el botón

        if (!isClickInsideNav && !isClickOnToggle) {
            nav.classList.remove('active'); // Cerrar el menú
            menuToggle.setAttribute('aria-expanded', false); // Actualizar atributo ARIA
        }
    });

    // Cerrar el menú al presionar la tecla "Esc"
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active'); // Cerrar el menú
            menuToggle.setAttribute('aria-expanded', false); // Actualizar atributo ARIA
        }
    });
});