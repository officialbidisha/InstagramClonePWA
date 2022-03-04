var deferredPrompt;

if(!window.Promise){
     window.Promise = Promise
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register(
            "/sw.js"
        )
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

// fetch('https://httpbin.org/ip')
// .then(function(response){
//      console.log(response);
//      return response.json()
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//      console.log(err);
// })