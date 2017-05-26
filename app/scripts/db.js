'use strict';

(function() {

    var request = indexedDB.open('database', 1);
    var db;

    request.onsuccess = function(e) {
        console.log('Base de datos cargada correctamente');
        db = request.result;
    };


    request.onupgradeneeded = function(e) {
        console.log('db upgraded');
        var db = event.target.result;
        var objectStore = db.createObjectStore('people', {
            keyPath: 'id',
            autoIncrement: true
        });
        objectStore.createIndex('by_name', 'name', {
            unique: false
        });
        objectStore.createIndex('by_email', 'email', {
            unique: true
        });
    };


    function save(data) {
        var transaction = db.transaction('people', 'readwrite');
        transaction.oncomplete = function(event) {
            alert('All done!');
        };
        transaction.onerror = function(event) {
            // handle errors!
        };
        var peopleObjectStore = transaction.objectStore('people');
        var addResponse = peopleObjectStore.add(data);
        addResponse.onsuccess = function() {
            console.log('added', data);
        };
    }

    window.db = {
        save: save
    };

})();
