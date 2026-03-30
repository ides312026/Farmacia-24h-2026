const pedidos = [
  { codigo: "101", produto: "Dipirona", status: "Em preparo" },
  { codigo: "102", produto: "Paracetamol", status: "Saiu para entrega" },
  { codigo: "103", produto: "Ibuprofeno", status: "Entregue" },
  { codigo: "104", produto: "Amoxicilina", status: "Em preparo" },
  { codigo: "105", produto: "Omeprazol", status: "Saiu para entrega" },
  { codigo: "106", produto: "Losartana", status: "Entregue" },
  { codigo: "107", produto: "Azitromicina", status: "Em preparo" },
  { codigo: "108", produto: "Nimesulida", status: "Saiu para entrega" },
  { codigo: "109", produto: "Dorflex", status: "Entregue" },
  { codigo: "110", produto: "Vitamina C", status: "Em preparo" },
  { codigo: "111", produto: "Aspirina", status: "Saiu para entrega" },
  { codigo: "112", produto: "Prednisona", status: "Entregue" },
  { codigo: "113", produto: "Cetoconazol", status: "Em preparo" },
  { codigo: "114", produto: "Metformina", status: "Saiu para entrega" },
  { codigo: "115", produto: "Clonazepam", status: "Entregue" },
  { codigo: "116", produto: "Fluoxetina", status: "Em preparo" },
  { codigo: "117", produto: "Ranitidina", status: "Saiu para entrega" },
  { codigo: "118", produto: "Simeticona", status: "Entregue" },
  { codigo: "119", produto: "Enalapril", status: "Em preparo" },
  { codigo: "120", produto: "Hidroclorotiazida", status: "Saiu para entrega" },
  { codigo: "121", produto: "Loratadina", status: "Entregue" },
  { codigo: "122", produto: "Diclofenaco", status: "Em preparo" },
  { codigo: "123", produto: "Salbutamol", status: "Saiu para entrega" },
  { codigo: "124", produto: "Insulina", status: "Entregue" },
  { codigo: "125", produto: "Ácido Fólico", status: "Em preparo" },
  { codigo: "126", produto: "Buscopan", status: "Saiu para entrega" },
  { codigo: "127", produto: "Torsilax", status: "Entregue" },
  { codigo: "128", produto: "Neosaldina", status: "Em preparo" },
  { codigo: "129", produto: "Amoxil", status: "Saiu para entrega" },
  { codigo: "130", produto: "Captopril", status: "Entregue" }
];

const input = document.getElementById("codigo");
const btn = document.getElementById("buscar");
const resultado = document.getElementById("resultado");
const erro = document.getElementById("erro");
const produto = document.getElementById("produto");
const status = document.getElementById("status");
const progress = document.querySelector(".progress-bar");

resultado.style.display = "none";
erro.style.display = "none";

function rastrear() {
  const codigo = input.value.trim();

  if (!codigo) {
    alert("Digite um código!");
    return;
  }

  const pedido = pedidos.find(p => p.codigo === codigo);

  resultado.style.display = "none";
  erro.style.display = "none";

  if (!pedido) {
    erro.style.display = "block";
    return;
  }

  resultado.style.display = "block";

  produto.textContent = pedido.produto;
  status.textContent = pedido.status;

  status.classList.remove("preparo", "entrega", "entregue");

  let progresso = 0;

  if (pedido.status === "Em preparo") {
    status.classList.add("preparo");
    progresso = 30;
  } else if (pedido.status === "Saiu para entrega") {
    status.classList.add("entrega");
    progresso = 70;
  } else {
    status.classList.add("entregue");
    progresso = 100;
  }

  progress.style.width = "0%";

  setTimeout(() => {
    progress.style.width = progresso + "%";
  }, 100);

  input.value = "";
}

btn.addEventListener("click", rastrear);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") rastrear();
});