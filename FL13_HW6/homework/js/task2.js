// Your code goes here
task2()
function task2(){
    let value = prompt('enter your value')
    if(value === '' || value.indexOf(' ') >= 0 ){
        alert('Invalid value')
        return
    }
    let arr = value.split('')
    let i = 0;
    
    alert(arr.length)
    if( Number.isInteger(arr.length/2)){
        i = arr.length/2-1;
        alert(`${arr[i]}, ${arr[i+1]}`);
    } else {
        i = Math.floor(arr.length/2);
        alert(arr[i]);
       
       
    }   


    
}

