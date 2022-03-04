var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register("./sw.js")
        .then(() => {
            console.log('Service worker registered');
        });
}

/**
 * Deferring the banner
 */
window.addEventListener('beforeinstallpromt', function (event) {
    event.preventDefault();
    deferredPrompt = event;
    return false;
})