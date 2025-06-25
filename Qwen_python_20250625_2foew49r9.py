def limpar_numero_cartao(numero):
    """Remove caracteres não numéricos."""
    return ''.join(filter(str.isdigit, numero))

def identificar_bandeira(numero):
    numero_limpo = limpar_numero_cartao(numero)
    tamanho = len(numero_limpo)

    if not numero_limpo:
        return "Número inválido."

    # Visa
    if numero_limpo.startswith('4'):
        if tamanho in [13, 16]:
            return "Visa"
    
    # Mastercard
    if tamanho == 16:
        primeiro_2 = numero_limpo[:2]
        primeiro_4 = numero_limpo[:4]
        if 51 <= int(primeiro_2) <= 55:
            return "Mastercard"
        elif 2221 <= int(primeiro_4) <= 2720:
            return "Mastercard"

    # American Express
    if numero_limpo.startswith(('34', '37')) and tamanho == 15:
        return "American Express"

    # Discover
    if numero_limpo.startswith('6011') or numero_limpo.startswith('65'):
        if tamanho == 16:
            return "Discover"

    # Diners Club
    if numero_limpo.startswith(('300','301','302','303','304','305','36','38','39')):
        if tamanho == 14:
            return "Diners Club"

    return "Bandeira desconhecida"

# Programa principal
if __name__ == "__main__":
    numero_cartao = input("Digite o número do cartão de crédito: ")
    bandeira = identificar_bandeira(numero_cartao)
    print(f"Bandeira identificada: {bandeira}")