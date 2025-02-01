 // Show Second Page
 function showSecondPage() {
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
}

// Open Love Letter
function openLetter() {
    document.getElementById('secondPage').style.display = 'none';
    const letter = document.getElementById('letter');
    letter.style.display = 'block';

    // Add confetti effect
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
    }
}