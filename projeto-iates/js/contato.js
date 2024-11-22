
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

const submit = function() {
    inserirMensagem(
        {
            "nome": nome.value,
            "email": email.value,
            "mensagem": msg.value
        }
    )
}