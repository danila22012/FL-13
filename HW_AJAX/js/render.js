const container = document.querySelector('#root')
console.log(container)
let content = window.localStorage.getItem('content')
console.log(content)
container.innerHTML = content