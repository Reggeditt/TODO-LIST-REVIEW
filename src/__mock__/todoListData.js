const localStorage = require('./localStorage.js');

class TodoListData {
  constructor() {
    this.todoListTasks = [];
    this.taskRemoveButtons = [];
  }

  addTask = (task) => {
    task.taskIndex = this.todoListTasks.length + 1;
    this.todoListTasks.push(task);
    this.updateStorage();
    return this.todoListTasks;
  };

  updateStorage = () => {
    localStorage.setItem('todoList', this.todoListTasks);
  };

  removeTask = (index) => {
    this.todoListTasks = this.todoListTasks.filter((task) => task.taskIndex !== index);
    return this.todoListTasks;
  };

  editTaskDescription = (todoListWrapperElement) => {
    const todoListWrapperChildren = Array.from(todoListWrapperElement.children);
    const listDescriptionArr = document.getElementsByClassName('todo-list-item-description');
    const inputFields = Array.from(listDescriptionArr);
    inputFields.forEach((input, i) => {
      input.addEventListener('click', () => {
        if (document.activeElement === input) {
          todoListWrapperElement.children[i].style.backgroundColor = 'yellow';
          todoListWrapperElement.children[i].children[2].style.display = 'block';
          input.style.backgroundColor = 'yellow';
          todoListWrapperChildren[i].style.setProperty('--before', 'none');
        } else {
          todoListWrapperElement.children[i].style.backgroundColor = 'white';
          todoListWrapperElement.children[i].children[2].style.display = 'none';
          input.style.backgroundColor = 'white';
          todoListWrapperChildren[i].style.setProperty('--before', 'block');
        }
      });

      input.addEventListener('change', () => {
        this.todoListTasks[i].description = input.value;
        todoListWrapperElement.children[i].style.backgroundColor = 'white';
        todoListWrapperElement.children[i].children[2].style.display = 'none';
        input.style.backgroundColor = 'white';
        todoListWrapperChildren[i].style.setProperty('--before', 'block');
        document.getElementById('todo-input').focus();
        this.updateStorage();
      });
    });
    return this.todoListTasks;
  };

  setCompletedStatus = (todoListWrapperElement) => {
    const todoListWrapperChildren = Array.from(todoListWrapperElement.children);
    todoListWrapperChildren.forEach((child, index) => {
      child.children[0].addEventListener('click', () => {
        if (child.children[0].checked) {
          child.children[1].style.textDecoration = 'line-through';
          this.todoListTasks[index].isCompleted = true;
          this.updateStorage();
        } else {
          child.children[1].style.textDecoration = 'none';
          this.todoListTasks[index].isCompleted = false;
          this.updateStorage();
        }
        return this.todoListTasks;
      });
    });
  };

  clear = () => {
    this.todoListTasks = [];
  };
}

module.exports = TodoListData;
