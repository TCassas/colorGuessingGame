var colores = [];
var cajas = document.querySelectorAll(".caja");
var colorElegidoTexto = document.getElementById("colorObjetivo").textContent = colores[Math.floor((Math.random() * colores.length))];
var h1 = document.getElementById("cabecera");
var h3 = document.getElementById("anuncio");
var reset = document.getElementById("resetear");
var dificultadFacil =  document.getElementById("facil");
var dificultadDificil = document.getElementById("dificil");
var dificultadCajas = 6;
var juegoGanado = false;

prepararCajasGeneral();

for(var j = 0; j < dificultadCajas; j++) {
    cajas[j].addEventListener("click", function() {
        if(juegoGanado === false) {
            if(this.style.backgroundColor === colorElegidoTexto) {
                h1.style.transition = "0.2s";
                h1.style.backgroundColor = colorElegidoTexto;
                this.classList.add("ganador");
                h3.textContent = "¡Ganaste!";
                juegoGanado = !juegoGanado;
                colorearTodasLasCajasGanador();
            } else {
                this.style.transition = "0.2s";
                this.style.opacity = "0";
                h3.textContent = "¡Seguí intentando!";
            }
        }
    });
}

reset.addEventListener("click", function() {
    prepararCajasGeneral();
    h3.textContent = "";
});

dificultadFacil.addEventListener("click", function() {
    this.classList.add("selected");
    dificultadDificil.classList.remove("selected");
    dificultadCajas = 3;
    prepararCajasGeneral();
});

dificultadDificil.addEventListener("click", function() {
    this.classList.add("selected");
    dificultadFacil.classList.remove("selected");
    dificultadCajas = 6;
    prepararCajasGeneral();
});

//-- Funciones --//

function colorAleatorio() {
    var rojo = Math.floor((Math.random() * 255) + 1);
    var verde = Math.floor((Math.random() * 255) + 1);
    var azul = Math.floor((Math.random() * 255) + 1);

    return "rgb(" + rojo + ", " + verde + ", " + azul + ")";
}

function prepararCajasGeneral() {
    elegirColores();

    for(var i = 0; i < dificultadCajas; i++) {
        cajas[i].style.backgroundColor = colores[i];
        cajas[i].classList.remove("ganador");
        cajas[i].style.opacity = "1";
    }

    if(dificultadCajas === 3) {
        for(var i = 3; i < 6; i++) {
            cajas[i].style.opacity = "0";
        }
    } else {
        for(var i = 3; i < 6; i++) {
            cajas[i].style.opacity = "1";
        }
    }

    colorElegidoTexto = document.getElementById("colorObjetivo").textContent = colores[Math.floor((Math.random() * dificultadCajas))];
    h1.style.backgroundColor = "#232350";

    juegoGanado = false;
}

function colorearTodasLasCajasGanador() {
    for(var i = 0; i < dificultadCajas; i++) {
        cajas[i].style.backgroundColor = colorElegidoTexto;
        cajas[i].style.opacity = "1";
    }
}

function elegirColores() {
    colores.length = 0;
    for(var i = 0; i < dificultadCajas; i++) {
        colores.push(colorAleatorio());
    }
}