const hairBtn = document.querySelector<HTMLButtonElement>('#hair-btn');

const topBtn = document.querySelector<HTMLButtonElement>('#top-btn');

const bottomBtn = document.querySelector<HTMLButtonElement>('#bottom-btn');

const chosenHair = document.querySelector<HTMLDivElement>('.chosen-hair');

const chosenTop = document.querySelector<HTMLDivElement>('.chosen-top');

const chosenBottom = document.querySelector<HTMLDivElement>('.chosen-bottom');

const audio = new Audio('assets/shimmer_1.flac')

//here i am adding an event listener so that on clicking the hairbtn:
hairBtn?.addEventListener('click', () => {
    const clothingMenu = document.querySelector<HTMLDivElement>('.clothing-menu'); //it creates a var called clothing menu that grabs the div of the same name

    if (clothingMenu && clothingMenu.childElementCount > 1) { //if clothingmenu has more than 1 child, on click remove them
        clothingMenu.removeChild(clothingMenu.lastChild as Node)
    } else { //else if u click it and it has less than 1 child, create the children
        const hairOptions = document.createElement('section')//creating a child section called hair-options
        hairOptions.className = 'hair-options'

        const createImage = (src: string, alt: string, height: string, right: string, bottom: string) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;

            img.addEventListener('click', () => {
                audio.play();
                chosenHair?.appendChild(img);
                img.style.position = 'relative';
                img.style.height = height;
                img.style.width = 'auto';
                img.style.right = right;
                img.style.bottom = bottom;

                chosenHair?.addEventListener('click', () => {
                    img.remove();
                    hairOptions.appendChild(img);
                    img.style.display = 'block'; // Adjust for centering
                });
            });

            return img;
        };

        const image1 = createImage('assets/hair-1.png', 'pigtails', '15.3em', '5.6em', '3.5em');
        const image2 = createImage('assets/hair-2.png', 'long-hair', '12.2em', '8.2em', '3.8em');
        const image3 = createImage('assets/hair-3.png', 'hair-with-bow', '20.9em', '4.2em', '4.9em');

        hairOptions.append(image1, image2, image3);
        clothingMenu?.appendChild(hairOptions);
    }
});



topBtn?.addEventListener('click', () => {
    const clothingMenu = document.querySelector<HTMLDivElement>('.clothing-menu');
    if (clothingMenu && clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild as Node)
    } else {
        const topOptions = document.createElement('section')
        topOptions.className = 'top-options'


        const createTopImage = (src: string, alt: string, height: string, right: string, bottom: string) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;

            img.addEventListener('click', () => {
                audio.play();
                chosenTop?.appendChild(img);
                img.style.position = 'relative';
                img.style.height = height;
                img.style.width = 'auto';
                img.style.right = right;
                img.style.bottom = bottom;

                chosenTop?.addEventListener('click', () => {
                    img.remove();
                    topOptions.appendChild(img);
                    img.style.display = 'block';
                });
            });

            return img;
        };

        const image1 = createTopImage('assets/Top-1.png', 'tank top', '8em', '2.7em', '2.3em');
        const image2 = createTopImage('assets/top-2.png', 'jacket', '10.6em', '4.3em', '-.3em');
        const image3 = createTopImage('assets/top-3.png', 'bikini-top', '8.7em', '1.8em', '2em');

        topOptions.append(image1, image2, image3);
        clothingMenu?.appendChild(topOptions);
    }
});



bottomBtn?.addEventListener('click', () => {
    const clothingMenu = document.querySelector<HTMLDivElement>('.clothing-menu');
    if (clothingMenu && clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild as Node)
    } else {
        const bottomOptions = document.createElement('section')
        bottomOptions.className = 'bottom-options'

        const createBottomImage = (src: string, alt: string, height: string, right: string, bottom: string) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;

            img.addEventListener('click', () => {
                audio.play();
                chosenBottom?.appendChild(img);
                img.style.position = 'relative';
                img.style.height = height;
                img.style.width = 'auto';
                img.style.right = right;
                img.style.bottom = bottom;

                chosenBottom?.addEventListener('click', () => {
                    img.remove();
                    bottomOptions.appendChild(img);
                    img.style.display = 'block';
                });
            });

            return img;
        };

        const image1 = createBottomImage('assets/bottoms-1.png', 'shorts and boots', '23em', '4.6em', '1em');
        const image2 = createBottomImage('assets/bottoms-2.png', 'shorts and boots', '24.2em', '3.3em', '2.4em');
        const image3 = createBottomImage('assets/bottoms-3.png', 'shorts and boots', '23.5em', '2.9em', '1.4em');

        bottomOptions.append(image1, image2, image3);
        clothingMenu?.appendChild(bottomOptions);
    }

});

