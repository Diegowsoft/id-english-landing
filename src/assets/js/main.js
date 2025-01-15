// Este arquivo contém o código JavaScript para interatividade, incluindo animações e validação de formulário.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const whatsappInput = document.querySelector('#whatsapp');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });

    function validateForm() {
        let valid = true;

        if (nameInput.value.trim() === '') {
            alert('Por favor, insira seu nome.');
            valid = false;
        }

        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            alert('Por favor, insira um email válido.');
            valid = false;
        }

        if (whatsappInput.value.trim() === '') {
            alert('Por favor, insira seu número de WhatsApp.');
            valid = false;
        }

        return valid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // Redirecionar para página de download
            window.location.href = '/download-ebook.html';
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});