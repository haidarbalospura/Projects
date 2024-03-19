let music = new Audio("resource/music.mp3")
music.volume = 0.4
let audioTurn = new Audio("resource/ting.mp3")
let gameOver = new Audio("resource/gameover.mp3")

let turnX = document.querySelector(".turn-x")
let turnO = document.querySelector(".turn-o")
let chooseTurn = document.querySelector(".chooseTurn")
let singleplayer = document.querySelector(".singleplayer")
let doubleplayer = document.querySelector(".doubleplayer")
let multiplay = document.querySelector(".multiplay")
let hover
let singlePlayerMode = false
let isGameStarted = false
let isgameover = false //to check the game is not over

music.play() //background music
music.loop = true //for non-stop music

window.addEventListener("DOMContentLoaded", () => {
  music.play() //background music
  music.loop = true //for non-stop music
})

let turn = "X"

turnX.addEventListener("click", () => {
  //this selects the X button
  turn = "X"
  chooseTurn.style.display = "none"
})
turnO.addEventListener("click", () => {
  //this selects the O button
  turn = "O"
  chooseTurn.style.display = "none"
  document.querySelector(".info").innerText = "Turn for " + turn // Add this line to update turn information for the first time when the o button was cliked
})

if (!singlePlayerMode) {
  doubleplayer.classList.add("doubleplayer-d")
}
singleplayer.addEventListener("click", () => {
  //for single player
  singlePlayerMode = true
  // chooseTurn.style.display = '';
  singleplayer.classList.add("singleplayer-s")
  doubleplayer.classList.remove("doubleplayer-d")
})

doubleplayer.addEventListener("click", () => {
  //for double player
  singlePlayerMode = false
  // chooseTurn.style.display = '';
  doubleplayer.classList.add("doubleplayer-d")
  singleplayer.classList.remove("singleplayer-s")
})

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext")
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && isgameover === false) {
      multiplay.style.display = "none"
      chooseTurn.style.display = "none"
      boxtext.innerText = turn
      turn = changeTurn()
      audioTurn.play()
      // Pause and reset audio to the beginning before playing
      audioTurn.pause()
      audioTurn.currentTime = 0
      audioTurn.play()
      checkWin()

      if (!isgameover) {
        document.querySelector(".info").innerText = singlePlayerMode
          ? "Turn for " + turn
          : "Turn for " + turn
        if (singlePlayerMode) {
          setTimeout(() => {
            computerTurn()
            checkWin()
            document.querySelector(".info").innerText = "Turn for " + turn
          }, 350) // Add a delay to make it more visible
        }
      }
    }
  })
})

const changeTurn = () => {
  let elements = document.querySelectorAll(".box")
  elements.forEach((element) => {
    // for hovering the turn symbole
    element.classList.remove("x-hover")
    element.classList.remove("o-hover")
  })
  return turn === "X" ? "O" : "X"
}

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext")
  let wins = [
    [0, 1, 2, 5, 5, 0, 5, 9.5, 0], // 0,1,2 represents the position of boxtext and the 5 5 0 is the position of the winner for styling the line and other is media query for making line
    [3, 4, 5, 5, 15, 0, 5, 29.5, 0],
    [6, 7, 8, 5, 25, 0, 5, 49.5, 0],
    [0, 3, 6, -5, 15, 90, -15, 30, 90, 5, 5, 0, 9.6, 5, 0], //90 means angle of the line
    [1, 4, 7, 5, 15, 90, 5, 30, 90, 15, 5, 0, 29.6, 5, 0],
    [2, 5, 8, 15, 15, 90, 25, 30, 90, 25, 5, 0, 49.6, 5, 0],
    [0, 4, 8, 0, 15, 46, 0, 30, 46, 60], //here the 30 is the width size of line cause of line size is small for rotaion mode
    [2, 4, 6, 0, 15, 315, 0, 30, 315, 60],
  ]
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won"
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px"
      if (e.length === 10) {
        if (screen.width < 951) {
          //this is the media query for making line
          document.querySelector(".line").style.width = "60vw"
          document.querySelector(
            ".line"
          ).style.transform = `translate(${e[6]}vw,${e[7]}vw) rotate(${e[8]}deg)`
        } else {
          document.querySelector(".line").style.width = "30vw"
          document.querySelector(
            ".line"
          ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
      } else {
        if (screen.width < 950) {
          if (e[8] === 90) {
            //this checks if the line angle is 90 or not
            document.querySelector(".vertical-line").style.height = "50vw"
            document.querySelector(
              ".vertical-line"
            ).style.transform = `translate(${e[12]}vw,${e[13]}vw) rotate(${e[14]}deg)`
          } else {
            document.querySelector(".line").style.width = "50vw"
            document.querySelector(
              ".line"
            ).style.transform = `translate(${e[6]}vw,${e[7]}vw) rotate(${e[8]}deg)`
          }
        } else {
          if (e[8] === 90) {
            document.querySelector(".vertical-line").style.height = "20vw"
            document.querySelector(
              ".vertical-line"
            ).style.transform = `translate(${e[9]}vw,${e[10]}vw) rotate(${e[11]}deg)`
          } else {
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(
              ".line"
            ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
          }
        }
      }

      gameOver.play()
      isgameover = true
    }
  })
}

//reset button used to reset the all thing of game
let reset = document.getElementById("reset")

reset.addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("boxtext")
  boxArray = Array.from(boxtext)
  boxArray.forEach((element) => {
    element.innerText = ""
  })
  isgameover = false
  turn = "X"

  chooseTurn.style.display = ""
  multiplay.style.display = ""
  document.querySelector(".info").innerText = "Turn for " + turn
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px"
  document.querySelector(".line").style.width = "0vw"
  document.querySelector(".vertical-line").style.height = "0vw"
})

//computerTurn function is used for single player mode and in single player mode this rendomly selects the box to play
function computerTurn() {
  let emptyBoxes = Array.from(boxes).filter(
    (element) => element.querySelector(".boxtext").innerText === ""
  )
  if (emptyBoxes.length > 0) {
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length)
    emptyBoxes[randomIndex].querySelector(".boxtext").innerText = turn
    turn = changeTurn()
    // Pause and reset audio to the beginning before playing
    audioTurn.pause()
    audioTurn.currentTime = 0
    audioTurn.play()
  }
}
//stop music button is used for pause or play the backround music
let stopMusic = document.querySelector(".button-83")
stopMusic.addEventListener("click", () => {
  // console.log('Stop music button clicked'); // Add this line for debugging
  if (stopMusic.innerHTML === "Stop Music") {
    music.pause()
    stopMusic.innerHTML = "Play Music"
  } else {
    music.play()
    stopMusic.innerHTML = "Stop Music"
  }
})
document.addEventListener("load", () => {
  music.play()
})

let hoverText = document.querySelectorAll(".box")

hoverText.forEach((element) => {
  element.addEventListener("mouseover", () => {
    hoverText.forEach((element) => {
      element.classList.remove("x-hover")
      element.classList.remove("o-hover")
    })
    hoverText.forEach((element) => {
      if (!isgameover) {
        if (element.innerText === "") {
          if (turn === "X") {
            element.classList.add("x-hover")
          } else {
            element.classList.add("o-hover")
          }
        }
      }
    })
  })
})

// https://www.google.com/fbx?fbx=tic_tac_toe
