/*
* Card Game implementation
* Inmagine you're building a simple
* card game. You have an array representing a deck of cards,
* and you want to perform the following operations:
*
* 1.Shuffle the Deck:
* Ramdomly rearrange the order of the cards in the deck.
*
* 2. Deal Cards:
* Deal a specific number of cards to players from the top of the deck.
*
* This excercise involves using the splice() method to shuffle the deck and deal cards.
*
* */

function main() {

    const cardTypes = ["♠", "♥", "♦", "♣"]

    const cardValues = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    const deck = []

    // DOM Elements
    const handElement = document.getElementById('hand')

    // Game Logic
    buildDeck(cardTypes, cardValues)

    shuffleDeck(deck)

    let playerHandCards = dealCards(5, deck)

    displayPlayerHand(playerHandCards)


    // Mis funciones
    function buildDeck(cardTypes, cardValues) {

        for (const cardType of cardTypes) {
            for (const cardValuesKey in cardValues) {
                deck.push(`${cardValuesKey} ${cardType}`)
            }
        }
    }

    function shuffleDeck(deck) {

        // Fisher-Yates Algorithm
        for (let i = deck.length - 1; i > 0; i--) {
            // generando una posicion ramdom
            let ramdomPosition = Math.floor(Math.random() * (i + 1));
            // intercambiando las posiciones del array
            [deck[i], deck[ramdomPosition]] = [deck[ramdomPosition], deck[i]]
        }

    }

    function dealCards(numCard, deck) {
        const dealCards = deck.splice(0, numCard)
        return dealCards
    }

    function displayPlayerHand(playerHandCards) {
        handElement.innerText = playerHandCards.join('  |  ')
    }

}

document.addEventListener('DOMContentLoaded', main)