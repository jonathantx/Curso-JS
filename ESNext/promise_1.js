let p = new Promise(function(resolve) {
    resolve(['Ana', 'Jonathan', 'Nicole', 'Janaina'])
})

p
    .then(valor => valor[1])
    .then(primeira => primeira[0])
    .then(letra => console.log(letra))

