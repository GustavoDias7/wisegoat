function printAdvice(data) {
    adviceResponse.innerText = data.slip.advice;
}


let endpoint = 'https://api.adviceslip.com/advice';
fetch(endpoint) //send our request which returns a promise
    .then((response => { // .then() = to have access to the response that the API has provided, and then we returned it as JSON.
        return response.json();
    }))
    .then((data => {
        printAdvice(data);
    }));


const adviceResponse = document.getElementById('response-advice');
const imageResponse = document.getElementById('response-image');

let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);
imageResponse.src = `/assets/goat-0${randomNum}.jpg`;
