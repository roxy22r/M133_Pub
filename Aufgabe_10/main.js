import { ToDo } from './todo.js';

let todos = [
  new ToDo('Zugticket kaufen', false),
  new ToDo('Wäsche waschen', true),
  new ToDo('Hausaufgaben machen', true),
];

function updateToDoListOnScreen() {
  const todoListElement = document.getElementById('todolist');

  // Liste leeren
  todoListElement.innerHTML = '';

  // ToDo's einfügen
  for (const todo of todos.sort((do1,do2)=>do1.titel.localeCompare(do2.titel))) {
    const toDoListEntry = todo.element();
    todoListElement.appendChild(toDoListEntry);
  }

  // offene ToDo's
  const offeneToDos = todos.filter((offen) => !offen.erledigt);
  const elementAnzahl = document.getElementById('anzahl');
  elementAnzahl.textContent = `${offeneToDos.length} ToDo's offen`;
  // Im Local Storage speichern
  setTodosToLocalStorage();
}


document.addEventListener('DOMContentLoaded', (event) => {
  readTodoLocalStorage();
  updateToDoListOnScreen();
  let deleteButton =document.getElementById('aufraeumen');
  deleteButton.addEventListener('click',deleteAll)
  
  const neuesToDoElement = document.getElementById('neuesToDo');
  neuesToDoElement.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      const todo = new ToDo(neuesToDoElement.value, false);
      todos.push(todo);

      neuesToDoElement.value = '';

      todo.addEventListener('loeschen', (e) => {
        const index = todos.indexOf(e.target);
        todos.splice(index, 1);
        updateToDoListOnScreen();
      });

      updateToDoListOnScreen();
    }
  });
});

function deleteAll() {
  let erledigteTask = Array.from(document.getElementsByClassName('erledigt'));
  erledigteTask.forEach((element) => {
    element.remove();
    todos.forEach((item) => {
      if (item.erledigt == 'true') {
        todos.splice(todos.indexOf(item), 1);
      }
    });
  });
}


  
function setTodosToLocalStorage(){
  const todosItem = [];
  for (const todo of todos) {
    const todosItem = { titel: todo.titel, erledigt: todo.erledigt };
    todosItem.push(todosItem);
  }
  const todosJson = JSON.stringify(todosItem);
  localStorage.setItem('todos', todosJson);
}

function readTodoLocalStorage(){

  const savedTodos = JSON.parse(localStorage.getItem('todos'));

  if (savedTodos) {
    for (const savedToDo of savedTodos) {
      const todo = new ToDo(savedToDo.titel, savedToDo.erledigt);
      todo.addEventListener('loeschen', (e) => {
        const index = todos.indexOf(e.target);
        todos.splice(index, 1);
        updateToDoListOnScreen();
      });
      todos.push(todo);
    }
  }
}