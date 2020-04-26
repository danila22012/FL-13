// Your code goes here
checkLogin()

function checkLogin(){
    let checkLogin = prompt('Enter login')
    if (checkLogin === '' || checkLogin.indexOf(' ') >= 0 ){
        alert('Canceled')
        return
    } else if(checkLogin.length<4){
        alert('I don’t know you')
        return
    } else if(checkLogin === 'admin' ){
        checkPas(checkLogin)
    } else if(checkLogin === 'user' ){
        checkPas(checkLogin)
    } else{
        alert('wrong login')
    }
}


function checkPas(checkLogin){

    let currentTime = new Date().getHours()
    console.log(currentTime)

    let checkPas = prompt('enter your password')

    if( checkLogin === 'admin' && checkPas === 'RootPass' && currentTime < 20 ){
        alert('Good day, dear Admin!')
    } else if (checkLogin === 'user' && checkPas === 'UserPass' && currentTime < 20){
        alert('Good day, dear User!')
    } else if( checkLogin === 'admin' && checkPas === 'RootPass' && currentTime >= 20 ){
        alert('Good evening, dear Admin!')

    } else if (checkLogin === 'user' && checkPas === 'UserPass' && currentTime >= 20){
        alert('Good evening, dear User!')
    } else {
    alert('Wrong password!!') 
    }   

}