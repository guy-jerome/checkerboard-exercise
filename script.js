const container = document.createElement("div")
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

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