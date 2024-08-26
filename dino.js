//Saludo Inicial
let nombre = prompt("Ingresa tu nombre");

alert("¡Bienvenido" + " " + nombre + " "  + "al juego del Ahorcado");
alert("¡Comenzamos!")

//A Jugar!

function jugarAdivinaLaPalabra() {
    let palabraAleatoria = "river"; // palabra secreta a adivinar
    let errores = 0; // número de errores
    let maxerrores = 6; //limite de errores permitidos
    let largoPalabraAleatoria = palabraAleatoria.length; // cantidad de caracteres de la palabra
    let palabraCorrecta = "_".repeat(largoPalabraAleatoria); // espacio para guardar letras adivinadas y formar palabra secreta

    
    alert("La palabra a adivinar tiene " + largoPalabraAleatoria + " letras\n" + palabraCorrecta);

    let letrasAdivinadas = {}; // objeto para guardar letras adivinadas

    // Chequeo de letras adivinadas
    for (let i = 0; i < largoPalabraAleatoria; i++) {
        letrasAdivinadas[palabraAleatoria[i]] = false;
    }

    while (palabraCorrecta != palabraAleatoria && errores != 7) {
        let letra = prompt("Ingresa una letra").toLowerCase();

        // Verificar si la letra ya ha sido adivinada
        if (letrasAdivinadas[letra] !== undefined) {
            if (letrasAdivinadas[letra]) {
                alert("Ya has adivinado esta letra.");
                continue;
            }

            // Verificar si la letra está en la palabra
            let letraAdivinada = false;
            let nuevaPalabraCorrecta = "";

            for (let i = 0; i < largoPalabraAleatoria; i++) {
                if (palabraAleatoria[i] === letra) {
                    nuevaPalabraCorrecta += letra;
                    letraAdivinada = true;
                } else {
                    nuevaPalabraCorrecta += palabraCorrecta[i];
                } 
            }

            if (letraAdivinada) {
                palabraCorrecta = nuevaPalabraCorrecta;
                letrasAdivinadas[letra] = true;
                alert("La palabra contiene " + letra + "\n" + palabraCorrecta);
            }
        } else {
            alert("La palabra no contiene " + letra + ". Te quedan " + (maxerrores-errores) + " intentos.");
            errores++;
        }
    }
    if (palabraCorrecta === palabraAleatoria) {
        alert("¡Felicidades adivinaste! La palabra era: " + palabraAleatoria);
    } else{
        alert("Ahorcado! La palabra era: " + palabraAleatoria);
    }
    
}

jugarAdivinaLaPalabra();