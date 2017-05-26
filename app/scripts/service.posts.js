'use strict';

(function() {

    var service = {
        root: 'https://jsonplaceholder.typicode.com',
        getPosts: getPosts,
        createPost: createPost,
        updatePost: updatePost,
        deletePost: deletePost
    };

    function getPosts(postId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/posts/' + postId
        });
    }

    function createPost(data) {
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/posts',
            data: JSON.stringify(data)
        });
    }

    function updatePost(id, data) {
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/posts/' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePost(id) {
        return $.ajax({
            type: 'DELETE',
            url: this.root + '/posts/' + id
        });
    }

    window.service = window.service || {};
    window.service.post = service;

})()
