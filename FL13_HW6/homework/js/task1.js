// Your code goes here

receipt() 

function receipt(){
    let sum = 0;
    let check =0;
    let tipNum = 0;
    let tipPerc = 0;

    check = +prompt('enter check number')
    if(isNaN(check)) {
        alert('wrong value, try again')
        return
    } else if(check <= 0){
        alert('wrong value, try again')
        return
    }


    tipPerc = +prompt('enter tip percentage ')
    if(isNaN(tipPerc)){
        alert('wrong value, try again')
        return 
    } else if (tipPerc >= 100 || tipPerc < 0){
        alert('wrong value, try again')
        return
    } else if (tipPerc === 0){
        tipNum = 0;
    } else{
        tipNum = check * tipPerc /100 ;
    }


   
    sum = tipNum + check;
    alert(`
        RECEIPT
        Check number: ${check}
        Tip: ${tipPerc}%
        Tip amount: ${tipNum}
        Total sum to pay: ${sum}
    `)
    
}



