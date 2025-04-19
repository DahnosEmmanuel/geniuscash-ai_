// 📦 On importe Firebase Auth depuis notre config
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

const loginForm = document.getElementById('login-form');
const message = document.getElementById('auth-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      message.style.color = 'green';
      message.textContent = `Bienvenue, ${user.email} ! Connexion réussie 🔓`;

      // 👉 Redirection vers un dashboard si tu veux
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
      message.style.color = 'red';
      message.textContent = "Email ou mot de passe incorrect ❌";
    });
});
