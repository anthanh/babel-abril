'use strict';

$(document).ready(function() {

    var casa, pepe, i, btn;

    document.querySelector('#team .caption').addEventListener('click', function() {
        console.log(this);
    }, true);

    document.querySelector('#team .caption p').addEventListener('click', function() {
        console.log(this);
    }, true);

    for (i = 0; i < 5; i++) {
        btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function() {
            console.log(i);
        });
        document.body.appendChild(btn);
    }

    for (i = 0; i < 5; i++) {
        btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', (function(i) {
            return function() {
                console.log(i);
            };
        })(i));
        document.body.appendChild(btn);
    }

});
