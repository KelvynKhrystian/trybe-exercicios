function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDays (){
      const daysLocation = document.getElementById("days");
      for(i=0; i<dezDaysList.length;i++){
        const dayItem = document.createElement("li");
        dayItem.innerText = dezDaysList[i];
        dayItem.classList.add("day");
        daysLocation.appendChild(dayItem);
      }
  }
  createDays()

  function createClass(dia, classe){
      dia.classList.add(classe);
  }

  let dia31 = document.querySelectorAll(".day")[32] ;
  let dia25 = document.querySelectorAll(".day")[26] ;
  let dia24 = document.querySelectorAll(".day")[25] ;
  let dia04 = document.querySelectorAll(".day")[5] ;
  let dia11 = document.querySelectorAll(".day")[12] ;
  let dia18 = document.querySelectorAll(".day")[19] ;

  createClass(dia24, "hollyday");
  createClass(dia25, "hollyday");
  createClass(dia31, "hollyday");
  createClass(dia04, "hollyday");
  createClass(dia11, "friday");
  createClass(dia18, "friday");
  createClass(dia25, "friday");

//   Exercício 2:
 function buttonFeriado (string){
   let botaoContainer = document.querySelector(".buttons-container");
   let botao = document.createElement("button");
   botao.innerText = string;
   botao.id = "btn-holiday";
   botaoContainer.appendChild(botao);
 }
 buttonFeriado("Feriados");

 
//   Exercício 3:









