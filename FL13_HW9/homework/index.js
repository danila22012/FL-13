// Your code goes here
function convert(){
    let aray = []
    for (let el of arguments){
        if(typeof el ==='string') {
        aray.push(parseInt(el,10)) 
        } else {
        aray.push(String(el)) 
        }
    }
    return aray;
}
convert('2','3',4)


function executeforEach(arr, liter){
   
    for(let el of arr){
        liter(el)
       
    }
}

executeforEach([1,2,3],function (el) {
 console.log(el * 2) 
})

function mapArray(arr, map){
    let tempArr = []
    for (let el of arr){
        if(typeof el ==='string'){
 el = +el 
}
        tempArr.push(map(el))
        
    }
    return tempArr
}

mapArray([2, '5', 8], function(el) {
 return el + 3 
})

function filterArray(arr, map){
    let tempArr = []
    for (let el of arr){
        if(map(el)) {
 tempArr.push(el) 
}   
    }
    return tempArr
}   
filterArray([2, 5, 8], function(el) {
 return el % 2 === 0 
})


function containsValue(arr, param){
    for(let el of arr){
        if(el === param) {
 return true; 
} else {
 return false 
}
    }
}
containsValue([2, 5, 8], 2)  
containsValue([12, 4, 6], 5)  

function flipOver(word){
    let string = '';
    let i = word.length
    for(let el in word){
    el = --i
    string += `${word[el]}`
    }   
    return string;
    

}
flipOver('hey world')


function makeListFromRange(arr){
    let tempArr = []
    for(let el = arr[0]; el<=arr[arr.length-1]; el++ ){
    tempArr.push(el)
    }
    
    return tempArr
}   
let a = makeListFromRange([2, 7]) 
console.log(a)

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];

function getArrayOfKeys(obj, qwe) {
    let tempArr = [];
    for(let el of obj){
        
        tempArr.push(el[qwe])
        
    }
    return tempArr
}  
getArrayOfKeys(fruits, 'name'); 

function substitute(arr){

    let tempArr = []
    for (let el of arr){
        el > 10 && el < 20 ? tempArr.push('*') : tempArr.push(el);
    }
    return tempArr

}
substitute([58, 14, 48, 12, 31, 19, 10]); 

const date = new Date(2020, 0, 2); 

function getPastDay(date, num) {

    const day = date.getDate() - num;
    
    return new Date(2020, 0, day).getDate()
}


getPastDay(date, 1); 
getPastDay(date, 2);
getPastDay(date, 365);

function formatDate(date){
    let string = '';
    string = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${ date.getMinutes()}`

    return string
}
formatDate(new Date('6/15/2019 09:15:00')) 
formatDate(new Date()) 
