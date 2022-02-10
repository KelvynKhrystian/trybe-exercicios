// Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filho = elementoOndeVoceEsta.firstElementChild;
filho.innerText =  "primeiro filho do filho"
// Acesse o primeiroFilho a partir de pai .
let filhpPrimeiro = pai.firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atention = elementoOndeVoceEsta.nextSibling;
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai .
let terceiro = pai.lastElementChild.previousElementSibling




