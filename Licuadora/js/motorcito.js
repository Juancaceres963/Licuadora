var estadoLicuadora = 'apagada';
var sonidoLicuadora = document.getElementById('blander-sound');
var buttonLicuadora = document.getElementById('blender-button-sound');
var licuadora = document.getElementById('blender');

function controlarLicuadora() {
if (estadoLicuadora == 'apagada') {
    estadoLicuadora = 'encendida';
    hacerBrrBrr();
    licuadora.classList.add('active')
    console.log('me prendiste');
} else {
    estadoLicuadora = 'apagada'
    hacerBrrBrr();
    licuadora.classList.remove('active')
    console.log('me apagaste');
}
};

function hacerBrrBrr () {
    if (sonidoLicuadora.paused) {
        buttonLicuadora.play(); 
        sonidoLicuadora.play();
    } else {
        buttonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}