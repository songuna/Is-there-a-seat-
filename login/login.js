import { checkAuth, addAuth } from "../firebase.js";

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.querySelector('.sign-up-container');
const signInForm = document.querySelector('.sign-in-container');
const signUpBtn = document.getElementById('signUpButton');
const signInBtn = document.getElementById('signInButton');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;
    if (!name || !email || !password) {
        alert('모든 빈칸를 입력해주세요.');
    } else {
        addAuth(name, email, password);
    }
});

signInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    if (!email || !password) {
        alert('이메일과 비밀번호를 입력해주세요.');
    } else {
        checkAuth(email);
    }
});