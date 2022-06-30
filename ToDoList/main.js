// const tarefa = []

// const criarTarefa = (tarefa, status) => {
//     const item = document.createElement('label')
//     item.classList.add('todo__item');
//     item.innerHTML = `
//         <input type="checkbox" ${status}>
//         <div>${tarefa}</div>
//     `
//     document.getElementById('todoList').appendChild(item);
// }

// const limparTarefas = () => {
//     const todoList = document.getElementById('todoList');
//     while (todoList.firstChild) {
//         todoList.removeChild(todoList.lastChild);
//     }
// }

// const atualizarTela = () => {
//     limparTarefas();
//     tarefa.forEach (item => criarTarefa (item.tarefa, item.status));

// }

// atualizarTela()

const elementoLista = document.getElementById('todoList')
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

const tarefas = []

function criarTarefa() {
        const textoTarefa = elementoInput.value
        tarefas.push(textoTarefa)
       
        elementoInput.value = ''
        mostraTarefas()
}

function mostraTarefas() {

        elementoLista.innerHTML = ''

        for (tarefa of tarefas) {
            const elementoTarefa = document.createElement('label')
            elementoTarefa.classList.add('todo__item');
            elementoTarefa.innerHTML = `
                <input type="checkbox">
                <div>${tarefa}</div>
            `
            document.getElementById('todoList').appendChild(elementoTarefa)
        }

}

elementoBotao.setAttribute('onclick', 'criarTarefa()')