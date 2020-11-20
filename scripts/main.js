function printAdvice(data) {
    adviceResponse.innerText = data.slip.advice;
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
};

randomAdvice();

let adviceResponse = document.getElementById('response-advice');
let mainButton = document.getElementById('main-button');
mainButton.addEventListener('click', randomAdvice);