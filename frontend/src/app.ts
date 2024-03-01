import { validateEmail, validatePassword, validateConfirmPassword } from './validation';

const emailInput = document.getElementById('emailInput') as HTMLInputElement;
const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
const confirmPasswordInput = document.getElementById('confirmPasswordInput') as HTMLInputElement;
const registerButton = document.getElementById('registerButton') as HTMLButtonElement;
const successMessage = document.getElementById('successMessage')!;
const backToHomePageButton = document.getElementById('backToHomePageButton') as HTMLButtonElement;
const errorMessage = document.getElementById('errorMessage')!;
const errorText = document.getElementById('errorText') as HTMLParagraphElement;
const hideErrorButton = document.getElementById('hideErrorButton') as HTMLButtonElement;

let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;

emailInput.addEventListener('input', () => {
    emailValid = validateEmail(emailInput.value);
    if (!emailValid && emailInput.value !== '') {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'green';
    }
    checkFormValidity();
});

passwordInput.addEventListener('input', () => {
    passwordValid = validatePassword(passwordInput.value);
    if (!passwordValid && passwordInput.value !== '') {
        passwordInput.style.borderColor = 'red';
    } else {
        passwordInput.style.borderColor = 'green';
    }
    checkFormValidity();
});

confirmPasswordInput.addEventListener('input', () => {
    confirmPasswordValid = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value);
    if (!confirmPasswordValid && confirmPasswordInput.value !== '') {
        confirmPasswordInput.style.borderColor = 'red';
    } else {
        confirmPasswordInput.style.borderColor = 'green';
    }
    checkFormValidity();
});

function checkFormValidity() {
    registerButton.disabled = !(emailValid && passwordValid && confirmPasswordValid);
}

registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Ide jön majd a regisztrációs logika
    // Sikeres regisztráció esetén:
    successMessage.classList.remove('hidden');
});

backToHomePageButton.addEventListener('click', () => {
    successMessage.classList.add('hidden');
    resetForm();
});

hideErrorButton.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
});

function resetForm() {
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    emailInput.style.borderColor = '';
    passwordInput.style.borderColor = '';
    confirmPasswordInput.style.borderColor = '';
    registerButton.disabled = true;
    errorMessage.classList.add('hidden');
}
