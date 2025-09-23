document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully!');
    
    // Use the jokes from window.djangoJokes or fallback to default list
    const jokes = window.djangoJokes || [
        "Why don't programmers like nature? It has too many bugs.",
        "Why do Python developers wear glasses? Because they don't C#.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Debugging is like being the detective in a crime movie where you are also the murderer."
    ];

    console.log('Loaded jokes:', jokes.length);

    // Get DOM elements
    const jokeText = document.getElementById('joke');
    const newJokeBtn = document.getElementById('new-joke');
    const copyBtn = document.getElementById('copy-joke');
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const emoji = document.querySelector('.emoji');
    const container = document.querySelector('.container');

    // Check if required elements exist
    if (!jokeText || !newJokeBtn || !copyBtn || !toggleThemeBtn) {
        console.error('Required DOM elements not found');
        return;
    }

    // Theme management
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton();

    // Emoji variations
    const emojis = ['😂', '🤣', '😄', '😆', '👨‍💻', '💻', '⌨️', '🚀'];

    function getRandomJoke() {
        if (!jokes || jokes.length === 0) {
            return 'No jokes available!';
        }
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    function showNotification(message, type) {
        // Remove any existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(function(notification) {
            notification.remove();
        });

        const notification = document.createElement('div');
        notification.className = 'notification ' + (type || 'success');
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(function() {
            notification.classList.add('show');
        }, 100);

        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 2000);
    }

    function updateThemeButton() {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        if (toggleThemeBtn) {
            toggleThemeBtn.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
    }

    // New joke button event listener
    newJokeBtn.addEventListener('click', function() {
        console.log('New Joke button clicked');
        
        // Add loading state
        if (container) container.classList.add('loading');
        newJokeBtn.disabled = true;

        // Change emoji if available
        if (emoji) {
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        }
        
        // Fade out animation
        jokeText.style.opacity = '0';
        jokeText.style.transform = 'translateY(-10px)';

        setTimeout(function() {
            // Get new joke
            const randomJoke = getRandomJoke();
            jokeText.textContent = randomJoke;
            jokeText.classList.add('joke-update');

            // Fade in animation
            jokeText.style.opacity = '1';
            jokeText.style.transform = 'translateY(0)';

            // Remove loading state
            setTimeout(function() {
                if (container) container.classList.remove('loading');
                newJokeBtn.disabled = false;
                jokeText.classList.remove('joke-update');
            }, 300);
        }, 300);
    });

    // Copy joke button event listener
    copyBtn.addEventListener('click', function() {
        console.log('Copy button clicked');
        const text = jokeText.textContent || '';
        if (!text) {
            showNotification('❌ No joke to copy!', 'error');
            return;
        }

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(function() {
                showNotification('✅ Joke copied to clipboard!');
            }).catch(function(err) {
                console.error('Clipboard error:', err);
                showNotification('❌ Failed to copy joke', 'error');
            });
        } else {
            // Fallback for insecure contexts or older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                const successful = document.execCommand('copy');
                showNotification(successful ? '✅ Joke copied to clipboard!' : '❌ Failed to copy joke', successful ? 'success' : 'error');
            } catch (e) {
                console.error('Fallback copy error:', e);
                showNotification('❌ Failed to copy joke', 'error');
            } finally {
                document.body.removeChild(textarea);
            }
        }
    });

    // Toggle theme button event listener
    toggleThemeBtn.addEventListener('click', function() {
        console.log('Theme button clicked');
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton();
        
        showNotification('Switched to ' + newTheme + ' mode');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Space for new joke (but not when focused on input/textarea/button)
        if (e.code === 'Space' && !e.target.matches('input, textarea, button, a, [contenteditable]')) {
            e.preventDefault();
            console.log('Space pressed - getting new joke');
            newJokeBtn.click();
        }
        
        // Ctrl+C to copy (but only if not in an input field)
        if (e.ctrlKey && e.code === 'KeyC' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            console.log('Ctrl+C pressed - copying joke');
            copyBtn.click();
        }
        
        // Alt+D for dark mode
        if (e.altKey && e.code === 'KeyD') {
            e.preventDefault();
            console.log('Alt+D pressed - toggling theme');
            toggleThemeBtn.click();
        }
    });

    // Add interactive effects to joke text
    jokeText.addEventListener('mouseenter', function() {
        jokeText.style.transform = 'scale(1.02)';
    });

    jokeText.addEventListener('mouseleave', function() {
        jokeText.style.transform = 'scale(1)';
    });

    // Initialize with random emoji
    if (emoji) {
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    }

    console.log('Joke app initialized successfully!');
});