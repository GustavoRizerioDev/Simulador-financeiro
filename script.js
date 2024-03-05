function mediaPrecoPorCarregamento(){
    var capacidade = Number(input_capacidade.value);
    var preco = Number(input_preco_carne.value);
    var totalPreco = capacidade * preco;
    
    p_preco_total.innerHTML = `${capacidade}Kg * R$${preco}/kg = R$${totalPreco}`
    
    var perda = totalPreco * 0.08;
    p_perda.innerHTML = `Você perde em média R$${perda} por carregamento`
    
}
