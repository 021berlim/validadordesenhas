const readline = require('readline');
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }
    if (!hasUpperCase) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
    }
    if (!hasLowerCase) {
        return "A senha deve conter pelo menos uma letra minúscula.";
    }
    if (!hasNumbers) {
        return "A senha deve conter pelo menos um número.";
    }
    if (!hasSpecialChars) {
        return "A senha deve conter pelo menos um caractere especial.";
    }

    return "Senha válida!";
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Digite a senha para validação: ', (password) => {
    const result = validatePassword(password);
    console.log(result);
    rl.close();
});
