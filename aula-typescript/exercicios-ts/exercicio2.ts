//Exercicio 2
let cidades: string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre"];

function listarCidades(cidades: string[]): void {
    console.log("Lista de Cidades:");
    cidades.forEach(cidades => console.log(cidades));
}
listarCidades(cidades);
