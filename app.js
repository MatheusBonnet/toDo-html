const listaTarefas = [];




listaTarefas.push(tarefa1);

renderLista();

function fabricaTarefas() {
    let descricao = document.getElementById('descricaoTarefa').value;
    let prioridade = document.getElementById('prioridadeTarefa').value;
    let tarefa = {
        descricao: descricao,
        status: "aberto",
        prioridade: prioridade
    };
    listaTarefas.push(tarefa);
    alert("Tarefa criada");
    renderLista();
}

function renderLista() {
    let divLista = document.getElementById('divLista');
    let template = '';
    for (let i = 0; i < listaTarefas.length; i++) {
        template += `<div class="tarefa ${listaTarefas[i].prioridade}">
                <p class="descTarefa"> ${listaTarefas[i].descricao}  </p>
                <button>Excluir</button>
                <input type="checkbox" name="" id="">
                </div>`;     
    }
    divLista.innerHTML = template;
}

