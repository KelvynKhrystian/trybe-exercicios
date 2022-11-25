const list = [];
const list2 = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
const name = 'Lucas';

// console.log(list.length);
// console.log(list2);
// console.log(name);

const techList = (array, string) => {

  const lista = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!'
  } 

  for (let i=0; i<array.length; i+=1) {
    let item = {
      tech: array[i],
      name: string,
    }
    lista.push(item);
  }

  return lista;

};

techList(list2,name);

module.exports = techList;