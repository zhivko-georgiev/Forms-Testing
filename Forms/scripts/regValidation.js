var usernameRegex = /^([a-zA-Z0-9_-]){4,12}$/
var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{5,12}$/;
var birthdayRegex =  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

$("#inputUsername").change(function() {
    if (!usernameRegex.test($(this).val())) {
        $(this).after(
            '<div class="alert alert-danger" id="error-alert" role="alert">' +
            '<strong> Incorrect Username: </strong>' + $("#inputUsername").val() +
            '</div>');
        $("#error-alert").fadeTo(2000, 500).slideUp(500, function() {
            $("#error-alert").alert('close');

        })
    }
})

$("#inputEmail").change(function() {
    if (!emailRegex.test($(this).val())) {
        $(this).after(
            '<div class="alert alert-danger" id="error-alert" role="alert">' +
            '<strong> Invalid Email </strong>' +
            '</div>');
        $("#error-alert").fadeTo(2000, 500).slideUp(500, function() {
            $("#error-alert").alert('close');

        })
    }
})

$("#inputPassword").change(function() {
    if (!passRegex.test($(this).val())) {
        $(this).after(
            '<div class="alert alert-danger" id="error-alert" role="alert">' +
            '<strong> Invalid Password: Should contain at least a letter, a digit and  a special char and longer than 5 characters and less than 12(and left foot) </strong>' +
            '</div>');
        $("#error-alert").fadeTo(2000, 500).slideUp(500, function() {
            $("#error-alert").alert('close');

        })
    }
})

$("#inputBirthDate").change(function() {
    if (!birthdayRegex.test($(this).val())) {
        $(this).after(
            '<div class="alert alert-danger" id="error-alert" role="alert">' +
            '<strong> bith date should be in format dd/mm/yyyy </strong>' +
            '</div>');
        $("#error-alert").fadeTo(2000, 500).slideUp(500, function() {
            $("#error-alert").alert('close');

        })
    }
})


//
//if (regex.test($('#town').val())) {
//    alert("No Special Symbols and numbers are allowed!!");
//} else {
//    alert("OK");
//}