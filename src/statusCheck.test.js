/**
 * @jest-environment jsdom
 */

const TodoListData = require('./__mock__/todoListData.js');

describe('update completed status', () => {
  const todoListDataTest = new TodoListData();
  test('Check setCompletedStatus able to update completed status', () => {
    document.body.innerHTML = `
    <ul class="todo-list-wrap" id="todo-list-wrap">
      <li class="todo-list-item" id="list-item1" draggable="true">
        <input type="checkbox" id="checkbox1" data-id="1" class="task-checkbox">
        <input type="text" class="todo-list-item-description" style="text-decoration: line-through;">
        <button class="todo-list-item-remove" data-id="1"></button>
      </li>
      <li class="todo-list-item" id="list-item2" draggable="true">
        <input type="checkbox" id="checkbox2" data-id="2" class="task-checkbox">
        <input type="text" class="todo-list-item-description" style="text-decoration: none;">
        <button class="todo-list-item-remove" data-id="2"></button>
      </li>
    </ul>`;

    const taskListWrapperElement = document.getElementById('todo-list-wrap');
    expect(todoListDataTest.setCompletedStatus(taskListWrapperElement)).toBe(this.todoListTasks);
  });
});

describe('editTaskDescription', () => {
  const todoListDataTest = new TodoListData();
  test('check edit task description function', () => {
    document.body.innerHTML = `
    <ul class="todo-list-wrap" id="todo-list-wrap">
      <li class="todo-list-item" id="list-item1" draggable="true">
        <input type="checkbox" id="checkbox1" data-id="1" class="task-checkbox">
        <input type="text" class="todo-list-item-description" style="text-decoration: line-through;">
        <button class="todo-list-item-remove" data-id="1"></button>
      </li>
      <li class="todo-list-item" id="list-item2" draggable="true">
        <input type="checkbox" id="checkbox2" data-id="2" class="task-checkbox">
        <input type="text" class="todo-list-item-description" style="text-decoration: none;">
        <button class="todo-list-item-remove" data-id="2"></button>
      </li>
    </ul>`;
    const taskListWrapperElement = document.getElementById('todo-list-wrap');
    const currentTaskArray = todoListDataTest.todoListTasks;
    expect(todoListDataTest.editTaskDescription(taskListWrapperElement)).toBe(currentTaskArray);
  });
});

describe('clearCompleted', () => {
  const todoListDataTest = new TodoListData();
  test('check clear completed function', () => {
    expect(todoListDataTest.clearCompletedTasks()).toBe(todoListDataTest.todoListTasks);
  });
});