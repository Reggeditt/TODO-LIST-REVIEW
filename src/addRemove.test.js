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
});