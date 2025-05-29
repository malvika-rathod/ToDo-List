const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

function addTask() {
  if (inputBox.value.trim() === '') {
    alert("You must write a Task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = inputBox.value;

  let span = document.createElement("span");
  span.innerHTML = "\u00d7"; // Cross symbol
  li.appendChild(span);

  listContainer.appendChild(li);

  // Animate button
  addBtn.classList.add("slide");
  setTimeout(() => addBtn.classList.remove("slide"), 400);

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
