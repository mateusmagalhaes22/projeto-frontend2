
const enviar = function() {
    const email = document.getElementById("email-form-input").value;
    const password = document.getElementById("pass-form-input").value;

    let resultado = validarUsuario({
        "email": email,
        "senha": password
    });

    if (resultado) {
        window.location.assign("mensagens.html");
    }
}
