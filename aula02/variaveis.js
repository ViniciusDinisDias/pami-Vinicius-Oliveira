var numero = 2;
let texto = "Hello World!";
const oQueEisso = '?';

//O ponto e virgula é opcional! Boas práticas o usam

console.log('tipo var:', numero);
//Concatenarcom virgula garante um espaço

numero = 13;

console.log(texto + " o número agor é " + numero);
console.log(texto, "o número agora é:", numero);
console.log(`${texto} o numero agora é ${numero}`);

texto = 87;

console.log(texto + numero);
// Concatenar com + dois valores numericos vai
// acabar somando

// console.log(OQueEisso)

// constantes não podem ter novos valores atribuidos a ela

// oQueEisso = "uma constante????"