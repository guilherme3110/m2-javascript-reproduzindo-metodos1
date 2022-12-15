/*Adicione seu codigo abaixo */


// 1 filter()
 const numbers = [10,40,50,60,70]
   

 function callbackFilter(elemento){
    if(elemento >= 15){
        return elemento
    }else{
        //return numbers
    }
 }

function filtrarArray(number, callback){
    const outuput = [] 
    for( let i = 0; i < number.length; i++){
        outuput.push(callback(number[i]))
    }
    return outuput
 }

 console.log( filtrarArray(numbers, callbackFilter))

// find()

const arrayNumbers =[30,40,50,60,70]

function callbackFind(elemento, index, array){
    if(elemento > 30){
        return true
    }else{
        return false
    }
}

function meuMetodoFind(arrayNumbers, callback){
    for(let i = 0 ; i < arrayNumbers.length; i++){
        if(callback(arrayNumbers[i], i,arrayNumbers) == true){
            return arrayNumbers[i]
        }
    }
    return undefined
 
}

console.log(meuMetodoFind(arrayNumbers,callbackFind))


//includes() não recebe uma callback , somente o elemento a ser 

const arrayincludes = [59,24,52,49,24] 

function callbackIncludes(elnto, index, arrayeme){
    if(arrayincludes == 10){
        return true
    }else{
        return false
    }
}

function meuMetodoIncludes(arrayincludes){
    for(let i = 0; i < arrayincludes.length; i++){
        if(callbackIncludes(arrayincludes[i]) == true){
            return arrayincludes[i]
        }
    }
    return false
}

console.log(meuMetodoIncludes(arrayincludes, 12))


//indexOf

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

function meuMetodoIndexOf(array, searchItem){

    for(let i = 0; i < array.length; i++){
        if(array[i] == searchItem){
            return i
        }
        
    }
    return -1
    }

 console.log(meuMetodoIndexOf(beasts, 'frango'))   

// reduce()

const array2 = [99,51,16,75]

function callbackReduce(acumulador, valorAtual){
    return valorAtual + acumulador
}

function meuMetodoReduce(array, callback, valorInicial){
    let count = valorInicial

    for(let i = 0; i < array.length; i++){
        count = callback(count, array[i])
    }
    return count
}

console.log(meuMetodoReduce(array2,callbackReduce,0))

// map()

const array3 = [1,4,9]
function callbackMap(valorAtual, indice , array){
    return valorAtual * 2
}
 

function meuMetodoMap(elemento,callback ){
    const newArr = []
    for(let i = 0; i < elemento.length; i++){
        const resultado = callback(elemento[i],i ,elemento)
         newArr.push(resultado)

    }
    return newArr
}

console.log(meuMetodoMap(array3,callbackMap))