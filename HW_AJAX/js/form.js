'use strict'
//////modal window





const btn = document.querySelector('.js-open-modal')
let modal = document.querySelector('.form')
let overlay = document.querySelector('.overlay')

btn.addEventListener('click', () =>{

    
    overlay.style.display = "block"
    modal.style.display = "block"

})
document.querySelector('.overlay').addEventListener('click',()=>{

    overlay.style.display = "none"
    modal.style.display = "none"

})

///////Get my posts

function getPosts(){
    setTimeout(function(){
        fetch(urlGET)

        .then(response => response.json())
        .then(data => {
            
            let html = ''
            
            const newData = data.filter(elem => {
                if(typeof elem.id ==='undefined'){
                    return elem
                }
            
            })
            newData.forEach(function(e){
                html += ` <div class="post">
                    <img class="post__img" src="${e.link}">
                    <p class="post__title">${e.title}</p> 
                    <p class="post__type">${e.type}</p> 
                    <p class="post__descr">${e.descr}</p>
                    <p class="post__author">${e.author}</p>
                    <p class="post__date">${e.date}</p>
                </div>`
                // console.log(html)
            })
            console.log(html)
            window.localStorage.setItem('content', html )
            window.location.href = "file:///C:/Users/User/Desktop/Epam/FL-13/HW_AJAX/posts.html"
            
        })

        







        
    },500)
    
}

