// Change the background with 3 buttons
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const background = document.body;

button1.addEventListener("click", (e) => {
  background.style.backgroundImage = "url('img/artBackground.png')";
});
button2.addEventListener("click", (e) => {
  background.style.backgroundImage = "url('img/cityBackground.jpg')";
});
button3.addEventListener("click", (e) => {
  background.style.backgroundImage = "url('img/skyBackground.jpg')";
});

// Add a note
const addNote = document.querySelector(".buttonAdd");
const allList = document.querySelector(".list");

//data
const appState = {
  todos: [
    {
      id: 1,
      text: "Prendre une douche 🚿",
      completed: false,
    },
    {
      id: 2,
      text: "Finir BeginWeb 🕸️",
      completed: false,
    },
  ],
};

function renderTodos() {
  allList.innerHTML = "";
  for (const todo of appState.todos) {
    const todoElement = createTodo(todo);
    allList.appendChild(todoElement);
  }
  lucide.createIcons();
}

renderTodos();

function createTodo(todo) {
  const todoElement = document.createElement("li");

  todoElement.classList.add("todo");
  if (todo.completed) {
    todoElement.classList.add("checked");
  }

  const checkboxElement = createCheckbox(todo);
  const textElement = createTextElement(todo);
  const deleteElement = createDeleteButton(todo);

  todoElement.appendChild(checkboxElement);
  todoElement.appendChild(textElement);
  todoElement.appendChild(deleteElement);
  return todoElement;
}
function createCheckbox(todo) {
  const todoCheckbox = document.createElement("div");
  const todoCheckboxCircle = document.createElement("div");
  const todoCheckBoxInput = document.createElement("input");

  todoCheckbox.classList.add("todo-checkbox");
  todoCheckboxCircle.classList.add("todo-checkbox-circle");
  todoCheckBoxInput.type = "checkbox";
  todoCheckbox.appendChild(todoCheckboxCircle);
  todoCheckbox.appendChild(todoCheckBoxInput);
  return todoCheckbox;
}

function createTextElement(todo) {
  const p = document.createElement("p");

  p.classList.add("todo-text");
  p.textContent = todo.text;
  return p;
}
function createDeleteButton(todo) {
  const buttonElement = document.createElement("button");
  const i = document.createElement("i");
  buttonElement.classList.add("todo-delete");
  i.setAttribute("data-lucide", "thrash");
  buttonElement.appendChild(i);
  return buttonElement;
}
