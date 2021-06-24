
// function criarProduto(Celular, preco) {
//     return Celular, preco
// }

// console.log(criarProduto(('iPhone"')),('1234'))   Eu fiz primeira tentativa

//Correto abaixo
function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
    }
}
console.log(criarProduto(("iPhone"),("1234")))

// Abaixo igual da aula
function criarProduto2(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto2('Notebook', 2199,49))
console.log(criarProduto2('iPad,', 1199.49))
