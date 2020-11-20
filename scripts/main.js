function printAdvice(data) {
    adviceResponse.innerText = data.slip.advice;
};

function randomImage() {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    imageResponse.src = `/assets/goat-0${randomNum}.jpg`;
};

function randomAdvice() {
    let endpoint = 'https://api.adviceslip.com/advice';
    fetch(endpoint) //send our request which returns a promise
        .then((response => { // .then() = to have access to the response that the API has provided, and then we returned it as JSON.
            return response.json();
        }))
        .then((data => {
            printAdvice(data);
        }));
}

function randomAll() {
    randomAdvice();
    randomImage();
}

const adviceResponse = document.getElementById('response-advice');
const imageResponse = document.getElementById('response-image');
const mainButton = document.getElementById('main-button');

randomAdvice();
randomImage();
mainButton = addEventListener('click', randomAll);