const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Ana'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'ToString', {
    value: function() { return Object.values(this) },
    enumerable: false   
}) 

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)