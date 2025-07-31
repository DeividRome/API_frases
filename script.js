// Fallback quotes - no API requests needed
let quotes = [];

// DOM elements
const quoteElement = document.querySelector('.quote');
const newQuoteButton = document.getElementById('new-quote');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeFallbackQuotes();
    newQuoteButton.addEventListener('click', displayRandomQuote);
});

// Initialize with fallback quotes
function initializeFallbackQuotes() {
    showLoading();
    
    // Set up fallback quotes
    const fallbackQuotes = [
         {
            text: "La única forma de hacer un gran trabajo es amar lo que haces.",
            author: "Steve Jobs"
        },
        {
            text: "La vida es lo que te pasa mientras estás ocupado haciendo otros planes.",
            author: "John Lennon"
        },
        {
            text: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Al final, no recordaremos las palabras de nuestros enemigos, sino el silencio de nuestros amigos.",
            author: "Martin Luther King Jr."
        },
        {
            text: "El único viaje imposible es el que nunca se empieza.",
            author: "Tony Robbins"
        },
    {
        text: "El único viaje imposible es el que nunca se empieza.",
        author: "Tony Robbins"
    },
    {
        text: "El secreto para salir adelante es empezar.",
        author: "Mark Twain"
    },
    {
        text: "Si puedes soñarlo, puedes hacerlo.",
        author: "Walt Disney"
    },
    {
        text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        author: "Robert Collier"
    },
    {
        text: "No cuentes los días, haz que los días cuenten.",
        author: "Muhammad Ali"
    },
    {
        text: "Cree que puedes y ya estás a medio camino.",
        author: "Theodore Roosevelt"
    },
    {
        text: "La mejor forma de predecir el futuro es crearlo.",
        author: "Peter Drucker"
    },
    {
        text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        author: "John Lennon"
    },
    {
        text: "La única forma de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs"
    },
    {
        text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        author: "Albert Schweitzer"
    },
    {
        text: "La única persona que estás destinado a ser es la persona que decides ser.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Empieza donde estás. Usa lo que tienes. Haz lo que puedes.",
        author: "Arthur Ashe"
    },
    {
        text: "No he fallado. He encontrado 10.000 maneras que no funcionan.",
        author: "Thomas Edison"
    },
    {
        text: "El cambio es la única constante en la vida.",
        author: "Heráclito"
    },
    {
        text: "Si no te gusta el camino, construye uno nuevo.",
        author: "Anónimo"
    },
    {
        text: "El optimismo es la fe que conduce al logro.",
        author: "Helen Keller"
    },
    {
        text: "El fracaso es el condimento que da sabor al éxito.",
        author: "Truman Capote"
    },
    {
        text: "No mires el reloj; haz lo que hace. Sigue avanzando.",
        author: "Sam Levenson"
    },
    {
        text: "La acción es la clave fundamental para todo éxito.",
        author: "Pablo Picasso"
    },
    {
        text: "El coraje es la resistencia al miedo, el dominio del miedo, no la ausencia del miedo.",
        author: "Mark Twain"
    },
    {
        text: "Lo que no te mata te hace más fuerte.",
        author: "Friedrich Nietzsche"
    },
    {
        text: "La mejor venganza es un éxito masivo.",
        author: "Frank Sinatra"
    },
    {
        text: "Los sueños no funcionan a menos que tú lo hagas.",
        author: "John C. Maxwell"
    },
    {
        text: "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente iguales.",
        author: "Colin R. Davis"
    },
    {
        text: "La felicidad no es algo ya hecho. Viene de tus propias acciones.",
        author: "Dalai Lama"
    },
    {
        text: "Nunca es demasiado tarde para ser quien podrías haber sido.",
        author: "George Eliot"
    },
    {
        text: "La vida es un 10% lo que te pasa y un 90% cómo reaccionas a ello.",
        author: "Charles R. Swindoll"
    },
    {
        text: "El único límite a nuestra realización de mañana serán nuestras dudas de hoy.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "La vida es 100% mejor cuando eres feliz.",
        author: "Anónimo"
    },
    {
        text: "No dejes que el miedo a perder sea mayor que la emoción de ganar.",
        author: "Robert Kiyosaki"
    },
    {
        text: "La paciencia es la clave del éxito.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "El conocimiento es poder.",
        author: "Francis Bacon"
    },
    {
        text: "El valor de una idea radica en su uso.",
        author: "Thomas Edison"
    },
    {
        text: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Sé el cambio que quieres ver en el mundo.",
        author: "Mahatma Gandhi"
    },
    {
        text: "La motivación nos impulsa a empezar y el hábito nos permite continuar.",
        author: "Jim Ryun"
    },
    {
        text: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        author: "Winston Churchill"
    },
    {
        text: "La disciplina es el puente entre las metas y los logros.",
        author: "Jim Rohn"
    },
    {
        text: "El éxito consiste en hacer cosas ordinarias extraordinariamente bien.",
        author: "Jim Rohn"
    },
    {
        text: "No esperes el momento perfecto. Toma el momento y hazlo perfecto.",
        author: "Anónimo"
    },
    {
        text: "La felicidad no es un destino, es una forma de vida.",
        author: "Anónimo"
    },
    {
        text: "Todo lo que puedas imaginar es real.",
        author: "Pablo Picasso"
    },
    {
        text: "La creatividad es la inteligencia divirtiéndose.",
        author: "Albert Einstein"
    },
    {
        text: "El valor de la vida no está en cuánto tiempo has vivido, sino en cuán intensamente lo has hecho.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Cae siete veces y levántate ocho.",
        author: "Proverbio japonés"
    },
    {
        text: "El que no arriesga no gana.",
        author: "Proverbio"
    },
    {
        text: "El ayer es historia, el mañana es un misterio, pero el hoy es un regalo. Por eso se llama presente.",
        author: "Maestro Oogway"
    },
    {
        text: "Si buscas resultados distintos, no hagas siempre lo mismo.",
        author: "Albert Einstein"
    },
    {
        text: "El éxito no es definitivo, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
        author: "Winston Churchill"
    },
    {
        text: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        author: "Vidal Sassoon"
    },
    {
        text: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
        author: "Proverbio chino"
    },
    {
        text: "No importa lo lento que vayas, siempre y cuando no te detengas.",
        author: "Confucio"
    },
    {
        text: "Lo que la mente del hombre puede concebir y creer, la mente del hombre puede lograr.",
        author: "Napoleon Hill"
    },
    {
        text: "La suerte es lo que sucede cuando la preparación y la oportunidad se encuentran.",
        author: "Séneca"
    },
    {
        text: "La vida es una oportunidad, aprovéchala.",
        author: "Madre Teresa de Calcuta"
    },
    {
        text: "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.",
        author: "Jimmy Johnson"
    },
    {
        text: "Si la oportunidad no llama, construye una puerta.",
        author: "Milton Berle"
    },
    {
        text: "No te rindas, que la vida es eso, continuar el viaje.",
        author: "Mario Benedetti"
    },
    {
        text: "La victoria más grande es la que se gana a uno mismo.",
        author: "Anónimo"
    },
    {
        text: "Sé tú mismo. Todos los demás ya están ocupados.",
        author: "Oscar Wilde"
    },
    {
        text: "El arte de la vida consiste en hacer de la vida una obra de arte.",
        author: "Havelock Ellis"
    },
    {
        text: "La perseverancia es el trabajo duro que haces después de cansarte del trabajo duro que ya hiciste.",
        author: "Newt Gingrich"
    },
    {
        text: "El genio es 1% de inspiración y 99% de transpiración.",
        author: "Thomas Edison"
    },
    {
        text: "El futuro pertenece a los competentes. Consíguelo.",
        author: "Walt Disney"
    },
    {
        text: "La felicidad no es una estación a la que se llega, sino un modo de viajar.",
        author: "Margaret Lee Runbeck"
    },
    {
        text: "La vida es una aventura audaz o no es nada en absoluto.",
        author: "Helen Keller"
    },
    {
        text: "La clave del éxito es la acción, y la acción es el primer paso hacia el éxito.",
        author: "Pablo Picasso"
    },
    {
        text: "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.",
        author: "William Arthur Ward"
    },
    {
        text: "El camino al éxito es la actitud.",
        author: "Winston Churchill"
    },
    {
        text: "Un viaje de mil millas comienza con un solo paso.",
        author: "Lao Tse"
    },
    {
        text: "La calidad no es un acto, es un hábito.",
        author: "Aristóteles"
    },
    {
        text: "El ayer no es nuestro para recuperar, pero el mañana es nuestro para ganar o perder.",
        author: "Lyndon B. Johnson"
    },
    {
        text: "Sé la mejor versión de ti mismo.",
        author: "Anónimo"
    },
    {
        text: "No vivas la misma vida 75 veces y la llames vida.",
        author: "Robin Sharma"
    },
    {
        text: "El poder de la imaginación nos hace infinitos.",
        author: "John Muir"
    },
    {
        text: "Cada día es una nueva oportunidad para ser mejor.",
        author: "Anónimo"
    },
    {
        text: "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote.",
        author: "Albert Einstein"
    },
    {
        text: "El éxito no es el final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
        author: "Winston Churchill"
    },
    {
        text: "La vida es demasiado corta para no ser feliz.",
        author: "Anónimo"
    },
    {
        text: "No te rindas. La vida es difícil, pero vale la pena.",
        author: "Anónimo"
    },
    {
        text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        author: "Robert Collier"
    },
    {
        text: "El único modo de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs"
    },
    {
        text: "Si la vida te da limones, haz limonada.",
        author: "Anónimo"
    },
    {
        text: "Tu tiempo es limitado, no lo malgastes viviendo la vida de alguien más.",
        author: "Steve Jobs"
    },
    {
        text: "La vida es un regalo, no un derecho.",
        author: "Anónimo"
    },
    {
        text: "El camino hacia el éxito es el camino hacia la felicidad.",
        author: "Anónimo"
    },
    {
        text: "La vida es una oportunidad, aprovéchala.",
        author: "Madre Teresa de Calcuta"
    },
    {
        text: "El éxito es el resultado de la perfección, el trabajo duro, el aprendizaje del fracaso, la lealtad y la persistencia.",
        author: "Colin Powell"
    },
    {
        text: "La gente a menudo dice que la motivación no dura. Bueno, tampoco lo hace el baño. Por eso lo recomendamos a diario.",
        author: "Zig Ziglar"
    },
    {
        text: "Nunca te quejes de lo que no tienes, sé agradecido por lo que tienes.",
        author: "Anónimo"
    },
    {
        text: "El éxito es la capacidad de ir de fracaso en fracaso sin perder el entusiasmo.",
        author: "Winston Churchill"
    },
    {
        text: "No dejes que el miedo te paralice.",
        author: "Anónimo"
    },
    {
        text: "El éxito es un viaje, no un destino.",
        author: "Arthur Ashe"
    },
    {
        text: "El mejor momento para empezar a cambiar tu vida es ahora.",
        author: "Anónimo"
    },
    {
        text: "La felicidad es un viaje, no un destino.",
        author: "Anónimo"
    },
    {
        text: "La vida es un espejo que te refleja lo que eres.",
        author: "Anónimo"
    },
    {
        text: "La vida es un regalo, no un derecho.",
        author: "Anónimo"
    },
    {
        text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        author: "Robert Collier"
    },
    {
        text: "La vida es 100% mejor cuando eres feliz.",
        author: "Anónimo"
    },
    {
        text: "El éxito es la mejor venganza.",
        author: "Frank Sinatra"
    },
    {
        text: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        author: "Vidal Sassoon"
    },
    {
        text: "No te rindas, que la vida es eso, continuar el viaje.",
        author: "Mario Benedetti"
    },
    {
        text: "La felicidad no es algo ya hecho. Viene de tus propias acciones.",
        author: "Dalai Lama"
    },
    {
        text: "Si puedes soñarlo, puedes hacerlo.",
        author: "Walt Disney"
    },
    {
        text: "La única persona que estás destinado a ser es la persona que decides ser.",
        author: "Ralph Waldo Emerson"
    }
    ];
    
    quotes = fallbackQuotes;
    displayRandomQuote();
}

// Display a random quote
function displayRandomQuote() {
    if (quotes.length === 0) {
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // Animate quote change
    quoteElement.style.opacity = '0';
    quoteElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        let quoteText = quote.text || '';
        const author = quote.author || 'Unknown';
        
        // Clean up the quote text
        quoteText = quoteText.replace(/^"|"$/g, ''); // Remove quotes at start/end
        
        // Display quote with author
        if (author && author !== 'Unknown' && author !== 'null') {
            quoteElement.innerHTML = `"${quoteText}"<br><br><em>— ${author}</em>`;
        } else {
            quoteElement.innerHTML = `"${quoteText}"`;
        }
        
        // Animate quote in
        quoteElement.style.opacity = '1';
        quoteElement.style.transform = 'translateY(0)';
        
        hideLoading();
    }, 300);
}

// Show loading state
function showLoading() {
    quoteElement.classList.add('Cargando');
    newQuoteButton.disabled = true;
    newQuoteButton.textContent = 'Cargando...';
}

// Hide loading state
function hideLoading() {
    quoteElement.classList.remove('Cargando');
    newQuoteButton.disabled = false;
    newQuoteButton.textContent = 'Nueva Frase';
}

// Add some interactive effects
newQuoteButton.addEventListener('mouseenter', () => {
    if (!newQuoteButton.disabled) {
        newQuoteButton.style.transform = 'scale(1.05)';
    }
});

newQuoteButton.addEventListener('mouseleave', () => {
    if (!newQuoteButton.disabled) {
        newQuoteButton.style.transform = 'scale(1)';
    }
});

// Keyboard shortcut for new quote (spacebar)
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !newQuoteButton.disabled) {
        event.preventDefault();
        displayRandomQuote();
    }
});
