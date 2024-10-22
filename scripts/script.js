let openButton = document.querySelector("header > button");
let closeButton = document.querySelector("header > nav > button");
// zoek de nav op
let deNav = document.querySelector("header > nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
    console.log('hoihoihoi');
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
closeButton.onclick = closeMenu;

// stap 3: voeg in de functie een class toe aan de nav
function closeMenu() {
  // voeg class toe aan nav
  deNav.classList.remove("toonMenu");
}


let video = document.querySelector("section:nth-of-type(1) video");
let playButton = document.querySelector("section:nth-of-type(1) button");

playButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
