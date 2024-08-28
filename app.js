// Seleccionamos los elementos del DOM donde el usuario ingresa y recibe el texto.
const textArea = document.querySelector("#textoIngresado");
const mensaje = document.querySelector("#textoSalida"); 

// Función que se ejecuta cuando se presiona el botón de "Encriptar"
function botonEncriptar() {
    // Llamamos a la función encriptar() pasando el texto ingresado por el usuario
    const textoEncriptado = encriptar(textArea.value);
    // Mostramos el texto encriptado en el área de salida y limpiamos el área de entrada
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

// Función para encriptar el texto según la matriz de codificación definida
function encriptar(stringEncriptada) {
    // Matriz de codificación: cada vocal tiene su correspondiente código de reemplazo
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    console.table(matrizCodigo); // Mostrar la matriz en la consola para fines de depuración
    stringEncriptada = stringEncriptada.toLowerCase(); // Convertimos el texto a minúsculas

    // Iteramos sobre la matriz de codificación para reemplazar cada vocal en el texto
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            // Reemplazamos todas las ocurrencias de la vocal por su correspondiente código
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada; // Retornamos el texto encriptado
}

// Función que se ejecuta cuando se presiona el botón de "Desencriptar"
function botonDesencriptar() {
    // Llamamos a la función desencriptar() pasando el texto ingresado por el usuario
    const textoEncriptado = desencriptar(textArea.value);
    // Mostramos el texto desencriptado en el área de salida y limpiamos el área de entrada
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

// Función para desencriptar el texto según la matriz de codificación definida
function desencriptar(stringDesencriptada) {
    // Usamos la misma matriz de codificación, pero invertimos el proceso
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    console.table(matrizCodigo); // Mostrar la matriz en la consola para fines de depuración
    stringDesencriptada = stringDesencriptada.toLowerCase(); // Convertimos el texto a minúsculas
    
    // Iteramos sobre la matriz de codificación para reemplazar cada código con su vocal original
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            // Reemplazamos todas las ocurrencias del código por la vocal correspondiente
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada; // Retornamos el texto desencriptado
}

// Función que se ejecuta cuando se presiona el botón de "Copiar"
function botonCopiar() {
    // Llamamos a la función para copiar el texto desencriptado al portapapeles
    copiarPortapapeles();
}

// Función para copiar el texto al portapapeles usando la API Clipboard
function copiarPortapapeles() {
    navigator.clipboard.writeText(mensaje.value); // Copiamos el contenido del área de salida
    alert('¡Tu texto fue copiado con exito!'); // Mostramos un mensaje de confirmación al usuario
}
