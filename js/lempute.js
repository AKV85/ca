var lemposBusena = true;

function toggleLempute() {
    let img = document.getElementById("lempute");

    if (lemposBusena) {
        keistiAtributus(img, 'off')
    } else {
        keistiAtributus(img, 'on')
    }
    lemposBusena = !lemposBusena;

}

function keistiAtributus(img, param) {

    img.src = '../img/lempute_' + param + '.png';

    let alt = 'Lempute ' + param;

    img.setAttribute("alt", alt);
}