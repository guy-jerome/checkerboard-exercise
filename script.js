const container = document.createElement("div")
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.margin = "20px";

const audio = document.createElement("audio")
audio.src = "trippy.mp3"

const playButton = document.createElement("button")
playButton.addEventListener("click",() => {audio.play()})

const pauseButton = document.createElement("button")
pauseButton.addEventListener("click",() => {audio.pause()})

const restartButton = document.createElement("button")
restartButton.addEventListener("click",() => {  audio.currentTime = 0;
  audio.play();})

document.body.style.backgroundColor = "black"
document.body.style.display ="flex"
document.body.style.flexDirection = "column"
document.body.style.alignItems ="center"

playButton.classList.add("button")
pauseButton.classList.add("button")
restartButton.classList.add("button")

playButton.textContent = "Play"
pauseButton.textContent = "Pause"
restartButton.textContent = "Restart"

document.body.appendChild(playButton)
document.body.appendChild(pauseButton)
document.body.appendChild(restartButton)

const buttons = document.querySelectorAll(".button")

buttons.forEach((button)=>{

  button.style.backgroundColor = "rgb(150,20,120)"
  button.style.width = "20vh"
  button.style.height ="5vh"
  button.style.marginLeft ="8vh"
  button.style.marginRight ="8vh"
  button.style.marginBottom ="1vh"
  button.style.border = ".5vh solid black"
  button.style.fontSize = "3vh"
})

function generateRandomColor(){
  
  return `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}

for (let i = 1; i <= 64; i++){
    const tile = document.createElement("div")
    tile.style.width = "12.5%"
    tile.style.height = "12.5%"
    tile.style.backgroundColor = generateRandomColor()
    container.appendChild(tile)
}
document.body.appendChild(container);

function changeColor(){
  for(let tile of container.children){
    tile.style.backgroundColor = generateRandomColor()
  }
}

setInterval(changeColor,2000)

