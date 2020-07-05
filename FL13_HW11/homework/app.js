

const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

// TODO: your code goes here
const divContainer = document.createElement('div')
divContainer.className = 'container'

const customContextMenu = document.createElement('div');
customContextMenu.className = 'contextMenu';
const divRename = document.createElement('div');
const divDelete = document.createElement('div');

divRename.className = 'option'
divDelete.className = 'option'

divRename.innerHTML = 'Rename'
divDelete.innerHTML = 'Delete'

customContextMenu.appendChild(divRename);
customContextMenu.appendChild(divDelete);
divContainer.append(customContextMenu)
customContextMenu.style.display = 'none'
customContextMenu.style.background = '#fff'
customContextMenu.style.border = '1px solid #000'









const ulPicture = document.createElement('ul');//фул меню
ulPicture.className = 'menu'
const liCredentials = document.createElement('li')
liCredentials.innerHTML = 'credentials.txt'

const spanFile = document.createElement('i')//File
spanFile.className = 'material-icons icon'
spanFile.innerHTML = 'insert_drive_file'

liCredentials.append(spanFile)




folder1(ulPicture,show,checker,divContainer)
folder2(ulPicture,show,checker)
folder3(ulPicture,show,checker)
ulPicture.append(liCredentials)



function folder1 (ulPicture, show,checker){
 
  const spanFile = document.createElement('i')//File
  spanFile.className = 'material-icons icon'
  spanFile.innerHTML = 'insert_drive_file'
  const spanFile2 = document.createElement('i')//File
  spanFile2.className = 'material-icons icon'
  spanFile2.innerHTML = 'insert_drive_file'
  divContainer.append(ulPicture)
  

  

  const picture = document.createElement('li');
  const divPicture = document.createElement('div')//Елемент pictures
  divPicture.innerHTML = 'Pictures'
  divPicture.className = 'trigger'
  rootNode.append(divContainer) 

  console.log(divPicture)
  
  ulPicture.append(picture)

  const parentVacation = document.createElement('ul');//folder inside which picture and vacation
  parentVacation.className = 'menuItem'
  parentVacation.style.display = 'none'
        
        const liLogo = document.createElement('li');//picture
        liLogo.innerHTML = 'Logo.png'
        liLogo.append(spanFile)

        const childVacation= document.createElement('li');//vacation folder
        const divVacation = document.createElement('div')
        divVacation.innerHTML = 'Vacation'
        divVacation.className = 'trigger'
        

        const ulVacation = document.createElement('ul');
        ulVacation.className = 'menuItem'
        ulVacation.style.display = 'none'
        const spain = document.createElement('li');
        const divSpain = document.createElement('div')
        spain.append(divSpain)
        divSpain.innerHTML = 'spain.jpg'
        divSpain.append(spanFile2)
        

        ulVacation.append(spain) //заношу испанию в контейнер
        childVacation.append(divVacation,ulVacation)// контейнер заношу в лиВакашон

  parentVacation.append(liLogo,childVacation) // в контейнер заношу лого, и папку

  picture.append(divPicture,parentVacation)// в папку пикча заношу дочерний контейнер ул
  console.log()
  let tempArray = [divVacation,divPicture];
  tempArray.forEach(elem => {


    const spanFolder = document.createElement('i')//icon
    spanFolder.className = 'material-icons icon'
    spanFolder.innerHTML = 'folder'
  
    elem.append(spanFolder)//ALL FUNCTIONS
    
    elem.addEventListener('click',checker, true )
    elem.addEventListener('click',show, true);
    
  })
  console.dir(divVacation);
  
}


function folder2(ulPicture,show,checker){

  
  

  let liDesktop = document.createElement('li') // parent
  let divDesktop = document.createElement('div')//div
  let ulScreen = document.createElement('ul')// ul screenshots
 
  ulScreen.style.display = 'none'
  divDesktop.innerHTML = 'Desktop';
  
  ulPicture.append(liDesktop)
  liDesktop.append(divDesktop, ulScreen)

        let liScreen = document.createElement('li')// parent for li in ul
        let divScreen = document.createElement('div') // div in li
        let ulInScreen = document.createElement('ul')//ul for screen
        
        divScreen.innerHTML = 'Screenshots'
        ulScreen.append(liScreen)
        liScreen.append(divScreen,ulInScreen)


  let tempArray = [divDesktop,divScreen];
  tempArray.forEach(elem => {

    const spanFolder = document.createElement('i')//icon
    spanFolder.className = 'material-icons icon'
    spanFolder.innerHTML = 'folder'
    elem.append(spanFolder)


    elem.addEventListener('click',checker, true )
    elem.addEventListener('click',show, true);
    
  })

}


function folder3(ulPicture,show,checker){

  const spanFolder = document.createElement('i')//icon
  spanFolder.className = 'material-icons icon'
  spanFolder.innerHTML = 'folder'
  

  const liDownloads = document.createElement('li')
  const divDownloads = document.createElement('div')
  divDownloads.innerHTML = 'Downloads'
  divDownloads.append(spanFolder)
  const ulDownloads = document.createElement('ul')

  ulPicture.append(liDownloads)
  liDownloads.append(divDownloads,ulDownloads)
  console.log(ulDownloads)

  ulDownloads.style.display = 'none'
  divDownloads.addEventListener('click',checker, true )
  divDownloads.addEventListener('click',show, true);
}



function show(){
  const menu = this.nextSibling;
    menu.style.display === 'block'
  ? menu.style.display = 'none'
  : menu.style.display = 'block';

    
    menu.style.display === 'block'
  ? this.lastChild.innerHTML= 'folder_open'
  : this.lastChild.innerHTML = 'folder';

}
function checker(){
   
  console.dir( this.nextSibling.children.length )
  if(this.nextSibling.children.length === 0){
    let divEmpty = document.createElement('div')
    divEmpty.innerHTML = 'Folder is empty'
    this.nextSibling.append(divEmpty)
    console.log(divEmpty)
  } else if (this.nextSibling.children.length > 0 ){ // ДОПИСАТЬ УСЛОВИЕ ДЛЯ УДАЛЕНИЯ 

  }
}


divRename.addEventListener('click',function(){
    alert('rekt')
})

ulPicture.addEventListener('contextmenu', function(elem) {
  elem.preventDefault();
  console.log(elem.target)

  divDelete.addEventListener('click',function(){
    
    elem.target.className = 'toDelete'
    const toDelete = document.querySelector('.toDelete')
    toDelete.remove()

  })
  if(customContextMenu.style.display==='none'){
    customContextMenu.style.display='block'
  }
  customContextMenu.style.position = 'absolute'
  customContextMenu.style.left = `${elem.pageX}px`;
  customContextMenu.style.top = `${elem.pageY}px`;
});

ulPicture.addEventListener('click', () => {
  customContextMenu.style.display='none'
})
