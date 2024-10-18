var hairBtn = document.querySelector('#hair-btn');
var topBtn = document.querySelector('#top-btn');
var bottomBtn = document.querySelector('#bottom-btn');
var chosenHair = document.querySelector('.chosen-hair');
var chosenTop = document.querySelector('.chosen-top');
var chosenBottom = document.querySelector('.chosen-bottom');
var audio = new Audio('assets/shimmer_1.flac');
//here i am adding an event listener so that on clicking the hairbtn:
hairBtn === null || hairBtn === void 0 ? void 0 : hairBtn.addEventListener('click', function () {
    var clothingMenu = document.querySelector('.clothing-menu'); //it creates a var called clothing menu that grabs the div of the same name
    if (clothingMenu && clothingMenu.childElementCount > 1) { //if clothingmenu has more than 1 child, on click remove them
        clothingMenu.removeChild(clothingMenu.lastChild);
    }
    else { //else if u click it and it has less than 1 child, create the children
        var hairOptions_1 = document.createElement('section'); //creating a child section called hair-options
        hairOptions_1.className = 'hair-options';
        var createImage = function (src, alt, height, right, bottom) {
            var img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.addEventListener('click', function () {
                audio.play();
                chosenHair === null || chosenHair === void 0 ? void 0 : chosenHair.appendChild(img);
                img.style.position = 'relative';
                img.style.height = height;
                img.style.width = 'auto';
                img.style.right = right;
                img.style.bottom = bottom;
                chosenHair === null || chosenHair === void 0 ? void 0 : chosenHair.addEventListener('click', function () {
                    img.remove();
                    hairOptions_1.appendChild(img);
                    img.style.display = 'block'; // Adjust for centering
                });
            });
            return img;
        };
        var image1 = createImage('assets/hair-1.png', 'pigtails', '15.3em', '5.6em', '3.5em');
        var image2 = createImage('assets/hair-2.png', 'long-hair', '12.2em', '8.2em', '3.8em');
        var image3 = createImage('assets/hair-3.png', 'hair-with-bow', '20.9em', '4.2em', '4.9em');
        hairOptions_1.append(image1, image2, image3);
        clothingMenu === null || clothingMenu === void 0 ? void 0 : clothingMenu.appendChild(hairOptions_1);
    }
});
topBtn === null || topBtn === void 0 ? void 0 : topBtn.addEventListener('click', function () {
    var clothingMenu = document.querySelector('.clothing-menu');
    if (clothingMenu && clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild);
    }
    else {
        var topOptions_1 = document.createElement('section');
        topOptions_1.className = 'top-options';
        var createTopImage = function (src, alt, height, right, bottom) {
            var img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.addEventListener('click', function () {
                audio.play();
                chosenTop === null || chosenTop === void 0 ? void 0 : chosenTop.appendChild(img);
                img.style.position = 'relative';
                img.style.height = height;
                img.style.width = 'auto';
                img.style.right = right;
                img.style.bottom = bottom;
                chosenTop === null || chosenTop === void 0 ? void 0 : chosenTop.addEventListener('click', function () {
                    img.remove();
                    topOptions_1.appendChild(img);
                    img.style.display = 'block';
                });
            });
            return img;
        };
        var image1 = createTopImage('assets/Top-1.png', 'tank top', '8em', '2.7em', '2.3em');
        var image2 = createTopImage('assets/top-2.png', 'jacket', '10.6em', '4.3em', '-.3em');
        var image3 = createTopImage('assets/top-3.png', 'bikini-top', '8.7em', '1.8em', '2em');
        topOptions_1.append(image1, image2, image3);
        clothingMenu === null || clothingMenu === void 0 ? void 0 : clothingMenu.appendChild(topOptions_1);
    }
});
bottomBtn === null || bottomBtn === void 0 ? void 0 : bottomBtn.addEventListener('click', function () {
    var clothingMenu = document.querySelector('.clothing-menu');
    if (clothingMenu && clothingMenu.childElementCount > 1) {
        clothingMenu.removeChild(clothingMenu.lastChild);
    }
    else {
        var bottomOptions_1 = document.createElement('section');
        bottomOptions_1.className = 'bottom-options';
        var createBottomImage = function (src, alt, height, right, bottom) {
            var img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.addEventListener('click', function () {
                audio.play();
                chosenBottom === null || chosenBottom === void 0 ? void 0 : chosenBottom.appendChild(img);
                img.style.position = 'relative';
                img.style.height = height;
                img.style.width = 'auto';
                img.style.right = right;
                img.style.bottom = bottom;
                chosenBottom === null || chosenBottom === void 0 ? void 0 : chosenBottom.addEventListener('click', function () {
                    img.remove();
                    bottomOptions_1.appendChild(img);
                    img.style.display = 'block';
                });
            });
            return img;
        };
        var image1 = createBottomImage('assets/bottoms-1.png', 'shorts and boots', '23em', '4.6em', '1em');
        var image2 = createBottomImage('assets/bottoms-2.png', 'shorts and boots', '24.2em', '3.3em', '2.4em');
        var image3 = createBottomImage('assets/bottoms-3.png', 'shorts and boots', '23.5em', '2.9em', '1.4em');
        bottomOptions_1.append(image1, image2, image3);
        clothingMenu === null || clothingMenu === void 0 ? void 0 : clothingMenu.appendChild(bottomOptions_1);
    }
});
