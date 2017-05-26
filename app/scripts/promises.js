'use strict';
(function() {
    var root = 'https://jsonplaceholder.typicode.com';

    // callback
    // $.ajax({
    //     dataType: 'json',
    //     url: root + '/posts/1',
    //     method: 'GET',
    //     success: function() {

    //     },
    //     error: function() {

    //     }
    // });

    // promesas
    var promise = $.ajax({
        dataType: 'json',
        url: root + '/posts/1',
        method: 'GET'
    });

    promise.then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

    var promises = [];

    for (var i = 1; i < 11; i++) {
        var promise = $.ajax({
            dataType: 'json',
            url: root + '/posts/' + i,
            method: 'GET'
        });
        promises.push(promise);
    }

    Promise.all(promises).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
        }, '');
        $('#about-us').append(html);
    }).catch(function() {
        console.log(arguments);
    });

    Promise.race(promises).then(function() {
        // first with finished
    }).catch(function() {
        // first with error
    });

    var promise1 = $.ajax({
        dataType: 'json',
        url: root + '/posts/1',
        method: 'GET'
    });

    var promise2 = $.ajax({
        dataType: 'json',
        url: root + '/posts/2',
        method: 'GET'
    });

    var promise3 = $.ajax({
        dataType: 'json',
        url: root + '/posts/3',
        method: 'GET'
    });

    promise2.catch(function() {
        // promise2 error
    });
    promise3.catch(function() {
        // promise3 error
    });

    function doStuff() {
        return promise1.then(function() {
            return promise2;
        }).then(function() {
            return promise3;
        }).then(function() {
            // your code
            return 43;
        }).catch(function() {
            // handle error
        });
    }

    var quickPromise = Promise.resolve(true);

    quickPromise.then(function(response) {
        return response ? 10 : 0;
    }).then(function(response) {
        return response > i ? {} : [];
    });

    // function login(username, password, provider) {
    //     return loginProvider(username, password, provider).then(function(responseFB) {
    //         return loginOauth(responseFB);
    //     }).then(function(responseOauth) {
    //         return loginWithServer(responseOauth);
    //     }).then(function(response) {
    //         return setLoggedIn(response);
    //     }).then(function() {
    //         return getLoggedInUser();
    //     });
    // }


    /**
     *
     */
    doStuff().then(function(response) {
        // 43
    });

    var createdPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // do stuff, and reject if necessary
            resolve('magic');
        }, 5000);
    });

    createdPromise.then(function(response) {
        // 'magic'
    });

    var data = {
        'userId': 1,
        'title': 'My post',
        'body': 'post body'
    };

    var services = {
        root: 'https://jsonplaceholder.typicode.com',
        getPosts: getPosts,
        createPost: createPost,
        updatePost: updatePost
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

    services.createPost(data).then(function(response) {
        console.log('POST', response);
        return services.getPosts(1);
    }).then(function(response) {
        console.log('GET', response);
    }).catch(function(error) {
        console.error('POST', error);
    });

})();
