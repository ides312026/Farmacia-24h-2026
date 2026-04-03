function adicionar() {
    let nome = document.getElementById("nome").value;
    let cargo = document.getElementById("cargo").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let turno = document.getElementById("turno").value;

    if (nome == "" || cargo == "" || cpf == "" || telefone == "" || turno == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let tabela = document.getElementById("tabela");

    let linha = "<tr>";
    linha += "<td>" + nome + "</td>";
    linha += "<td>" + cargo + "</td>";
    linha += "<td>" + cpf + "</td>";
    linha += "<td>" + telefone + "</td>";
    linha += "<td>" + turno + "</td>";
    linha += "<td><button onclick='remover(this)'>Remover</button></td>";
    linha += "</tr>";

    tabela.innerHTML += linha;

    document.getElementById("nome").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("turno").value = "";
}

function remover(botao) {
    botao.parentNode.parentNode.remove();
}