let codigoA = "ai";
let codigoE = "enter";
let codigoI = "imes";
let codigoO = "ober";
let codigoU = "ufat";

function encriptar() {

    let texto = document.getElementById("texto-ingresado").value;
    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textoEncriptado += codigoA;
                break;
            case "e":
                textoEncriptado += codigoE;
                break;
            case "i":
                textoEncriptado += codigoI;
                break;
            case "o":
                textoEncriptado += codigoO;
                break;
            case "u":
                textoEncriptado += codigoU;
                break;
            default:
                textoEncriptado += texto[i];
        }
    }

    if (textoEncriptado.length != 0) {

        document.getElementById("texto-imagen").style.display = "none";

        document.getElementById("texto-mostrado").innerHTML = textoEncriptado;
        document.getElementById("texto-mostrado").style.display = "block";
        document.getElementById("boton-copiar").style.display = "block";
        
    }

}

function desincriptar() {

    let texto = document.getElementById("texto-ingresado").value;
    let textoDesincriptado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                if (texto.slice(i, i + codigoA.length) === codigoA) {
                    textoDesincriptado += "a";
                    i += codigoA.length - 1;
                } else {
                    textoDesincriptado += texto[i];
                }
                break;
            case "e":
                if (texto.slice(i, i + codigoE.length) === codigoE) {
                    textoDesincriptado += "e";
                    i += codigoE.length - 1;
                } else {
                    textoDesincriptado += texto[i];
                }
                break;
            case "i":
                if (texto.slice(i, i + codigoI.length) === codigoI) {
                    textoDesincriptado += "i";
                    i += codigoI.length - 1;
                } else {
                    textoDesincriptado += texto[i];
                }
                break;
            case "o":
                if (texto.slice(i, i + codigoO.length) === codigoO) {
                    textoDesincriptado += "o";
                    i += codigoO.length - 1;
                } else {
                    textoDesincriptado += texto[i];
                }
                break;
            case "u":
                if (texto.slice(i, i + codigoU.length) === codigoU) {
                    textoDesincriptado += "u";
                    i += codigoU.length - 1;
                } else {
                    textoDesincriptado += texto[i];
                }
                break;
            default:
                textoDesincriptado += texto[i];
        }
    }

    if (textoDesincriptado.length != 0) {

        document.getElementById("texto-imagen").style.display = "none";

        document.getElementById("texto-mostrado").innerHTML = textoDesincriptado;
        document.getElementById("texto-mostrado").style.display = "block";
        document.getElementById("boton-copiar").style.display = "block";

    }


}

function copiar() {

    let text = document.getElementById("texto-mostrado").innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

}