//Exercicio 3
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}
function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}
//exibirLivro({titulo: "Escrava Isaura", autor: "Bernardo Guimarães", anoPublicacao: 1875});
// Ou com objeto separado: 

const infoLivro: Livro = {
    titulo: "Escrava Isaura",
    autor: "Bernardo Guimarães",
    anoPublicacao: 1875
};

exibirLivro(infoLivro);