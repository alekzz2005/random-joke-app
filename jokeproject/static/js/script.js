document.addEventListener("DOMContentLoaded", () => {
    const jokes = [
        "Why don’t programmers like nature? It has too many bugs.",
        "Why do Python developers wear glasses? Because they don’t C#.",
        "How many programmers does it take to change a light bulb? None, that’s a hardware problem!",
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
        "A SQL query walks into a bar, approaches two tables and asks: 'May I join you?'",
        "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
        "I told my computer I needed a break, and it said 'No problem, I’ll go to sleep.'",
        "Why was the developer broke? Because he used up all his cache."
    ];

    const jokeText = document.getElementById("joke");
    const newJokeBtn = document.getElementById("new-joke");

    newJokeBtn.addEventListener("click", () => {
        // Fade out
        jokeText.style.opacity = 0;

        setTimeout(() => {
            // Pick a random joke
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            jokeText.textContent = randomJoke;

            // Fade in
            jokeText.style.opacity = 1;
        }, 400);
    });
});
