function verificar(){
    document.addEventListener("DOMContentLoaded", function() {
        var formulario = document.getElementById("formulario");
        
        formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var edad = document.getElementById("edad").value;
        
        if (nombre === "" || apellido === "" || edad === "") {
            alert("Por favor, complete todos los campos.");
            return; // Detener el envío del formulario si falta algún campo
        }
    });
    });
}