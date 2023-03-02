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
    // this.reassignTaskIndex();
  };
}

module.exports = TodoListData;
