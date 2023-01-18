
// let firstCard = 11
// let secondCard = 11


// let sum = firstCard + secondCard 

// if ( sum < 21) {
//     console.log("Do want to draw a new card?!")

// } else if (sum === 21 ) {
//     console.log("Wohoo!! You've got Blackjack")
// }else if ( sum > 21) {
//     console.log("You're out of the game!")
// }


// let myAge = 22

// if (myAge <+ 21) {

//     console.log("You are underage!")
// }else {
//     console.log("Welcome to the Club!!")
// }


// let age = 99 


// if (age < 100){
//     console.log("You are not elegible, you are under 100")
// }else if(age ===100) {

//     console.log("Here's you birthday card from the king!")
// } else {
//     console.log("You are not elegible, already gotten your birthday card from the king!")
// }



let cards = [] // array - ordered list of items
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


