

for (let i = 0; i < 256; i++){
    const div = document.createElement('div')
    const container = document.querySelector('.grid')
    div.classList.add('box')
    // div.textContent = 'Test'
    
    

    container.appendChild(div)
}

const divs = document.querySelectorAll('.box')
divs.forEach((item) =>{
    item.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    })
})

const btn = document.querySelector('.gridSize')
btn.addEventListener('click', function(){
    let gridSide = prompt('What size grid would you like?')
    for (let i = 0; i < gridSide; i++){
        const div = document.createElement('div')
        const container = document.querySelector('.grid')
        div.classList.add('box')
        // div.textContent = 'Test'
        
        
    
        container.appendChild(div)
        divs.forEach((item) =>{
            item.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black'
            })
        })
        
    }
})