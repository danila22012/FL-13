
const paymentsCard = { cash:'100$' }
const creditCard = { creditLimit: '50$', cash:'200$' }

function asign(obj, key1, key2){
    
   for( let key in key2 ){
        obj[key] = key2[key]

    }

    for( let key in key1 ){
        obj[key] = key1[key]
        
    }
    return obj
}
const universlaCard = asign({}, paymentsCard, creditCard )
console.log(universlaCard)
