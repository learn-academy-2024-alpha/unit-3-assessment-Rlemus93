import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"
// import background from "./images/background.webp"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])
 

  const drawCard = () => {
    // 1) the variable draw is using string interpolation and takes the array rank and generates a random index not to exceed the length of the array. the same thing is happeing to the array suit.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) conditon starts here which is saying the variable hand will be the index of whatever random rank/suit is generated from the logic in draw and its strictly equal to -1. which ensures that the drawn cards is not already in the hand
    if (hand.indexOf(draw) === -1) {
      // 3) this is where its creating a shallow copy of hand with the new card from draw and adds it to the hand since its unique to the above condition.
      setHand([...hand, draw])
      // 4) this allows you to continue to draw a card as long as the hand is not equal to 52 outcomes which makes sense since a deck of cards has 52 total.
    } else if (hand.length !== 52) {
      // 5)continues to run the function drawcard as long as the total length of the hand is not 52
      drawCard()
      // 6) the catch all for if all outcomes have been dealt
    } else {
      // 7) alerts that all cards and outcomes have been used. and stops the game. 
      alert("All cards have been dealt.")
      setHand([])
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }



  return (
    <>
    <div className="body">
    <h1>Draw a Card</h1>
    <div className="button">
      <div className="drawbutton">
    <button onClick={drawCard}>Click to Draw a Card</button>
    </div>
    <div className="returnbutton">
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    </div>
    </div>
    <Card hand={hand} />
    </div>
    </>
  )

}
export default App
