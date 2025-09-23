document.addEventListener("DOMContentLoaded", () => {
    const jokes = [
        "Why don't programmers like nature? It has too many bugs.",
        "Why do Python developers wear glasses? Because they don't C#.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
        "A SQL query walks into a bar, approaches two tables and asks: 'May I join you?'",
        "There are only 10 kinds of people in this world: those who know binary and those who don't.",
        "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'",
        "Why was the developer broke? Because he used up all his cache.",
        "Why do Java developers wear glasses? Because they can't C#!",
        "I would tell you a joke about UDP, but you might not get it.",
        "There are two hard problems in computer science: caching, naming things, and off-by-one errors.",
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "Why don’t oysters donate to charity? Because they’re shellfish.",
        "Why can’t you trust stairs? They’re always up to something.",
        "I’m reading a book on anti-gravity. It’s impossible to put down.",
        "Why don’t eggs tell jokes? They’d crack each other up.",
        "Parallel lines have so much in common… it’s a shame they’ll never meet.",
        "I used to play piano by ear, but now I use my hands.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "I would avoid the sushi if I were you. It’s a little fishy.",
        "Why can’t your nose be 12 inches long? Because then it would be a foot.",
        "What do you call fake spaghetti? An impasta.",
        "Want to hear a joke about construction? I’m still working on it.",
        "Why don’t some couples go to the gym? Because some relationships don’t work out.",
        "I only know 25 letters of the alphabet. I don’t know y.",
        "Why did the coffee file a police report? It got mugged.",
        "Why did the stadium get hot after the game? All the fans left.",
        "What do you call cheese that isn’t yours? Nacho cheese.",
        "Why was the math book sad? It had too many problems.",
        "What do you call a factory that makes okay products? A satisfactory.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "Why was the belt arrested? It was holding up a pair of pants.",
        "Why did the tomato blush? Because it saw the salad dressing.",
        "What do you call a fish wearing a bowtie? Sofishticated.",
        "Why don’t elephants use computers? They’re afraid of the mouse.",
        "What do you call a lazy kangaroo? A pouch potato.",
        "Why was the broom late? It swept in.",
        "Why don’t seagulls fly over the bay? Because then they’d be bagels.",
        "Why did the cookie go to the doctor? It felt crumby.",
        "What kind of shoes do ninjas wear? Sneakers.",
        "What do you call a can opener that doesn’t work? A can’t opener.",
        "Why don’t cows wear shoes? Because they lactose.",
        "What do you call a sleeping bull? A bulldozer.",
        "What kind of tree fits in your hand? A palm tree.",
        "Why can’t you give Elsa a balloon? Because she’ll let it go.",
        "How does the ocean say hi? It waves.",
        "Why can’t basketball players go on vacation? They would get called for traveling.",
        "Why don’t scientists trust atoms? Because they make up everything.",
        "Why did the computer go to therapy? Too many bytes of sadness.",
        "What do you call two birds in love? Tweethearts.",
        "What did one wall say to the other wall? I’ll meet you at the corner.",
        "Why don’t some fish play piano? Because you can’t tuna fish.",
        "Why did the bicycle fall over? It was two tired.",
        "What do you call a bear with no teeth? A gummy bear.",
        "What kind of music do mummies like? Wrap music.",
        "Why don’t vampires go in the sun? It’s a pain in the neck.",
        "What’s brown and sticky? A stick.",
        "Why did the computer show up late? It had a hard drive.",
        "What do you call a dog magician? A labracadabrador.",
        "Why did the chicken join a band? Because it had the drumsticks.",
        "Why did the orange stop? It ran out of juice.",
        "What’s a skeleton’s least favorite room in the house? The living room.",
        "Why can’t your hand be 12 inches long? Because then it would be a foot.",
        "What do you call a snowman with a six-pack? An abdominal snowman.",
        "Why did the duck get a ticket? For quacking the speed limit.",
        "What kind of key opens a banana? A monkey.",
        "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
        "Why can’t you trust atoms? They literally make up everything.",
        "Why was the computer cold? It left its Windows open.",
        "What did the janitor say when he jumped out of the closet? Supplies!",
        "Why did the barber win the race? He knew all the shortcuts.",
        "Why did the computer go to the doctor? It caught a virus.",
        "Why did the banana go to the doctor? It wasn’t peeling well.",
        "Why did the student eat his homework? Because his teacher said it was a piece of cake.",
        "What kind of shoes do bananas wear? Slippers.",
        "What did the grape do when it got stepped on? Nothing, it just let out a little wine.",
        "Why did the skeleton go to the party alone? Because he had no body to go with.",
        "What do you call an alligator in a vest? An investigator.",
        "Why did the music teacher go to the principal’s office? She found herself in treble.",
        "What did the ocean say to the beach? Nothing, it just waved.",
        "What do you call a pile of cats? A meowtain.",
        "Why did the computer keep sneezing? It had a bad case of Windows.",
        "What do you call a cow with no legs? Ground beef.",
        "Why don’t scientists trust stairs? Because they’re always up to something.",
        "Why did the man put his money in the freezer? He wanted cold hard cash.",
        "Why don’t some fish go to school? Because they’re afraid of the net.",
        "What do you call a boomerang that doesn’t come back? A stick.",
        "Why was the calendar nervous? Its days were numbered.",
        "Why did the grape stop in the middle of the road? Because it ran out of juice.",
        "What’s a cat’s favorite color? Purr-ple.",
        "Why did the chicken sit on the egg? To keep it warm.",
        "Why did the dog sit in the shade? Because he didn’t want to be a hot dog.",
        "Why did the skeleton stay calm? Nothing gets under his skin.",
        "What do you call a sleeping T-Rex? A dino-snore.",
        "Why don’t crabs donate? Because they’re shellfish.",
        "What do you call a fish without eyes? Fsh.",
        "Why did the stadium light go out? It was too tired.",
        "Why don’t koalas count as bears? They don’t have the right koalafications.",
        "Why did the cow go to space? To see the moooon.",
        "Why don’t some couples argue? Because they’re on the same wavelength.",
        "What do you call a sheep with no legs? A cloud.",
        "Why don’t sharks eat clowns? Because they taste funny.",
        "Why did the belt break up with the pants? It couldn’t handle the pressure.",
        "What did the zero say to the eight? Nice belt!",
        "Why did the mushroom go to the party? Because he was a fun guy.",
        "Why don’t ducks ever grow up? Because they quack up too much."
    ];


    const jokeText = document.getElementById("joke");
    const newJokeBtn = document.getElementById("new-joke");
    const copyBtn = document.getElementById("copy-joke");
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const emoji = document.querySelector(".emoji");
    const container = document.querySelector(".container");

    // Theme management
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton();

    // Emoji variations
    const emojis = ["😂", "🤣", "😄", "😆", "👨‍💻", "💻", "⌨️", "🚀"];

    function getRandomJoke() {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function updateThemeButton() {
        const theme = document.documentElement.getAttribute('data-theme');
        toggleThemeBtn.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    // New joke button
    newJokeBtn.addEventListener("click", async () => {
        // Add loading state
        container.classList.add('loading');
        newJokeBtn.disabled = true;

        // Change emoji
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Fade out animation
        jokeText.style.opacity = '0';
        jokeText.style.transform = 'translateY(-10px)';

        await new Promise(resolve => setTimeout(resolve, 300));

        // Get new joke
        const randomJoke = getRandomJoke();
        jokeText.textContent = randomJoke;
        jokeText.classList.add('joke-update');

        // Fade in animation
        jokeText.style.opacity = '1';
        jokeText.style.transform = 'translateY(0)';

        // Remove loading state
        setTimeout(() => {
            container.classList.remove('loading');
            newJokeBtn.disabled = false;
            jokeText.classList.remove('joke-update');
        }, 300);
    });

    // Copy joke button
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(jokeText.textContent).then(() => {
            showNotification('✅ Joke copied to clipboard!');
        }).catch(() => {
            showNotification('❌ Failed to copy joke', 'error');
        });
    });

    // Toggle dark/light theme
    toggleThemeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton();
        
        showNotification(`Switched to ${newTheme} mode`);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            newJokeBtn.click();
        }
        
        if (e.ctrlKey && e.code === 'KeyC') {
            e.preventDefault();
            copyBtn.click();
        }
        
        if (e.code === 'KeyD' && e.altKey) {
            e.preventDefault();
            toggleThemeBtn.click();
        }
    });

    // Add some interactive effects
    jokeText.addEventListener('mouseenter', () => {
        jokeText.style.transform = 'scale(1.02)';
    });

    jokeText.addEventListener('mouseleave', () => {
        jokeText.style.transform = 'scale(1)';
    });

    // Initialize with random emoji
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
});