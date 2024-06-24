const fetchTasks = async () => {
  const response = await fetch('http://localhost:3333/tasks');
  const tasks = await response.json();
  console.log(tasks)
}

const createElement = (tag, innerText = '') => {
  const element = document.createElement(tag);
  element.innerText = innerText;
  return element;
}

const createRow = (task) => {

  const { id, title, created_at, status } = task;

  const tr = document.createElement('tr');
  const tdTitle = createElement('td', 'task title');
  
}