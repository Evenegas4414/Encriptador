function revisar(evento) {
    teclaPresionada = (document.all) ? evento.keyCode : evento.which;
    if (teclaPresionada == 32 || teclaPresionada == 8) {
                return true;
    }
    patronAdmitido = /[A-Za-z0-9]/;
    teclaAdmitida = String.fromCharCode(teclaPresionada);
    return patronAdmitido.test(teclaAdmitida);
}

function encriptar(){
    var mensajeIngresado = document.getElementById("textarea-input").value;
    var texto = mensajeIngresado.replace(/e/igm, "enter");
    var texto = texto.replace(/i/igm, "imes");
    var texto = texto.replace(/a/igm, "ai");
    var texto = texto.replace(/o/igm, "ober");
    var texto = texto.replace(/u/igm, "ufat"); 
    document.getElementById("textarea-output").innerHTML = texto;
    document.getElementById("imagen").style.display = "none";
    document.getElementById("textos").style.display="none";
    document.getElementById("textarea-output").style.display = "block";
    document.getElementById("boton-copiar").style.display = "inherit";
}

function desencriptar(){
    var mensajeIngresado = document.getElementById("textarea-input").value;
    var texto = mensajeIngresado.replace(/imes/igm, "i");
    var texto = texto.replace(/ai/igm, "a");
    var texto = texto.replace(/enter/igm, "e");
    var texto = texto.replace(/ober/igm, "o");
    var texto = texto.replace(/ufat/igm, "u");
    document.getElementById("textarea-output").innerHTML = texto;
    document.getElementById("imagen").style.display = "none";
    document.getElementById("textos").style.display="none";
    document.getElementById("textarea-output").style.display = "block";
    document.getElementById("boton-copiar").style.display = "inherit";
}

function copiar(){
    var texto = document.getElementById("textarea-output");
    texto.select();
    navigator.clipboard.writeText(texto.value);
}