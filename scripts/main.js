let adviceResponse = document.getElementById('response-advice');
let mainButton = document.getElementById('main-button');
mainButton.addEventListener('click', randomAdvice);

function randomAdvice() {
    let endpoint = 'https://api.adviceslip.com/advice';
    fetch(endpoint) //send our request which returns a promise
    // .then() = to have access to the response that the API has provided, and then we RETURN it as JSON.
        .then(response => response.json())
        .then(printAdvice)
        .catch(console.error);
};

function printAdvice(data) {
    adviceResponse.innerText = data.slip.advice;
};

randomAdvice();
