

for (let i = 0; i < 256; i++){
    const div = document.createElement('div')
    const container = document.querySelector('.grid')
    div.classList.add('box')
    // div.textContent = 'Test'
    
    

    container.appendChild(div)
}
function addClass(e){
    
}
const divs = document.querySelectorAll('.box')
divs.forEach((item) =>{
    item.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    })
})