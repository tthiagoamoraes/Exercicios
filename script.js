function inverterNumero() {
    // Obtém o valor do input
    const numero = document.getElementById("numeroInput").value;
    
    // Converte o número para uma string para facilitar a manipulação dos caracteres
    const numeroString = numero.toString();
    
    // Divide a string em um array de caracteres, inverte-o e junta novamente em uma string
    const numeroInvertido = numeroString.split('').reverse().join('');
    
    // Exibe o número invertido na página
    document.getElementById("resultado").innerText = `Número invertido: ${numeroInvertido}`;
}
