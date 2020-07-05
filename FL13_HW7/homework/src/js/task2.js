// Your code goes here
start()
function start(){
    let choice = confirm('Do you want to play a game?')
    if(!choice){
        alert('You did not become a billionaire, but could.')
    } else {
        game()
    }
}


function game(){

    function randomNum(min, max){
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    let min = 0;
    let max = 5;
   let number = randomNum(min,max);

    check(100, number, 0)
    function check(money,number, prize){
       
        console.log(number)

       
        let j = 3;

        for(let i=0; i<3; i++){
        
         let userNumber = +prompt(`
Enter number from 0 to ${max}
Attemps left:${j--}
Total prize ${prize}:
Possible prize on current attempt:${money}`
        ) 
        
        if(number === userNumber){
            prize += money
            
            alert(`Thank you for your participation. Your prize is: ${prize} $`)

            let deside = confirm('do you want yo continue?')

            if(deside){
                max *=2
                number = randomNum(min, max)
                money *=2;
                check(money, number, prize)
            }
            break
        }
        if(j === 0){
            alert(`Thank you for your participation. Your prize is: ${prize} $`)
            let deside = confirm('do you want yo continue?')
            if(deside){
                max = 5
                
                number = randomNum(min, max)
                check(100, number, 0)
            }
        }
        money /=2;   
        
        }
    }
   
    


}
