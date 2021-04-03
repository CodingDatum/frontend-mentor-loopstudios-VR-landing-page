let creations = document.querySelectorAll(".creation");

let backgroundImages = [
    "url('images/desktop/image-deep-earth.jpg')",
    "url('images/desktop/image-night-arcade.jpg')",
    "url('images/desktop/image-soccer-team.jpg')",
    "url('images/desktop/image-grid.jpg')",
    "url('images/desktop/image-from-above.jpg')",
    "url('images/desktop/image-pocket-borealis.jpg')",
    "url('images/desktop/image-curiosity.jpg')",
    "url('images/desktop/image-fisheye.jpg')",
]

for(let i = 0 ; i < creations.length; i++){

    creations[i].style.backgroundImage = backgroundImages[i];

}
