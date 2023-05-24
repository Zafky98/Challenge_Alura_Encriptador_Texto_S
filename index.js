function encriptar(){
    let text = document.getElementById("text").value;
    let tituloMsg = document.getElementById("titulo-msg");
    let parafo = document.getElementById("parrafo");
    let imagenes = document.getElementById("img");

    let textoCifrado = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if (text.length != 0) {
        document.getElementById("text").value = textoCifrado;
        tituloMsg.textContent = "Texto Encryptado con éxito";
        parafo.textContent = "";
        imagenes.src = "./img/encriptado.jpg";
    } else {
        imagenes.src = "./img/muñeco.png"
        tituloMsg.textContent = "Ningun mensaje fue encontrado";
        parafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}


function desencriptar(){
    let text = document.getElementById("text").value;
    let tituloMsg = document.getElementById("titulo-msg");
    let parafo = document.getElementById("parrafo");
    let imagenes = document.getElementById("img");

    let textoCifrado = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (text.length != 0) {
        document.getElementById("text").value = textoCifrado;
        tituloMsg.textContent = "Texto Desencryptado con éxito";
        parafo.textContent = "";
        imagenes.src = "./img/desencriptado.jpg";
    } else {
        imagenes.src = "./img/muñeco.png"
        tituloMsg.textContent = "Ningun mensaje fue encontrado";
        parafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
