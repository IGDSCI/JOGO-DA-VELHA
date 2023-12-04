var imagem1 = document.getElementById('img1')
var imagem2 = document.getElementById('img2')
var imagem3 = document.getElementById('img3')

var imagem4 = document.getElementById('img4')
var imagem5 = document.getElementById('img5')
var imagem6 = document.getElementById('img6')

var imagem7 = document.getElementById('img7')
var imagem8 = document.getElementById('img8')
var imagem9 = document.getElementById('img9')

var jogador = document.getElementById('jogador')
var contador = 1;


document.getElementById("img1").addEventListener("click", mudarImagemDeFundo1);
document.getElementById("img2").addEventListener("click", mudarImagemDeFundo2);
document.getElementById("img3").addEventListener("click", mudarImagemDeFundo3);

document.getElementById("img4").addEventListener("click", mudarImagemDeFundo4);
document.getElementById("img5").addEventListener("click", mudarImagemDeFundo5);
document.getElementById("img6").addEventListener("click", mudarImagemDeFundo6);

document.getElementById("img7").addEventListener("click", mudarImagemDeFundo7);
document.getElementById("img8").addEventListener("click", mudarImagemDeFundo8);
document.getElementById("img9").addEventListener("click", mudarImagemDeFundo9);


function mudarImagemDeFundo1() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem1.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem1.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if (imagem1.src == "http://127.0.0.1:5500/Campo_neutro.png") {
        imagem1.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo2() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem2.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem2.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem2.src == "http://127.0.0.1:5500/Campo_neutro.png") {
        imagem2.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo3() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem3.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem3.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem3.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem3.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo4() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem4.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem4.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem4.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem4.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo5() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem5.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem5.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem5.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem5.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo6() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem6.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem6.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem6.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem6.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo7() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem7.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem7.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem7.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem7.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo8() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem8.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem8.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem8.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem8.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}

function mudarImagemDeFundo9() {
    contador = contador + 1
    if (contador % 2 == 0 && imagem9.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem9.src = "Campo_X.png"
        jogador.innerHTML = 'É a vez do jogador O'
    } else if(imagem9.src == "http://127.0.0.1:5500/Campo_neutro.png"){
        imagem9.src = "Campo_O.png"
        jogador.innerHTML = 'É a vez do jogador X'
    }
}