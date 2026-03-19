function calcular() {
    
    let nome = document.getElementById("medicamento").value;
    let preco = Number(document.getElementById("preco").value);

    let total = preco * 2;
    let desconto = total - Math.floor(total);
    let valorFinal = total - desconto;

    document.getElementById("resultado").innerHTML =
        "Promoção de " + nome + "<br>" + "Leve 2 por apenas R$: " + valorFinal.toFixed(2);

}