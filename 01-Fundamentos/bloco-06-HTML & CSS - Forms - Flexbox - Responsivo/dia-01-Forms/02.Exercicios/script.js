function enviar(event){
    event.preventDefault();
}

window.onload = function() {
    const button = document.getElementById("enviar");
    button.addEventListener("click", enviar());
}



