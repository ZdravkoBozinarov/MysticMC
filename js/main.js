function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast notification
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = 'MysticMC IP copied! Join Now!';
        document.body.appendChild(toast);

        // Add the show class after a small delay to trigger the animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Remove the toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Add click handlers to all elements with copy functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle all elements with onclick="copyToClipboard('play.mysticmc.net')"
    document.querySelectorAll('[onclick*="copyToClipboard"]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            copyToClipboard('play.mysticmc.net');
        });
    });

    // Handle play now buttons
    document.querySelectorAll('.play-now').forEach(el => {
        el.addEventListener('click', () => {
            copyToClipboard('play.mysticmc.net');
        });
    });

    const copyableElements = document.querySelectorAll('[onclick*="copyToClipboard"], .play-now');
    copyableElements.forEach(el => {
        el.style.cursor = 'pointer';
    });
});