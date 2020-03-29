const width = 800;
const height = width;
let numberSquares = 0
let counter = 0;


container = document.createElement(`div`)   // Creates main div
container.style.width = `${width}px`
container.style.heigth = `${height}px`
container.id = `main-container`             // Sets id for main div (main-container)

button = document.createElement("button");
button.innerHTML = "Do Something"

document.body.appendChild(button);
document.body.appendChild(container);       // Appends main div to body of HTML


function generateDivs() {
    counter = 0;
    numberSquares = promptUser();
    for (i = 0; i < numberSquares; i++) {
        for (j = 0; j < numberSquares; j++) {
            let subDiv = document.createElement(`div`);
            subDiv.id = "sub-div-id" + (j + i * numberSquares)
            subDiv.className = 'sub-div'
            subDiv.style.width = `${(width / numberSquares)}px`;
            subDiv.style.height = `${(height / numberSquares)}px`;
            container.appendChild(subDiv);
        }
    }
    setDivListener();
}

function setDivListener() {
    subDivs = document.querySelectorAll(`.sub-div`);
    subDivs.forEach(subDiv => subDiv.addEventListener(`mouseover`, colorSubDiv));
}

function colorSubDiv(e) {
    //counter++;
    //if (counter%10 == 0) {
    //    this.style.background = `black`;
    //} else {
    //    console.log(e)
    //    r = Math.round(Math.random() * 255);
    //    g = Math.round(Math.random() * 255);
    //    b = Math.round(Math.random() * 255);
    //    this.style.background = `rgb(${r},${g},${b})`;
    //}
    this.style.backgroundColor = `rgb(0,0,0)`
    this.style.opacity = Number(this.style.opacity) + 0.1;     
}

function clearGrid() {
    subDivs.forEach(subDiv => subDiv.remove());
    generateDivs();
}

function promptUser() {
    return prompt(`How many squares wide will your next Etch-A-Sketch be?`, `10`)
}

generateDivs();
button.addEventListener(`click`, clearGrid);