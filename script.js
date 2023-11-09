function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }
    }
    function marcarCompletada(tarea) {
        tarea.classList.toggle("completed");
        }
        document.getElementById("listaTareas").addEventListener("click",
        function(event) {
        if (event.target.tagName === "LI") {
        marcarCompletada(event.target);
        }
        });
        document.getElementById("agregar").addEventListener("click",
        agregarTarea);