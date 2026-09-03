// =========================================================
// SCRIPT DE NAVEGACIÓN INTERACTIVA (script.js)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Resaltar enlace activo en el menú según el scroll (ScrollSpy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    function highlightNavOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // 2. Desplazamiento suave (Smooth Scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Botón flotante "Volver Arriba"
    const btnTop = document.createElement('button');
    btnTop.innerHTML = '&#8679;';
    btnTop.id = 'btn-volver-arriba';
    btnTop.title = 'Volver al inicio';
    document.body.appendChild(btnTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btnTop.classList.add('visible');
        } else {
            btnTop.classList.remove('visible');
        }
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Sombra dinámica en la barra de navegación al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

});