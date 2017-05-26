'use strict';

(function() {

    initForm();

    function initForm() {
        var name = sessionStorage.getItem('name');
        if (name) {
            $('#name').val(name);
        }

        $('input').each(function(index, elem) {
            $('#' + elem.name).val(sessionStorage.getItem(elem.name));
        });

        var gender = sessionStorage.getItem('gender');
        if (gender) {
            $('input[value="' + gender + '"]').attr('checked', 'checked');
        }
    }

    function validateForm() {

        // var inputs = Array.prototype.slice.call($('input'), 0);
        var inputs = $('#contact input, #contact textarea');

        var validity = [];
        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
            validity.push(elem.checkValidity());
        });

        return validity.reduce(function(total, value) {
            return total && value;
        }, true);

        // var i = 0;
        // var result = true;
        // while (result && (i < validity.length)) {
        //     result = result && validity[i];
        //     i++;
        // }
        // return result;

    }

    validateForm();

    var button = document.querySelector('#contact button').addEventListener('click', function(event) {
        event.preventDefault();

        var result = validateForm();

        console.log('result', result);

        if (!result) {
            return;
        }

        // MOCK
        window.service = window.service || {};
        window.service.contact = window.service.contact || {};
        window.service.contact.send = function() {
            // auto resolved promise
            return Promise.resolve();
        };

        sessionStorage.setItem('name', $('input[name="name"]').val());
        sessionStorage.setItem('email', $('input[name="email"]').val());
        sessionStorage.setItem('gender', $('input[name="gender"]').val());
        sessionStorage.setItem('birthdate', $('input[name="birthdate"]').val());

        var user = {
            name: $('input[name="name"]').val(),
            birthdate: $('input[name="birthdate"]').val(),
            email: $('input[name="email"]').val()
        };

        db.save(user);

        var data = JSON.parse(JSON.stringify(user));

        delete data.birthdate;

        data.message = $('input[name="message"]').val();

        // your code
        window.service.contact.send(data).then(function() {
            alert('sended!');
        }).catch(function() {
            alert('something happend!');
        });
    });

})();
