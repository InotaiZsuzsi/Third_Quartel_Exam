export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
    return password.length >= 5;
}

export function validateConfirmPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
}