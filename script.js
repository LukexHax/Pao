window.addEventListener('click', (event) => {
    createHeart(event);
});

window.addEventListener('touchstart', (event) => {
    // Only prevent default behavior for heart animation, not scrolling or zooming
    if (event.target === document.body) {
        event.preventDefault();  // Prevents default behavior only when touching the body
        createHeart(event);
    }
});

function createHeart(event) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // For touch events, calculate the position using touch coordinates
    const x = event.type === 'touchstart' ? event.touches[0].pageX : event.pageX;
    const y = event.type === 'touchstart' ? event.touches[0].pageY : event.pageY;

    heart.style.left = `${x - 15}px`;
    heart.style.top = `${y - 15}px`;

    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}
