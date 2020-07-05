const root = document.getElementById('root');
const arrBook = JSON.parse(localStorage.getItem('obj'))


const container = document.createElement('div');
container.id = 'container'
const divBookContainer = document.createElement('div');
divBookContainer.id = 'containerBooks'
const ulBooks = document.createElement('ol');
ulBooks.id = 'menu'
const btnAdd = document.createElement('button')
btnAdd.id = 'btn__add'
btnAdd.innerHTML = 'Add'

const divPreviewContainer = document.createElement('div');
divPreviewContainer.id = 'preview'
const divContainerDescr = document.createElement('div');
divContainerDescr.id = 'desciption'

const divEditContainer = document.createElement('div');
divEditContainer.id = 'edit'


root.appendChild(container)
container.append(divBookContainer,divPreviewContainer,divEditContainer)
divPreviewContainer.appendChild(divContainerDescr)
divBookContainer.append(ulBooks,btnAdd)


localStorage.setItem('root', root)
window.location.hash = 'main';
function setHash(){

    if(window.location.hash.includes('preview')){
        divEditContainer.style.display = 'none'
        divPreviewContainer.style.display = 'flex'
        console.log('done')

        let el = window.location.hash

        let hash = +/\d+/.exec(el)

        showPreviewHash(arrBook,hash)


    } else if(window.location.hash.includes('add')){
        divEditContainer.style.display = 'flex'
        divPreviewContainer.style.display = 'none'
    } else if(window.location.hash.includes('edit')){
        divEditContainer.style.display = 'flex'
        divPreviewContainer.style.display = 'none'
        console.log('not done')
    }

}




function changehash(id){
    if(window.location.hash.includes('preview')){
        divEditContainer.style.display = 'none'
        divPreviewContainer.style.display = 'flex'
        console.log('1')

    } else if(window.location.hash.includes('edit')){
        divEditContainer.style.display = 'none'
        divPreviewContainer.style.display = 'flex'
        window.location.hash = `=${id}#preview`
        
        console.log('2')
    }
    
}

function createLi(arrBook,ulBooks){

    let html = '';
    let id = 1
    arrBook.forEach(key => {
       
        html += `<li><p class = "book__title"id="${id++}">${key.name}</p><button class ='btn__edit'>edit</button></li>`
        
    });
    ulBooks.innerHTML = html

    document.querySelectorAll('.book__title').forEach(key => {
        
        key.addEventListener('click', function(){
            console.log(key.id)
            window.location.hash = `${key.id}preview`
            preview(arrBook,key.id)
            changehash()

        })
    })

}
createLi(arrBook,ulBooks)

function showPreviewHash(arrBook,id){
    
    
    arrBook.forEach(key => {


        
        if(key.id === id){

           

            divPreviewContainer.innerHTML = `
            <img src="${key.img}" alt="">
            <div id ="decription">
                <p>Name:${key.name} </p>
                <p>Size:${key.size} </p>
                <p>Genre:${key.genre} </p>
                <p>Author:${key.author} </p> 
            </div>`
            console.log('zdarova')
            
        }
        
    })

}


function preview(arrBook,id){
    arrBook.forEach(key => {
        if(key.id === +id){

           

            divPreviewContainer.innerHTML = `
            <img src="${key.img}" alt="">
            <div id ="decription">
                <p>Name:${key.name} </p>
                <p>Size:${key.size} </p>
                <p>Genre:${key.genre} </p>
                <p>Author:${key.author} </p> 
            </div>`
            
            
        }
        
    })
   
}

function edit(arrBook, id){
    
    let newSize = ''
    let newName = ''
    let newAuthor = ''
    let newGenre = ''
    
    arrBook.forEach(key => {
        if(key.id === +id ){
           
            divPreviewContainer.style.display = 'none'
            divEditContainer.style.display = 'flex'
            
            divEditContainer.innerHTML = `
            <input type="text" id ="name" value="${key.name} "> 
            <input type="text" id ="size" value="${key.size} "> 
            <input type="text" id ="genre" value="${key.genre} "> 
            <input type="text" id ="author" value="${key.author} "> 
            <div >
                <button id="cancel">cancel</button>
                <button id = "confirm">confirm</button>
            </div> 
            `
           
        }
        

    })
    document.querySelector('#cancel').addEventListener('click',function () {
            
        if(confirm('discard changes?')){
            window.history.back()   
            setTimeout(setHash,300)
            
        }
    })
    document.querySelector('#confirm').addEventListener('click',function () {
        
        newName = document.querySelector('#name').value
        newSize = document.querySelector('#size').value
        newGenre = document.querySelector('#genre').value
        newAuthor = document.querySelector('#author').value
        
        arrBook.forEach(key => {
            if(key.id === +id ){
            key.name = newName
            console.log(key.name)
            key.size = newSize
            key.genre = newGenre
            key.author = newAuthor
            }

        })

        
        setTimeout(() => {
        alert('Book successfully updated')
        
       
        
       },300)
    })
    document.querySelector('#confirm').addEventListener('click',function () {
        arrBook.forEach(key => {
            if(key.id === +id){
    
                
    
                divPreviewContainer.innerHTML = `
                <img src="${key.img}" alt="">
                <div id ="decription">
                    <p>Name:${key.name} </p>
                    <p>Size:${key.size} </p>
                    <p>Genre:${key.genre} </p>
                    <p>Author:${key.author} </p> 
                </div>`
                
                changehash(id)
            }
        
        })
    })

    
}

function btnEdit(arrBook){
    document.querySelectorAll('.btn__edit').forEach(key => {
        key.addEventListener('click', function(){
           
            window.location.hash = `=${key.previousSibling.id}#edit`

            edit(arrBook,key.previousSibling.id )


        })
    })

}
function add(arrBook, id){
   
   let tempName = ''
    
    console.log('asdasd')
    arrBook.forEach(key => {
        if(key.id === +id ){
           
            divPreviewContainer.style.display = 'none'
            divEditContainer.style.display = 'flex'
            
            divEditContainer.innerHTML = `
            <input type="text" id ="name" value="${key.name} "> 
            <input type="text" id ="size" value="${key.size} "> 
            <input type="text" id ="genre" value="${key.genre} "> 
            <input type="text" id ="author" value="${key.author} "> 
            <div >
                <button id="cancel">cancel</button>
                <button id = "confirm">confirm</button>
            </div> 
            `
           
        }
        document.querySelector('#btn__add').addEventListener('click',function(){

            arrBook.forEach(key => {

                
                key.name = tempName
               console.log(tempName)
                
    
            })
           


        })
        

    })
    
}
function btnnAdd(arrBook){
     

    document.querySelector('#btn__add').addEventListener('click',function(){
        console.log('asdsd')
        
        document.querySelectorAll('.btn__edit').forEach(key => {
            
                window.location.hash = `=${key.previousSibling.id}#add`
                add(arrBook,key.previousSibling.id )

                
                
    
            
        })
    })
    

}
btnnAdd(arrBook)
btnEdit(arrBook)

setInterval(() => {
    setHash()
}, 10000);



