// Script for Lesson Practice - 11 - Todo List

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todoList.splice(${i}, 1);
        saveToStorage();
        renderTodoList();
      " class = "delete-todo-button">Delete</button>`;

    todoListHTML+= html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }

function addTodo(){
  const nameInputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input')
  const name = nameInputElement.value;
  const dueDate = dateInputElement.value;

  // todoList.push({name: name, dueDate: dueDate});
  todoList.push({name, dueDate});
  nameInputElement.value = '';
  dateInputElement.value = '';

  saveToStorage();

  renderTodoList();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}