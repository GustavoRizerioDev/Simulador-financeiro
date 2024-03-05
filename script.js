function mediaPrecoPorCarregamento() {
    var capacidade = Number(input_capacidade.value);
    var preco = Number(input_preco_carne.value);
    var totalPreco = capacidade * preco;

    p_preco_total.innerHTML = `Por carregamento você tem um total de ${capacidade} Kg * R$${preco}/kg = R$${totalPreco}`;

    var perda = totalPreco * 0.08;
    p_perda.innerHTML = `Você perde em média R$${perda.toFixed(2)} por carregamento`;
    
}

function mostrarInvestimento() {
    var capacidade = Number(input_capacidade.value);
    var preco = Number(input_preco_carne.value);
    var totalPreco = capacidade * preco;
    var perda = totalPreco * 0.08;

    var investimento = Number(input_investimento.value);

    if (investimento > perda) {
        p_investimento.innerHTML = `Com o seu investimento de R$${investimento.toFixed(2)}, você terá lucro em 1 mês!`;
    } else {
        var mesesParaLucrar = (perda / investimento);
        p_investimento.innerHTML = `Seu investimento não é suficiente para garantir lucro em 1 mês. Serão necessários ${mesesParaLucrar} meses para começar a lucrar.`;
    }
}
