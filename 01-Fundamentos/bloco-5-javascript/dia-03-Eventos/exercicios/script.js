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

  const dia31 = document.querySelectorAll(".day")[32] ;
  const dia25 = document.querySelectorAll(".day")[26] ;
  const dia24 = document.querySelectorAll(".day")[25] ;
  const dia04 = document.querySelectorAll(".day")[5] ;
  const dia11 = document.querySelectorAll(".day")[12] ;
  const dia18 = document.querySelectorAll(".day")[19] ;

  createClass(dia24, "holiday");
  createClass(dia25, "holiday");
  createClass(dia31, "holiday");
  createClass(dia04, "holiday");
  createClass(dia11, "friday");
  createClass(dia18, "friday");
  createClass(dia25, "friday");

//   Exercício 2:
function buttonFeriado (string){
   const botaoContainer = document.querySelector(".buttons-container");
   const botao = document.createElement("button");
   botao.innerText = string;
   botao.id = "btn-holiday";
   botaoContainer.appendChild(botao);
}
buttonFeriado("Feriados");


//   Exercício 3:

// let bot = document.getElementById("btn-holiday")
// let feriados = document.getElementsByClassName("hollyday");
// let a = 1

// bot.addEventListener("click", mudarCor(){

//     for(i=0;i<feriados.length;i++){

//         feriados[i].style.backgroundColor = "red"; 
//     }
// })

// bot.addEventListener("click", voltaCor(){
//     for(i=0;i<feriados.length;i++){
//         feriados[i].style.backgroundColor = "rgb(238,238,238)" ;
//     }
// })


function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();








