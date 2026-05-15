function preguntarBola8() {

    // 1. Buscamos la caja de texto y extraemos el valor
    let cajaDeTexto = document.getElementById("pregunta-bola8");
    let pregunta = cajaDeTexto.value;

    // 2. Verificamos que no esté vacío
    if (pregunta.trim() !== "") {

        // 3. Convertimos la pregunta a minúsculas
        let textoMinusculas = pregunta.toLowerCase();

        // 4. Lista de palabras prohibidas
        let palabrasProhibidas = ["sapo", "perra", "coma mierda", "loca", "sapa", "que le importa?", "que le importa", "gay", "perro"] ;

        // 5. Verificamos si contiene groserías
        let esGrosero = palabrasProhibidas.some(palabra =>
            textoMinusculas.includes(palabra)
        );

        // 6. Si fue grosero
        if (esGrosero) {

            let mensajesGroseros = [
                "🛑 Uy, tranquilo/a. La Bola 8 no tiene la culpa de tus problemas.",
                "🤨 Oe, ¿todo bien en la casa o qué?",      
                "💀 Mi código acaba de perder la fe en la humanidad.",                        
                "⚠️ Cálmate, ni que yo te debiera plata.",             
                "💅 Esa grosería tuvo más esfuerzo que tus decisiones de vida.",            
                "📵 Tu grosería fue enviada exitosamente al basurero.",            
                "🤡 ¿Insultando una página? Parce, busca oficio."
            ];

            let randomGroseria = Math.floor(Math.random() * mensajesGroseros.length);

            alert(mensajesGroseros[randomGroseria]);

        } else {

            // 7. Respuestas normales
            let respuestas = [
                "En mi opinión, sí.",
                "Ni lo sueñes.",
                "Concéntrate y vuelve a preguntar.",
                "Las estrellas dicen que sí... pero yo no estaría tan seguro.",
                "Totalmente, es tu destino.",
                "Mejor no te lo digo ahora.",
                "¿Te das cuenta que yo solo soy un código?",
                "No soy Scooby Doo para andar resolviendo tus misterios.",
                "Yo diría que no, pero sé que no me vas a hacer caso.",
                "Tu nivel de fe me preocupa.",
                "Pregúntale a tu ex, yo qué voy a saber.",
                "Yo que tú iba apagando ilusiones.",
                "No sé qué esperabas que te dijera."
            ];

            let respuestaAzar = Math.floor(Math.random() * respuestas.length);

            alert(
                "🎱 Tu pregunta: " + pregunta +
                "\n\n✨ La Bola 8 dice: " + respuestas[respuestaAzar]
            );
        }

        // 8. Limpiar la caja de texto
        cajaDeTexto.value = "";

    } else {

        // Si no escribe nada
        alert("🙄 Escribe una pregunta primero. La Bola 8 no lee mentes… todavía.");
    }
}