 let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function adicionar() {

  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let endereco = document.getElementById("endereco").value;
  let tipo = document.getElementById("tipo").value;
  let historico = document.getElementById("historico").value;

  if (nome === "" || cpf === "" || endereco === "" || tipo === "" || historico === "") {
    alert("Preencha tudo!");
    return;
  }

  let cliente = {
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    tipo: tipo,
    historico: historico
  };

  clientes.push(cliente);

  salvar();
  mostrar();
}

function mostrar() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < clientes.length; i++) {

    let c = clientes[i];

    let item = document.createElement("li");

    item.innerHTML =
      "Nome: " + c.nome +
      " | CPF: " + c.cpf +
      " | Endereço: " + c.endereco +
      " | Tipo: " + c.tipo +
      " | Histórico: " + c.historico +
      `<button class="remover" onclick="remover(${i})">X</button>`;

    lista.appendChild(item);
  }
}

function remover(i) {
  clientes.splice(i, 1);
  salvar();
  mostrar();
}

function salvar() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

// mostrar quando abrir a página
mtrar();