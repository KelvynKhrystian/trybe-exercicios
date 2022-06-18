const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = {...user, ...jobInfos};
// console.log(trappistEnterprise)

// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. 
// I work as a Software engineer and my squad is RLL-Rocket Landing Logic"



const destruc = ({name, age, nationality, profession, squad}) => `Hi, My name is ${name}, I'm ${age} years old and ${nationality}. I work as a ${profession} and my squad is ${squad}`
console.log(destruc(trappistEnterprise))