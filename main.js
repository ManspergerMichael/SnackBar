window.addEventListener('online',() => {
    callNotification('Online', 'Online','&check;')
});

window.addEventListener('offline',() => {
    callNotification('Offline', 'Offline','&#x26A0')
});

function callNotification(type, statusText, iconHtml){
    const notification = document.getElementById('noteification');
    const status = document.getElementById('status');
    const icon = document.getElementById('icon');
    status.innerText = statusText;
    icon.innerHTML = iconHtml;

    notification.classList.remove('offline','online');

    notification.className = type;
}
