function handleClick() {
    const img = document.createElement('img');
    img.src = "./sajal-photo.png";
    img.alt = "sajal's photo";
    document.getElementById('img-container').appendChild(img);
}

function handleHideClick() {
    document.getElementById('img-container').innerHTML = "";
}
