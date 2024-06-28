const tasks = [
    {
        title: "Comprar comida para o gato",
        type: "Urgente"
    },
    {
        title: "Consertar Computador",
        type: "Importante"
    },
    {
        title: "Beber água",
        type: "Normal"
    },
    {
        title: "Enviar relatório trimestral",
        type: "Importante"
    },
    {
        title: "Fazer exercícios físicos",
        type: "Normal"
    },
    {
        title: "Agendar consulta médica",
        type: "Urgente"
    },
    {
        title: "Ler pelo menos um capítulo de um livro",
        type: "Normal"
    },
    {
        title: "Limpar a despensa",
        type: "Importante"
    },
    {
        title: "Pagar a conta de energia",
        type: "Urgente"
    },
    {
        title: "Assistir a um documentário interessante",
        type: "Normal"
    },
];

function renderElements(tasks) {
    const ulElement = document.querySelector(".tasks__list");
    ulElement.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = createTaskItem(task, index);
        ulElement.appendChild(taskItem);
    });
}

function createTaskItem(task, index) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.className = "task__item";
    div.className = "task-info__container";
    span.className = "task-type";
    p.textContent = task.title;
    button.className = "task__button--remove-task";
    

    switch (task.type.toLowerCase()) {
        case "urgente":
            span.classList.add("span-urgent");
            break;
        case "importante":
            span.classList.add("span-important");
            break;
        case "normal":
            span.classList.add("span-normal");
            break;
        default:
            break;
    }

    button.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderElements(tasks);
    });

    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(button);

    return li;
}

renderElements(tasks);

const form = document.getElementById("task-form");
const addButton = document.getElementById("add-task-button");

addButton.addEventListener("click", () => {
    const title = document.getElementById("input_title").value;
    const type = document.getElementById("input_type").value;

    if (title && type) {
        const newTask = {
            title: title,
            type: type,
        };

        tasks.push(newTask);
        renderElements(tasks);

        form.reset();
    } else {
        alert("Por favor, preencha ambos os campos.");
    }
});
