window.onload = function() {
    const apagar = document.getElementById("apagar");
    apagar.addEventListener('click', apagar());
    const button = document.getElementById("enviar");
    button.addEventListener("click", enviar());
    
}

function enviar(event){
    event.preventDefault();
}

function apagar() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
   
}





