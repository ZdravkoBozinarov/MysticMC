function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = 'MysticMC IP copied! Join Now!';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[onclick*="copyToClipboard"]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            copyToClipboard('play.mysticmc.net');
        });
    });

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