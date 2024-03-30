const hairBtn = document.querySelector('#hair-btn'); //here i am grabbing the hairbtn element and putting it inside the togglebtn variabel

const topBtn = document.querySelector('#top-btn');

const bottomBtn = document.querySelector('#bottom-btn')

//here i am adding an event listener so that on clicking the hairbtn:
hairBtn.addEventListener('click', () => {
    const clothingMenu = document.querySelector('.clothing-menu') //it creates a var called clothing menu that grabs the div of the same name
    if (clothingMenu.childElementCount > 1) { //if clothingmenu has more than 1 child, on click remove them
        clothingMenu.removeChild(clothingMenu.lastChild)
    } else { //else if u click it and it has less than 1 child, create the children
        const section = document.createElement('section')//creating a child section called hair-options
        section.className = 'hair-options'

        const image1 = document.createElement('img') //and in the section parent div, we add 3 img children
        image1.src = 'assets/hair-1.png'
        image1.alt = 'pigtails'

        image1.addEventListener('click', () => {
            image1.style.position = 'relative'
            image1.style.height = '41em'
            image1.style.width = 'auto'
            image1.style.right = '29.3em'
            image1.style.top = '-1.5em'
        })
        
        const image2 = document.createElement('img')
        image2.src = 'assets/hair-2.png'
        image2.alt = 'long-hair'

        section.append(image1, image2)
        clothingMenu.appendChild(section)
    }
});

topBtn.addEventListener('click', () => {
    const clothingMenu = document.querySelector('.clothing-menu')
    if (clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild)
    } else {
        const section = document.createElement('section')
        section.className = 'top-options'

        const image1 = document.createElement('img')
        image1.src = 'assets/Top-1.png'
        image1.alt = 'tank top'
        const image2 = document.createElement('img')
        image2.src = 'assets/top-2.png'
        image2.alt = 'jacket'

        section.append(image1, image2)
        clothingMenu.appendChild(section)
    }
});

bottomBtn.addEventListener('click', () => {
    const clothingMenu = document.querySelector('.clothing-menu')
    if (clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild)
    } else {
        const section = document.createElement('section')
        section.className = 'bottom-options'

        const image1 = document.createElement('img')
        image1.src = 'assets/bottoms-1.png'
        image1.alt = 'shorts and boots'
        
        image1.addEventListener('click', () => {
            image1.style.position = 'relative'
            image1.style.height = '40em'
            image1.style.width = 'auto'
            image1.style.right = '29.1em'
            image1.style.top = '-1.5em'
        })
        
        const image2 = document.createElement('img')
        image1.src = 'assets/bottoms-1.png'
        image1.alt = 'shorts and boots'
        
        const image3 = document.createElement('img')
        image1.src = 'assets/bottoms-1.png'
        image1.alt = 'shorts and boots'
        
        section.append(image1, image2, image3)
        clothingMenu.appendChild(section)
    }
    
});

// let hairImage1 = document.querySelector('#bottoms1')

// hairImage1.addEventListener('click', () => {
//     remove()
// })

