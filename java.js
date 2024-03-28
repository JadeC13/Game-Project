const hairBtn = document.querySelector('#hair-btn'); //here i am grabbing the hairbtn element and putting it inside the togglebtn variabel


const topBtn = document.querySelector('#top-btn');


topBtn.addEventListener('click', () => { 
    const topOptions = document.querySelector('.top-options')
    console.log(topOptions.style.display)
    if(topOptions.style.display === 'none') {
        topOptions.style.display = 'block' 
        console.log('if')
    } else {
        topOptions.style.display = 'none'
        console.log('else')
    }
});

hairBtn.addEventListener('click', () => { //when the hairbtn is clicked, the following paramaters will occur
    const hairOptions = document.querySelector('.hair-options')
    if(hairOptions.style.display === 'none') {
        hairOptions.style.display = 'block' //this is saying if the display of hairoptions is none, show it as a block
    } else {
        hairOptions.style.display = 'none' //else leave it as none
    }
});