from django.shortcuts import render
import random

# Temporary joke list for testing (no DB yet)
JOKES = [
    "Why don’t programmers like nature? It has too many bugs.",
    "Why do Python developers wear glasses? Because they don’t C#.",
    "How many programmers does it take to change a light bulb? None, that’s a hardware problem!",
    "Debugging is like being the detective in a crime movie where you are also the murderer."
]

def home(request):
    joke = random.choice(JOKES)  # Pick a random joke
    return render(request, 'jokes/home.html', {'joke': joke})
