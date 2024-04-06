const hairBtn = document.querySelector('#hair-btn'); //here i am grabbing the hairbtn element and putting it inside the togglebtn variabel

const topBtn = document.querySelector('#top-btn');

const bottomBtn = document.querySelector('#bottom-btn')

const chosenHair = document.querySelector('.chosen-hair')

const chosenTop = document.querySelector('.chosen-top')

const chosenBottom = document.querySelector('.chosen-bottom')

//here i am adding an event listener so that on clicking the hairbtn:
hairBtn.addEventListener('click', () => {
    const clothingMenu = document.querySelector('.clothing-menu') //it creates a var called clothing menu that grabs the div of the same name
    if (clothingMenu.childElementCount > 1) { //if clothingmenu has more than 1 child, on click remove them
        clothingMenu.removeChild(clothingMenu.lastChild)
    } else { //else if u click it and it has less than 1 child, create the children
        const hairOptions = document.createElement('section')//creating a child section called hair-options
        hairOptions.className = 'hair-options'

        const image1 = document.createElement('img') //and in the section parent div, we add 3 img children
        image1.src = 'assets/hair-1.png'
        image1.alt = 'pigtails'

        image1.addEventListener('click', () => {
            chosenHair.appendChild(image1)
            image1.style.position = 'relative'
            image1.style.height = '40.5em'
            image1.style.width = 'auto'
            image1.style.right = '9.9em'
            image1.style.bottom = '4em'
            if (chosenHair.replaceChild(image1, image2)) { //if image1 is replacing image2, append image2 to the hairOptions div to basically reset it
                hairOptions.append(image2)
                image2.style = 'center'
            }
        })
        
        const image2 = document.createElement('img')
        image2.src = 'assets/hair-2.png'
        image2.alt = 'long-hair'

        image2.addEventListener('click', () => {
            chosenHair.appendChild(image2)
            image2.style.position = 'relative'
            image2.style.height = '40.5em'
            image2.style.width = 'auto'
            image2.style.right = '9.9em'
            image2.style.bottom = '4em'
            if (chosenHair.replaceChild(image2, image1)) {
                hairOptions.append(image1)
                image1.style = 'center'
            }
        })

        hairOptions.append(image1, image2)
        clothingMenu.appendChild(hairOptions)
    }
});

topBtn.addEventListener('click', () => {
    const clothingMenu = document.querySelector('.clothing-menu')
    if (clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild)
    } else {
        const topOptions = document.createElement('section')
        topOptions.className = 'top-options'

        const image1 = document.createElement('img')
        image1.src = 'assets/Top-1.png'
        image1.alt = 'tank top'

        image1.addEventListener('click', () => {
            chosenTop.appendChild(image1)
            image1.style.position = 'relative'
            image1.style.height = '40.5em'
            image1.style.width = 'auto'
            image1.style.right = '10em'
            image1.style.bottom = '8em'
            if (chosenTop.replaceChild(image1, image2)) { 
                topOptions.append(image2)
                image2.style = 'center'
            } else (chosenTop.replaceChild(image1, ))
        })

        const image2 = document.createElement('img')
        image2.src = 'assets/top-2.png'
        image2.alt = 'jacket'
        
        image2.addEventListener('click', () => {
            chosenTop.appendChild(image2)
            image2.style.position = 'relative'
            image2.style.height = '40.5em'
            image2.style.width = 'auto'
            image2.style.right = '10em'
            image2.style.bottom = '6.5em'
            if (chosenTop.replaceChild(image2, image1)) { 
                topOptions.append(image1)
                image1.style = 'center'
            }
        })

        const image3 = document.createElement('img')
        image3.src = 'assets/top-3.png'
        image3.alt = 'bikini-top'
        
        image3.addEventListener('click', () => {
            chosenTop.appendChild(image3)
            image3.style.position = 'relative'
            image3.style.height = '40.5em'
            image3.style.width = 'auto'
            image3.style.right = '10em'
            image3.style.bottom = '6.5em'
            if (chosenTop.replaceChild(image3, image1)) { 
                topOptions.append(image1)
                image1.style = 'center'
                console.log('replaced image 1')
            } else (chosenTop.replaceChild(image3, image2)) 
                topOptions.append(image2)
                image2.style = 'center'
        })

        topOptions.append(image1, image2, image3)
        clothingMenu.appendChild(topOptions)
    }
});

bottomBtn.addEventListener('click', () => {
    const clothingMenu = document.querySelector('.clothing-menu')
    if (clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild)
    } else {
        const bottomOptions = document.createElement('section')
        bottomOptions.className = 'bottom-options'

        const image1 = document.createElement('img')
        image1.src = 'assets/bottoms-1.png'
        image1.alt = 'shorts and boots'
        
        image1.addEventListener('click', () => {
            chosenBottom.appendChild(image1)
            image1.style.position = 'relative'
            image1.style.height = '40em'
            image1.style.width = 'auto'
            image1.style.right = '9.8em'
            image1.style.bottom = '8.5em'
            if (chosenBottom.replaceChild(image1, image2)) { 
                bottomOptions.append(image2)
                image2.style = 'center'
            }
        })
        
        const image2 = document.createElement('img')
        image1.src = 'assets/bottoms-1.png'
        image1.alt = 'shorts and boots'
        
        const image3 = document.createElement('img')
        image1.src = 'assets/bottoms-1.png'
        image1.alt = 'shorts and boots'
        
        bottomOptions.append(image1, image2, image3)
        clothingMenu.appendChild(bottomOptions)
    }
    
});


