/**
 * @jest-environment jsdom
 */

const TodoListData = require('./__mock__/todoListData.js');

describe('addTask', () => {
  const todoListDataTest = new TodoListData();
  test('should add a task to the todoListTasks array', () => {
    const newTask = {
      description: 'test',
      isCompleted: false,
      taskIndex: 1,
    };
    expect(todoListDataTest.addTask(newTask)).toEqual(todoListDataTest.todoListTasks);
  });

  test('Check addTodo able add todo as html to todoList display', () => {
    document.body.innerHTML = `
      <form id="form" class="form" action="">
        <input type="text" id="todo-input" placeholder="Add to your list" autofocus/>
        <button id="enter-input" title="add task"></button>
      </form>
      <ul class="todo-list-wrap" id="todo-list-wrap"></ul>
    `;

    const todoListWrapperElement = document.getElementById('todo-list-wrap');
    const formElement = document.getElementById('form');
    const inputElement = document.getElementById('todo-input');

    inputElement.value = 'New todolist!';
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const newTask = {
        description: inputElement.value,
        isCompleted: false,
        taskIndex: null,
      };
      todoListDataTest.addTask(newTask);
      todoListWrapperElement.innerHTML = `<li>${todoListDataTest.todoListTasks[0].description}</li>`;
      expect(todoListWrapperElement.innerHTML).toBe('<li>New todolist!</li>');
    });
  });
});
