function ExibirMensagagem(msg) {
    console.log(msg);
}

ExibirMensagagem('Olá amiguinhos!! Bom dia');
ExibirMensagagem("Estou com sono");

// Função básica
function Soma (n1, n2) {
    return n1 + n2;
}

console.log(Soma(2,6));
// console.log(ExibirMensagem2("João Siles é calvo!")) // return = undefined

//Arrow  function opu função anônima

const Potencia = (n, p) => {
    return Math.pow(n, p);
}

console.log(Potencia(4,2));
const Raiz = (m) => {
    return Math.sqrt(m);
}

console.log(Raiz(100));

// meida >= 6,00 = Aprovado
// media < 6,00 || >= 4,00 = Recuperação
// media < 4,00 = Reprovado
const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2;

    if (NotaFinal < 4.00) {
        return "Reprovado!";
    }

    if (NotaFinal >= 6.00) {
        return "Aprovado!";
    }

    return "Recuperação";
}

console.log(Media(6,4))