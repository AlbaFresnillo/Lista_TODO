//Declarar constantes elementos DOM
const taskInput = document.getElementById('taskInput');
const tasksContainer = document.getElementById('tasks');
const newTaskText = document.getElementById('newTaskText');

//Función para agregar una tarea
function addTask() {
    const newTaskText = taskInput.value.trim();
    if (newTaskText === '') {
        alert('Por favor, ingresa una tarea válida.');
        return;
    }
//console.log('Se hizo clic en el botón "Add Task"');

//Crear elemento de lista (li) y botón de eliminación
const listItem = document.createElement('li');
listItem.innerHTML = `
<span>${newTaskText}</span>
<button class="delete-button" onclick="deleteTask(this)">Eliminar</button>
`;

//Agregar la lista al contenedor de tareas
tasksContainer.appendChild(listItem);

//Limpiar el campo de entrada
taskInput.value = '';
}

//Función para eliminar una tarea
function deleteTask(element) {
    const listItem = element.parentElement;
    tasksContainer.removeChild(listItem);
}