var contacts = [ {
    firstName : "Mary",
    lastName : "Johnson",
    phoneNumber : "(650) 888-8888",
    email : "mary.johnson@example.com"
}, {
    firstName : "Bob",
    lastName : "Jones",
    phoneNumber : "(650) 777-7777",
    email : "bob.jones@example.com"
} ];

function resetForm() {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNumber").val("");
    $("#email").val("");
    $("#addForm").fadeOut(150);
    $("#add").fadeIn();
}

function validateForm() {
    var contact = {};

    var result = false;

    if ($('#firstName').val() == "" || $('#lastName').val() == ""
            || $('#phoneNumber').val() == "" || $('#email').val() == "") {
        $('#allFields').fadeIn();
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email")
            .val()))) {
        $('#invalidEmail').fadeIn();
    } else if (!(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            .test($('#phoneNumber').val()))) {
        $('#invalidPhone').fadeIn();
    } else {
        result = true;
    }

    return result;
}

function getContactById(contactName) {
    for (i = 0; i < contacts.length; i++) {
        if (contactName === contacts[i].firstName) {
            return contacts[i];
        }
    }
}

// UI calls these functions

// adds new contact
function addContact() {
    if (!validateForm())
        return false;

    contacts.push(getFormData());
}

function getFormData() {
    var data = {};

    data.firstName = $("#firstName").val();
    data.lastName = $("#lastName").val();
    data.phoneNumber = $("#phoneNumber").val();
    data.email = $("#email").val();

    return data;
}

// updates contact
function update(pos) {
    if (!validateForm())
        return false;

    $.extend(contacts[pos], getFormData());

    listContacts();

    resetForm();
}

// remove contact
function removeByName(contactName) {
    for (i = 0; i < contacts.length; i++) {
        if (contactName === contacts[i].firstName) {
            contacts.splice(i, 1);
            listContacts();
        }
    }
}

function onAdd() {
    addContact();
    
    listContacts();

    resetForm();
}

// TODO: onUpdate

// Show new contact form
function showForm(type, obj) {
    $('#submit').off('click');
    if (type == "add") {
        $('#submit').text('Add');
        $('#submit').click(onAdd);
    } else if (type == "update") {
        var index = contacts.indexOf(obj);
        $('#submit').text('Update');
        $('#submit').click(function() {
            update(index);
        });

        $("#firstName").val(obj.firstName);
        $("#lastName").val(obj.lastName);
        $("#phoneNumber").val(obj.phoneNumber);
        $("#email").val(obj.email);
    }
    $("#addForm").fadeIn();
    $("#add").hide();
}

// Listing contacts
//function listContacts() {
//    var container = $('#list');
//
//    $(container).empty();
//    list = document.createElement('div');
//    $(list).addClass('row');
//    $('<h1>').html('Contact List').appendTo(container);
//    for (i = 0; i < contacts.length; i++) {
//        var contact = contacts[i];
//        // create list
//        div = document.createElement('div');
//        t = document.createElement('ul');
//        r = document.createElement('li')
//        $('<h2>').html(contact.firstName + '&nbsp;' + contact.lastName)
//                .appendTo(div);
//        $('<span>').html('First Name:&nbsp;').appendTo(r);
//        $('<span>').html(contact.firstName).appendTo(r);
//        $(r).appendTo(t);
//        r = document.createElement('li');
//        $('<span>').html('Last Name:&nbsp;').appendTo(r);
//        $('<span>').html(contact.lastName).appendTo(r);
//        $(r).appendTo(t);
//        r = document.createElement('li');
//        $('<span>').html('email:&nbsp;').appendTo(r);
//        $('<span>').html(contact.email).appendTo(r);
//        $(r).appendTo(t);
//        r = document.createElement('li');
//        $('<span>').html('phone:&nbsp;').appendTo(r);
//        $('<span>').html(contact.phoneNumber).appendTo(r);
//        $(r).appendTo(t);
//
//        $(t).appendTo(div);
//
//        // update button
//        $update = $('<button>');
//        $update.text('Update');
//        $update.attr('data-contact-id', contacts[i].firstName);
//        $update.click(function(e) {
//            showForm('update', getContactById($(e.target).attr(
//                    'data-contact-id')));
//        });
//        $update.addClass('btn').addClass('btn-success').addClass('button');
//        $update.appendTo(div);
//
//        // delete button
//        $button = $('<button>');
//        $button.text('Delete');
//        $button.attr('data-contact-id', contacts[i].firstName);
//        $button.click(function(e) {
//            removeByName($(e.target).attr('data-contact-id'));
//        });
//        $button.addClass('btn').addClass('btn-danger').addClass('button');
//        $button.appendTo(div);
//
//        $(div).addClass('inline-contact').addClass('col-md-3').appendTo(list);
//
//    }
//    ;
//
//    $(container).append(list)
//}

function createContactItem($template, contact) {
    $template.find('.first-name').text(contact.name);
    
    // ...
}

function listContacts() {
    var container = $('#list');

    $(container).empty();

    var $template = $('.inline-contact-template');
    
//    createContactItem($template, contact):
//        
//        listContacts:
//            For each contact
//                item <- createContactItem($template, contact)
//                append(list, item)
    }

    $(container).append(list)
}
