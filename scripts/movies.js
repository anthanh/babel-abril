'use strict';

(function() {

    window.service.photo.getPhotos().then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<article><img src="' + response.url + '" alt="' +
                response.title + '"><h3>' + response.title + '</h3><p>lorem lorem</p></article>';
        }, '');
        $('#movies div').append(html);
    }).catch(function() {
        console.log(arguments);
    });

})();
