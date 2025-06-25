function limparNumeroCartao(numero) {
    return numero.replace(/\D/g, '');
}

function identificarBandeira(numero) {
    const numeroLimpo = limparNumeroCartao(numero);
    const tamanho = numeroLimpo.length;

    if (tamanho === 0) {
        return "Número inválido.";
    }

    // Visa
    if (numeroLimpo.startsWith('4')) {
        if (tamanho === 13 || tamanho === 16) {
            return "Visa";
        }
    }

    // Mastercard
    if (tamanho === 16) {
        const primeiro2 = parseInt(numeroLimpo.substring(0, 2));
        const primeiro4 = parseInt(numeroLimpo.substring(0, 4));

        if (primeiro2 >= 51 && primeiro2 <= 55) {
            return "Mastercard";
        } else if (primeiro4 >= 2221 && primeiro4 <= 2720) {
            return "Mastercard";
        }
    }

    // American Express
    if ((numeroLimpo.startsWith('34') || numeroLimpo.startsWith('37')) && tamanho === 15) {
        return "American Express";
    }

    // Discover
    if (tamanho === 16 && (numeroLimpo.startsWith('6011') || numeroLimpo.startsWith('65'))) {
        return "Discover";
    }

    // Diners Club
    if (tamanho === 14) {
        const prefixosDiners = ['300', '301', '302', '303', '304', '305', '36', '38', '39'];
        for (let prefix of prefixosDiners) {
            if (numeroLimpo.startsWith(prefix)) {
                return "Diners Club";
            }
        }
    }

    // EnRoute
    if (tamanho === 15 && (numeroLimpo.startsWith('2014') || numeroLimpo.startsWith('2149'))) {
        return "EnRoute";
    }

    // JCB
    if (tamanho === 16) {
        const primeiro4JCB = parseInt(numeroLimpo.substring(0, 4));
        if (primeiro4JCB >= 3528 && primeiro4JCB <= 3589) {
            return "JCB";
        }
    }

    // Voyager
    if (tamanho === 16 && numeroLimpo.startsWith('8699')) {
        return "Voyager";
    }

    // HiperCard
    if (tamanho === 16) {
        const prefixosHiperCard = ['637038', '637599'];
        for (let prefix of prefixosHiperCard) {
            if (numeroLimpo.startsWith(prefix)) {
                return "HiperCard";
            }
        }
    }

    // Aura
    if (tamanho === 16 || tamanho === 19) {
        if (numeroLimpo.startsWith('5078')) {
            return "Aura";
        }
    }

    return "Bandeira desconhecida";
}

// Exemplo de uso no console (Node.js)
const prompt = require('prompt-sync')(); // necessário instalar: npm install prompt-sync
const numeroCartao = prompt("Digite o número do cartão de crédito: ");
const bandeira = identificarBandeira(numeroCartao);
console.log(`Bandeira identificada: ${bandeira}`);