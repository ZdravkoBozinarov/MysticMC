function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const serverIp = document.querySelector('.server-ip');
        serverIp.classList.add('copied');

        setTimeout(() => {
            serverIp.classList.remove('copied');
        }, 1000);
    });
}

document.querySelectorAll('.server-ip').forEach(el => {
    el.addEventListener('click', () => {
        const ip = el.querySelector('.ip-address').textContent.trim();
        navigator.clipboard.writeText(ip).then(() => {
            alert('MysticMC IP address copied! \nJoin Now!');
        }).catch(err => {
            alert('Failed to copy IP: ' + (err && err.message ? err.message : err));
        });
    });
});