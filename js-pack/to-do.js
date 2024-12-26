

const todoList = [];

show();

function show () {
  const list = document.querySelector('.js-list');

  let listHTML = '';

  for (i = 0; i < todoList.length; i++) {
    
    const valueOject = todoList[i];
    
    //const name = valueOject.name;
    //const dueDate = valueOject.dueDate;
    
    const { name, dueDate } = valueOject;
    
    const valueHtml = `
      <div>
        ${name}
      </div>

      <div>
        ${dueDate}
      </div>
      
      <button
        onclick="
          todoList.splice(${i}, 1);

          show();
        " class="jss-delete-btn">Delete
      </button>
    `;

    listHTML += valueHtml;
  }

  list.innerHTML = listHTML;
}


function addTodo () {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date');
  const dueDate = dateElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  show();
}