'use strict';
(function() {

    var service = {
        root: 'https://jsonplaceholder.typicode.com',
        getPhoto: getPhoto,
        getPhotos: getPhotos,
        createPhoto: createPhoto,
        updatePhoto: updatePhoto,
        deletePhoto: deletePhoto
    };

    function getPhoto(photoId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: service.root + '/photos/' + photoId
        });
    }

    function getPhotos(params) {
        params = params || {};
        params.limit = params.limit || 2;
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: service.root + '/photos?_limit=' + params.limit
        });
    }

    function createPhoto(data) {
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: service.root + '/photos',
            data: JSON.stringify(data)
        });
    }

    function updatePhoto(id, data) {
        data = data || {};
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: service.root + '/photos/' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePhoto(id) {
        return $.ajax({
            type: 'DELETE',
            url: service.root + '/photos/' + id
        });
    }

    window.service = window.service || {};
    window.service.photo = service;

})();
