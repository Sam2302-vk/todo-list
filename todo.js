function addTodo() {
  var todoInput = document.getElementById('todoInput');
  var todoList = document.getElementById('todoList');

  var li = document.createElement('li');
  li.textContent = todoInput.value;

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  todoInput.value = '';
  deleteButton.addEventListener('click', function() {
      todoList.removeChild(li);
  });
}
