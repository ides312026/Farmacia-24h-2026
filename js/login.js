// TROCAR ABA
function showForm(form) {
    document.getElementById("loginForm").classList.toggle("hidden", form !== "login");
    document.getElementById("cadastroForm").classList.toggle("hidden", form !== "cadastro");

    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    event.target.classList.add("active");
}

// CADASTRO
function cadastrar() {
    const usuario = document.getElementById("cadastroUsuario").value;
    const email = document.getElementById("cadastroEmail").value;
    const senha = document.getElementById("cadastroSenha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({ usuario, email, senha });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado!");
    showForm("login");
}

// LOGIN
function login() {
    const usuario = document.getElementById("loginUsuario").value;
    const senha = document.getElementById("loginSenha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const valido = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (valido) {
        document.getElementById("mensagemSucesso").classList.remove("hidden");
    } else {
        alert("Erro no login!");
    }
}