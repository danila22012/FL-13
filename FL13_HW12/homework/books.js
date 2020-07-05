
const arrBooks =[
    {
        id:1,   
        name:'Анна Каренина',
        size:'1200 страниц',
        genre:'Роман',
        author:'Лев толстой',
        img :'https://azbyka.ru/fiction/wp-content/uploads/2015/04/8456132.png'
    },
    {
        id:2,
        name:'Идиот',
        size:'600 страниц',
        genre:'Роман',
        author:'Фёдор Достаевский',
        img :'https://azbyka.ru/fiction/wp-content/uploads/2013/02/55.jpg'
    },
    {
        id:3,
        name:'Воскресение',
        size:'800 страниц',
        genre:'Роман',
        author:'Лев Толстой',
        img :'https://static.librebook.me/uploads/pics/01/91/404.jpg'
    },
    {
        id:4,
        name:'Война и мир',
        size:'2000 страниц',
        genre:'Роман',
        author:'Лев Толстой',
        img :'https://b1.culture.ru/c/365442.jpg'
    }
  
]




localStorage.setItem('obj', JSON.stringify(arrBooks))



