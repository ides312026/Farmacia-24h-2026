let carrinho = [];
let total = 0;

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizar();
}

function atualizar() {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");

  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco}
      <button onclick="remover(${index})">❌</button>
    `;
    lista.appendChild(li);
  });

  contador.textContent = carrinho.length;
  document.getElementById("total").textContent = total.toFixed(2);
}

function remover(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizar();
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("ativo");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("ativo");
}

function finalizar() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  alert("Pedido realizado com sucesso!");
  carrinho = [];
  total = 0;
  atualizar();
}