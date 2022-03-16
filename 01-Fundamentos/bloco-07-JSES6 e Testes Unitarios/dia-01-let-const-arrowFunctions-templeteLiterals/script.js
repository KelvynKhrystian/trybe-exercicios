 function testingScope(escopo) {
     if (escopo === true) {
       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
       console.log(ifScope);
     } else {
       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
       console.log(elseScope);
     }
    
   }

   testingScope(true);

//ternary operator
const testingScope1 = (escopo) => (
    escopo === true ? `ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)` );

console.log(testingScope1(true));