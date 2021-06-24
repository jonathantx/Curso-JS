const pilotos = ['Vettel', 'Alonso', 'Raikkoen', 'Massa']
pilotos.pop() // metodo pop remove o último elemento do array.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // metodo shift remove o primeiro elemento.
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos dentro de um array

// adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos 
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array apartir desse metodo
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)