/*Adicione seu codigo abaixo */


// 1 filter()
 
const filterNumbers = (arrayNumbers) => {
    
    const filteredNumbers = arrayNumbers.filter((number) => {
        return number >= 15
    })

    return filteredNumbers
}

console.log(filterNumbers([32,-87,-31,-26,21,16,14,79,13]))

// find()

const games = [
    {
        nome:'God of War',
        preço: 199.99,
        genero:'MMO'
    },
    {
        nome:'Uncharted',
        preço: 159.99,
        genero: 'aventura'
    },
    {
        nome: 'Spider-Man',
        preço: 299.99,
        genero: 'Heroi / aventura'
    }
 ]
    
    const procuraPorPreco = (arrayDeProdutos) => {

        const produtoEncontrado = arrayDeProdutos.find((games) => {
            return games.preço < 200
        }) 

        return produtoEncontrado
    }

    console.log(procuraPorPreco(games))


//includes() não recebe uma callback , somente o elemento a ser 

const contadorDeVogais = (palavra) => {

    const palavraNormalizada = palavra.toLowerCase()
    //console.log(palavraNormalizada)
    const arrayPalavra = palavraNormalizada.split('')
    console.log(arrayPalavra)
    const vogais = [ 'a', 'e', 'i', 'o', 'u'] 
    
    let count = 0

    arrayPalavra.forEach(letra => {
        if(vogais.includes(letra)){
            count++
        }
    })
    return count
}

console.log(contadorDeVogais('paralelepipedo'))

// reduce() 

const numerosPositivos = [35,27,43,18,64]

const multReduce = (arrayDeNumeros) => {

    const valorREduzido = arrayDeNumeros.reduce((acumulador, valorAtual) =>{

        let total = acumulador + valorAtual

        return total

    }, 1)

    return valorREduzido
}

console.log(multReduce(numerosPositivos))


//forEach 
const newForEach = (array, callback) => {
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}





// indexOf

