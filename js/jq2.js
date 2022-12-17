$(function () {
    let personazas = $('#personazas');
    let kairen = $('#kairen');
    let desinen = $('#desinen');

    kairen.click(function () {
        personazas.css('left', '+=10px');
    });

    desinen.click(function () {
        personazas.css('left', '+=10px');
    });

    $(document).keydown(function (e) {
        console.log(e.keyCode);

        switch (e.keyCode) {
            case 37:
                personazas.css('left', '-=10px');
                break;
            case 39:
                personazas.css('left', '+=10px');
                break;
            case 38:
                personazas.css('top', '-=10px');
                break;
            case 40:
                personazas.css('top', '+=10px');
                break;
            default:
                break;
        }
    });
});