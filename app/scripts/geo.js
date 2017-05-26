if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        successHandler, // manejador de respuesta correcta
        function() {}, // manejado de errores
        {} // opciones
    );
}

function successHandler(data) {
    var coords = data.coords;
    console.log('Latitud', coords.latitude);
    console.log('Longitud', coords.longitude);
    console.log('Precisión', coords.accuracy);
    console.log('Altitud', coords.altitude);
    console.log('Precisión de altitud', coords.altitudeAccuracy);
    // The heading as degrees clockwise from North
    console.log('Preguntar a marinero', coords.heading);
    console.log('Velocidad', coords.speed);

    var API_KEY = 'AIzaSyBn5u0xWLAdN44j-pRNrax3HcOoQhFEm9s';
    var iframe = document.createElement('iframe');

    iframe.src = 'https://www.google.com/maps/embed/v1/place?key=' + API_KEY +
        '&q=' + coords.latitude + ',' + coords.longitude;
    iframe.width = '500';
    iframe.height = '500';

    document.getElementsByClassName('geo')[0].appendChild(iframe);
}
