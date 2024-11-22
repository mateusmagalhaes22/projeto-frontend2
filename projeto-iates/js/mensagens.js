function renderizarMensagens() {
    const mensagens = obterMensagens();
    const tabelaBody = document.querySelector('#mensagensTable tbody');

    // Limpa o corpo da tabela antes de renderizar
    tabelaBody.innerHTML = '';

    mensagens.forEach(mensagem => {
        const row = document.createElement('tr');
        row.className = "linha-tabela-mensagens"

        // Criação de células para cada dado
        const cellId = document.createElement('td');
        cellId.textContent = mensagem.id;
        row.appendChild(cellId);

        const cellRemetente = document.createElement('td');
        cellRemetente.textContent = mensagem.remetente;
        row.appendChild(cellRemetente);

        const cellMensagem = document.createElement('td');
        cellMensagem.textContent = mensagem.mensagem;
        row.appendChild(cellMensagem);

        const cellData = document.createElement('td');
        cellData.textContent = mensagem.data;
        row.appendChild(cellData);

        // Adiciona a linha à tabela
        tabelaBody.appendChild(row);
    });
}

// Renderiza as mensagens ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarMensagens);