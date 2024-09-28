# Validador de Senha

Este projeto é um simples validador de senhas em JavaScript, que verifica se uma senha atende a certos critérios de segurança.

## Funcionalidade

O programa solicita ao usuário que digite uma senha e a valida com base nos seguintes critérios:

1. **Comprimento Mínimo:** A senha deve ter pelo menos 8 caracteres.
2. **Letra Maiúscula:** A senha deve conter pelo menos uma letra maiúscula (A-Z).
3. **Letra Minúscula:** A senha deve conter pelo menos uma letra minúscula (a-z).
4. **Número:** A senha deve conter pelo menos um número (0-9).
5. **Caractere Especial:** A senha deve conter pelo menos um caractere especial (como !@#$%^&*(),.?":{}|<>).

Se a senha atender a todos os critérios, o programa retornará "Senha válida!". Caso contrário, ele informará qual critério não foi atendido.

## Como Usar

1. Clone este repositório ou baixe o arquivo `validacaosenha.js`.
2. Abra o terminal e navegue até o diretório onde o arquivo está localizado.
3. Execute o script usando o Node.js:

   ```bash
   node .
