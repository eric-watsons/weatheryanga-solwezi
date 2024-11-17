function updateOnlineStatus() {
    const isOnline = navigator.onLine;
    const offlineMessage = document.getElementById('offline-message');
    const snackbar = document.getElementById('snackbar');
    
    if (offlineMessage) {
        offlineMessage.style.display = isOnline ? 'none' : 'flex';
    }

    if (isOnline) {
        // Show the snackbar when connection is restored
        showSnackbar();
    }
}

function showSnackbar() {
    const snackbar = document.getElementById('snackbar');
    snackbar.className = "show";
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

// Initial check
updateOnlineStatus();

// Listen for online/offline events
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);