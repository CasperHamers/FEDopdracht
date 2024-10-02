var hamburgermenu = document.querySelector("header.button");
hamburgermenu.onclick = hamburgermenuklik;

function hamburgermenuklik() {
    if(hamburgermenu.ariaExpanded == "false") {
        hamburgermenu.ariaExpanded = "true"
    } else {
        hamburgermenu.ariaExpanded = "false"
    }
}
