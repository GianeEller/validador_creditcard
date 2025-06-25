function limparNumeroCartao(numero) {
    // Remove qualquer coisa que não seja número
    return numero.replace(/\D/g, '');
}

function identificarBandeira(numero) {
    const numeroLimpo = limparNumeroCartao(numero);
    const tamanho = numeroLimpo.length;

    if (tamanho === 0) {
        return "Número inválido.";
    }

    // Visa: começa com 4 e tem 13 ou 16 dígitos
    if (numeroLimpo.startsWith('4')) {
        if (tamanho === 13 || tamanho === 16) {
            return "Visa";
        }
    }

    // Mastercard: 51-55 ou 2221-2720 nos primeiros números (16 dígitos)
    if (tamanho === 16) {
        const primeiro2 = parseInt(numeroLimpo.substring(0, 2));
        const primeiro4 = parseInt(numeroLimpo.substring(0, 4));

        if (primeiro2 >= 51 && primeiro2 <= 55) {
            return "Mastercard";
        } else if (primeiro4 >= 2221 && primeiro4 <= 2720) {
            return "Mastercard";
        }
    }

    // American Express: começa com 34 ou 37 e tem 15 dígitos
    if ((numeroLimpo.startsWith('34') || numeroLimpo.startsWith('37')) && tamanho === 15) {
        return "American Express";
    }

    // Discover: começa com 6011 ou 65 e tem 16 dígitos
    if (tamanho === 16) {
        if (numeroLimpo.startsWith('6011') || numeroLimpo.startsWith('65')) {
            return "Discover";
        }
    }

    // Diners Club: começa com 300-305, 36, 38, 39 e tem 14 dígitos
    if (tamanho === 14) {
        const prefixosDiners = ['300', '301', '302', '303', '304', '305', '36', '38', '39'];
        for (let prefix of prefixosDiners) {
            if (numeroLimpo.startsWith(prefix)) {
                return "Diners Club";
            }
        }
    }

    return "Bandeira desconhecida";
}

// Exemplo de uso no console
const prompt = require('prompt-sync')(); // para usar input no Node.js
const numeroCartao = prompt("Digite o número do cartão de crédito: ");
const bandeira = identificarBandeira(numeroCartao);
console.log(`Bandeira identificada: ${bandeira}`);