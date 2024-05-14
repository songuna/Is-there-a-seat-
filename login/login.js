import { checkAuth } from "./firebase";

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
        const name = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;
        if (!name || !email || !password) {
            event.preventDefault();
            alert('모든 빈칸를 입력해주세요.');
        } else {
            alert('회원가입이 완료되었습니다.');
            // 여기에 회원가입을 처리하는 코드를 추가할 수 있습니다.
        }
    });

    signInBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;
        if (!email || !password) {
            event.preventDefault();
            alert('이메일과 비밀번호를 입력해주세요.');
        } else {
            checkAuth(email);
        }
    });
