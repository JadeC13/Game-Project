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

        image1.addEventListener('click', () => { //adding an event listener on image1 so that on clicking the image:
            chosenHair.appendChild(image1) //it is apended onto the chosen hair div which is on the character img
            image1.style.position = 'absolute'
            image1.style.height = '15.3em'
            image1.style.width = 'auto'
            image1.style.right = '-5.4em'
            image1.style.bottom = '-10em'

            // image1.style.position = 'relative'
            // image1.style.height = '15.3em'
            // image1.style.width = 'auto'
            // image1.style.right = '5.6em'
            // image1.style.bottom = '3.5em'
            
            chosenHair.addEventListener('click', () => { //this function has it so u can click the image on the character to remove it
                image1.remove()
                hairOptions.appendChild(image1)
                image1.style = 'center'
            })
        })
        
        const image2 = document.createElement('img')
        image2.src = 'assets/hair-2.png'
        image2.alt = 'long-hair'

        image2.addEventListener('click', () => {
            chosenHair.appendChild(image2)
            image2.style.position = 'relative'
            image2.style.height = '12.2em'
            image2.style.width = 'auto'
            image2.style.right = '8.2em'
            image2.style.bottom = '3.8em'
            
            chosenHair.addEventListener('click', () => {
                image2.remove()
                hairOptions.appendChild(image2)
                image2.style = 'center'
            })
        })

        const image3 = document.createElement('img')
        image3.src = 'assets/hair-3.png'
        image3.alt = 'hair-with-bow'

        image3.addEventListener('click', () => {
            chosenHair.appendChild(image3)
            image3.style.position = 'relative'
            image3.style.height = '20.9em'
            image3.style.width = 'auto'
            image3.style.right = '4.2em'
            image3.style.bottom = '4.9em'

            chosenHair.addEventListener('click', () => {
                image3.remove()
                hairOptions.appendChild(image3)
                image3.style = 'center'
            })
        })

        hairOptions.append(image1, image2, image3)
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
            image1.style.height = '8em'
            image1.style.width = 'auto'
            image1.style.right = '2.7em'
            image1.style.bottom = '2.3em'

            chosenTop.addEventListener('click', () => {
                image1.remove()
                topOptions.appendChild(image1)
                image1.style = 'center'
            })
        })

        const image2 = document.createElement('img')
        image2.src = 'assets/top-2.png'
        image2.alt = 'jacket'
        
        image2.addEventListener('click', () => {
            chosenTop.appendChild(image2)
            image2.style.position = 'relative'
            image2.style.height = '10.6em'
            image2.style.width = 'auto'
            image2.style.right = '4.3em'
            image2.style.bottom = '-.3em'

            chosenTop.addEventListener('click', () => {
                image2.remove()
                topOptions.appendChild(image2)
                image2.style = 'center'
            })
        })

        const image3 = document.createElement('img')
        image3.src = 'assets/top-3.png'
        image3.alt = 'bikini-top'
        
        image3.addEventListener('click', () => {
            chosenTop.appendChild(image3)
            image3.style.position = 'relative'
            image3.style.height = '8.7em'
            image3.style.width = 'auto'
            image3.style.right = '1.8em'
            image3.style.bottom = '2em'

            chosenTop.addEventListener('click', () => {
                image3.remove()
                topOptions.appendChild(image3)
                image3.style = 'center'
            })
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
            image1.style.height = '23em'
            image1.style.width = 'auto'
            image1.style.right = '4.6em'
            image1.style.bottom = '1em'

            chosenBottom.addEventListener('click', () => {
                image1.remove()
                bottomOptions.appendChild(image1)
                image1.style = 'center'
            })
        })
        
        const image2 = document.createElement('img')
        image2.src = 'assets/bottoms-2.png'
        image2.alt = 'shorts and boots'

        image2.addEventListener('click', () => {
            chosenBottom.appendChild(image2)
            image2.style.position = 'relative'
            image2.style.height = '24.2em'
            image2.style.width = 'auto'
            image2.style.right = '3.3em'
            image2.style.bottom = '2.4em'

            chosenBottom.addEventListener('click', () => {
                image2.remove()
                bottomOptions.appendChild(image2)
                image2.style = 'center'
            })
        })
        
        const image3 = document.createElement('img')
        image3.src = 'assets/bottoms-3.png'
        image3.alt = 'shorts and boots'

        image3.addEventListener('click', () => {
            chosenBottom.appendChild(image3)
            image3.style.position = 'relative'
            image3.style.height = '23.5em'
            image3.style.width = 'auto'
            image3.style.right = '2.9em'
            image3.style.bottom = '1.4em'

            chosenBottom.addEventListener('click', () => {
                image3.remove()
                bottomOptions.appendChild(image3)
                image3.style = 'center'
            })
        })
        
        bottomOptions.append(image1, image2, image3)
        clothingMenu.appendChild(bottomOptions)
    }
    
});

