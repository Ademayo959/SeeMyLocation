const link = document.querySelector('a');


//Getting the Coordinates
navigator.geolocation.getCurrentPosition((result) =>{
    link.href = `https://www.google.com/maps/palce/${result.coords.latitude},${result.coords.longitude}`
})