function positiveSum(array){
    let sum = 0;
    for(let num of array){
    if(num < 0){
    num = 0; 
    }
    sum += num
    }
    return sum;
}
positiveSum([1,5,6,7,-10])    
