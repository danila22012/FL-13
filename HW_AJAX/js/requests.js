

const urlGET = 'http://localhost:3000/api/list';
const urlPOST = 'http://localhost:3000/api/create-article';




const btnSubmit = document.querySelector('.form__submit')
btnSubmit.addEventListener('click', e =>{

    //Fields

    let type = document.querySelector('.type')
    let link = document.querySelector('#link')
    
    let title = document.querySelector('#title')
    let date = document.querySelector('#date')
    let descr = document.querySelector('#descr')
    let quote = document.querySelector('#quote')


    //checkING

    console.log(title)
    if(title.value.length === 0){
        alert('Write something')
        return
    }
    else if(title.value[0] !== title.value[0].toUpperCase()) {
        alert('You should write capital letter')
        return
    }
    else if(title.value.length < 2 || title.value.length > 20 ){
        alert('write more than 2 letters and less than 20')
        return
    }
     

    //Creating an object to post on server

    function CreateObj (type, link, title, descr, quote, date,author){

        this.type = type,
        this.link = link,
        this.title = title,
        this.descr = descr,
        this.quote = quote,
        this.date = date
        this.author = author
    }

    const toPost = new CreateObj(type.value, 
        link.value,
        title.value, 
        date.value, 
        descr.value, 
        quote.value, 
        author.value
    )
    

    //Sending to server

    fetch(urlPOST,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(toPost)
    }).then(response => response.json()).then(data => console.log(data))
    getPosts()

})
