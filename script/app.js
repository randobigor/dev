document.addEventListener('DOMContentLoaded', () => {
    console.log('Page successfully loaded!')
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
})