


let cards = [] // 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")



let player = {
    name: "Per",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips 





function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2
}

















function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 

    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " 

    for(let i = 0; i<cards.length ; i++){
        cardEl.textContent += cards[i] + " "

    }
 
    sumEl.textContent ="Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "Wohoo!! You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You are out of the game!"
        isAlive = false
    }
    
    // console.log(hasBlackJack)
    // console.log(isAlive)
    
    messageEl.textContent = message
    

}


function newCard() {

    if ( isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck")

        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    }


