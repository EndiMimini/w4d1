var username = "";
var cards = document.querySelector('.cards');


function getUsername(element){
    username = element.value
}

async function search(){
    var response = await fetch('https://api.github.com/users/' + username)
    var coderData = await response.json();
    cards.innerHTML = cardsDiv(coderData)
}

function cardsDiv(data){
    if (data.login){
        return `<div class="cards">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <h1 class="green-text">Username: ${data.login}</h1>
                    <p>Type: ${data.type} </p>
                </div>`
    }
    else return `<p class="text-danger">There is no such username in GitHub</p>`
}