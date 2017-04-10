'use strict';


console.log('hello from file!');


var hello = {
    pepe: true,
    juan: 'ok'
};

console.log(hello);

// confirm('tu ordenador no es seguro!');


/**
 * This function does magic stuff
 * @param  {Number} Este es un tipo number
 * @param  {String}
 * @param  {Object}
 * @param  {Alumno}
 * @return {Mixed} returns a magic thing
 */
function pepe(arg1, arg2, arg3) {

}


/**
 * ksjdhkjashdljahsjdlahjs
 * asdkasgdkjahskjd
 * asdjkabsdkj
 */

console.log(1 == '1');
console.log(1.0 === 1);
console.log(0.1 + 0.2);
console.log((0.1 + 0.2) === 0.3);


var compra = ['leche', 'pan', 'galletas', 'cerveza', 'verduras', 'carne', 'arroz'];


function listarCompra() {
    compra.forEach(function(elementoCompra, index) {
        console.log(elementoCompra);
    });
}

function quitarGlutem() {
    if (compra && compra.length) {
        compra = compra.filter(function(elementoCompra, index) {
            return elementoCompra !== 'pan';
        });
    }
}

function quitarGlutem2(arg1, arg2, arg3) {
    var result = [];
    compra.forEach(function(elementoCompra) {
        if (elementoCompra !== 'pan') {
            result.push(elementoCompra);
        }
    });
    return result;
}

// quitarGlutem2.call(ctx, arg1, arg2, arg3)
// quitarGlutem2.apply(ctx, [arg1, arg2, arg3])

var noseque;

console.log('noseque', noseque, compra);

quitarGlutem();
console.log(compra);
console.log('\'hello');

var fecha = '2017/05/12';
var fechaNumbers = fecha.split('/').map(function(item) {
    return parseInt(item);
});

fecha.split('/').join('-');

console.log(fechaNumbers);


var cadena = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, maxime.';
console.log(cadena.slice(0, 7) + '...');
console.log(cadena.slice(5));
console.log(cadena.slice(-5));

console.log(parseInt('10'));
console.log(parseInt('10 cows'));
console.log(parseInt('cows 10'));
console.log(parseInt('09/2013'));


// if (variable1 === 0 && variable1 === undefined) {
//     if (!variable1) {

//     }
// }


function coma1() {
    return {
        val: true
    };
}

function coma2() {
    return;

    // NADA
    {
        val: true
    }
}

var compra2 = [{
    name: 'leche',
    price: 5
}, {
    name: 'pan',
    price: 8
}, {
    name: 'galletas',
    price: 9
}, {
    name: 'cerveza',
    price: 25
}, {
    name: 'verduras',
    price: 23
}, {
    name: 'carne',
    price: 1
}, {
    name: 'arroz',
    price: 6
}];

console.log(compra2);

compra2.sort(function(item1, item2) {
    return item1.price > item2.price;
});
// compra2.sort(function(item1, item2) {
//     return item1.name.toLowerCase() > item2.name.toLowerCase();
// });

console.log(compra2);

console.log(compra.shift());
compra.unshift('leche');



function Player(name, lastName, level) {
    this.name = name;
    this.lastName = lastName;
    this.level = level;
    this.play = function() {
        console.log('play!');
    }
}

var jordan = new Player('Michael', 'Jordan', 'pro');
var gasol = new Player('Paul', 'Gasol', 'pro');

// var jordan = Object.create(Player.prototype);
// jordan.name = 'Michael';
// jordan.lastName = 'Jordan';
// jordan.level = 'pro';

Player.prototype.partner = 'Nike';

jordan.partner = 'adidas';
jordan.play = function() {
    console.log('play!');
};

jordan.play();

console.log(jordan);
console.log(gasol);

var arrayFalsy = {
    0: true,
    1: false,
    2: true
};

arrayFalsy[0]

// fn.call(obj);

// var fn2 = fn.bind(obj);

// fn2();



var obj = {
    name: 'pepito',
    saludo: function() {
        var that = this;
        document.querySelector('button').addEventlistener('click', function() {
            var miVar = 3;
            console.log(that.name);
        });

    }
}

var b;
(function() {
    var a = b = 3;
});


// var compraListNodeVirtual = document.createElement('ul');
// compra.forEach(function(item) {
//     var a = document.createElement('li');
//     a.innerHTML = item;
//     compraListNodeVirtual.appendChild(a);
// });
// compraListNode.appendChild(compraListNodeVirtual);

// var items = [];
// compra.forEach(function(item) {
//     var a = document.createElement('li');
//     a.innerHTML = item;
//     items.push(a);
// });

// var html = a.reduce(function(item, total) {
// return total + item.toString();
// }, '');

// document.write(html);

// background-image => backgroundImage

// kebap-case-style
// lowerCamelCase
// UpperCamelCase


var array = document.querySelectorAll('.nav a');
var newArray = Array.prototype.slice.call(array, 0);
newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray(arg1, arg2, arg3) {
    console.log(arguments);
}

// setValue(arg1);
// setValue(arg1, arg2);
// setValue(arg1, arg2, arg3);

// argumentsArray(1, 2, 4, 'string');

var i = 0;

var timeout = setTimeout(function() {
    i++;
}, 2000);

var timeout2 = setTimeout(function() {
    i++;
}, 3000);

clearTimeout(timeout);

// for(var i = 0; i < 5; i++) {
//     (function(index) {
//         setTimeout(function() {
//             console.log(index);
//         }, i * 1000);
//     })(i)
// }


$('button').click(function(event) {
    console.log(event);
    $('nav a').css('color', 'green');
    $(this).css('color', 'red');
    $(event.target).css('color', 'red');
});

(function() {})();

$(document).ready(function() {});

$(document).ready(function() {

    $('.nav-item a').mouseover(function() {
        console.log($(this).attr('href'));
    });
});

$(document).scroll(function() {
    requestAnimationFrame(function() {
        $('header').css('top', window.superCalculus);
    });
});
