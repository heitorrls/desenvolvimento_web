function addTask() {
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Por favor, insira uma tarefa.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
      <div class="task-content">
        <input type="checkbox" class="task-checkbox" onchange="toggleTask(this)">
        <span class="task-text">${taskInput.value}</span>
      </div>
      <button class="remove-btn" onclick="removeTask(this)">Remover</button>
    `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleTask(checkbox) {
  const taskText = checkbox.nextElementSibling;

  if (checkbox.checked) {
    console.log("Tarefa concluída: " + taskText.textContent);
  } else {
    console.log("Tarefa reativada: " + taskText.textContent);
  }
}
