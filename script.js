const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault(); // previene recargar la pagina
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

console.log(btn);


//listener (escucha la accion)
btn.addEventListener("click", createTask);