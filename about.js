console.log("hello world");
let choice1 = document.getElementById(`choice1`)
let choice2 = document.getElementById(`choice2`)
let choice3 = document.getElementById(`choice3`)



function bingusAlert(evt) {
	evt.preventDefault();
	
	alert(`Bingus my beloved`)
}
let bingus = document.getElementById(`bingus`)
bingus.addEventListener(`mouseover`, bingusAlert)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`submitted successfully.`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const check1 = () =>{

}

choice1.addEventListener(`click`, choice1)

const catRadio = document.getElementById('catRadio');
const dogRadio = document.getElementById('dogRadio');
const catImage = document.getElementById('catimage');
const dogImage = document.getElementById('dogimage');
const imagecontainer = document.getElementById('imagecontainer')


// function changeImage (value) {
//     const image = document.getElementById('catimage');
//     if (value === 'Dog') {
//         image.src = 'https://pbs.twimg.com/media/CUT9PuQWwAABQv7.jpg';
//     } else if (value === 'Cat') {
//         image.src = 'https://static.wikia.nocookie.net/floppapedia-revamped/images/5/5f/ActualBingus.jpg';
//     }
// }

let urls = [`https://static.wikia.nocookie.net/floppapedia-revamped/images/5/5f/ActualBingus.jpg`, `https://pbs.twimg.com/media/CUT9PuQWwAABQv7.jpg`]



let radioInputs = document.getElementsByClassName("animalbtn");

console.log(radioInputs)

radioInputs.forEach(input => {
    input.addEventListener('click', handleChange);
});

function handleChange(e) {
    let inputValue = e.target.value;

    radioInputs.forEach((element, index) => {
        if (element.value === inputValue) {
            let image = document.getElementById("image");
            image.src = urls[index];
        }
    });
}





// function changeImage() {
//     const catRadio = document.getElementById('catRadio');
//     const catImage = document.getElementById('catimage');
//     const dogImage = document.getElementById('dogimage');

//     if (catRadio.checked) {
//         catImage.style.display = 'block';
//         dogImage.style.display = 'none';
//     } else {
//         catImage.style.display = 'none';
//         dogImage.style.display = 'block';
//     }
// }


// catRadio.addEventListener('change', function() {
//     if (catRadio.checked === true) {
//         catImage.style.display = 'block';
//         dogImage.style.display = 'none';
//     }
// });

// dogRadio.addEventListener('change', function() {
//     if (dogRadio.checked === true) {
//         catImage.style.display = 'none';
//         dogImage.style.display = 'block';
// 		imagecontainer.style.display = 'block'
//     }
// });

dogRadio.checked = () => imagecontainer.style.display = `block`