// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if (id  === professionalBoard[i].id ) {
      let obj = professionalBoard[i]
      let objErro = false
      for (let j in obj) {
        if (detail === j) {
          return professionalBoard[i][detail];
        } else {
          objErro = true;
        }
      }
      if (objErro === true) {
        return "Informação indisponível";
      }
      return professionalBoard[i][detail];
    }
  }
  return "ID não identificada"
  
};

console.log(searchEmployee('8579-6','firstName'));
// console.log(professionalBoard[0].id)

module.exports = { searchEmployee, professionalBoard };