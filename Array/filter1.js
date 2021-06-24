const produtos = [ 
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p) {
//     return p.fragil = true 
// }))

// console.log(produtos.filter(function(pp) {
//     return pp.preco > 500
// }))

const produtosCaros = produtos => produtos.preco > 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(produtosCaros).filter(fragil))
