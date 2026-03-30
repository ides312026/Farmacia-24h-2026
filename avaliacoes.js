function add() {
    let n = document.getElementById("nome").value;
    let c = document.getElementById("comentario").value;
    let nota = document.getElementById("nota").value;

    if (n == "" || c == "") {
        alert("Preencha tudo");
        return;
    }

    let dados = JSON.parse(localStorage.getItem("fb")) || [];

    dados.push({ n, c, nota });

    localStorage.setItem("fb", JSON.stringify(dados));

    mostrar();

    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";
}

function mostrar() {
    let dados = JSON.parse(localStorage.getItem("fb")) || [];
    let div = document.getElementById("lista");

    div.innerHTML = "";

    for (let i = 0; i < dados.length; i++) {
        div.innerHTML += `
            <div class="feedback">
                <b>${dados[i].n}</b> - ${dados[i].nota}⭐
                <p>${dados[i].c}</p>
                <button onclick="del(${i})">EXCLUIR</button>
            </div>
        `;
    }
}

function del(i) {
    let dados = JSON.parse(localStorage.getItem("fb")) || [];

    dados.splice(i, 1);

    localStorage.setItem("fb", JSON.stringify(dados));

    mostrar();
}

function voltar() {
    window.location.href = "index.html";
}

window.onload = mostrar;