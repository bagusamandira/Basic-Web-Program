function validateForm() {
    let name = document.forms["registrationForm"]["name"].value;
    let gender = document.forms["registrationForm"]["gender"].value;
    let username = document.forms["registrationForm"]["username"].value;
    let email = document.forms["registrationForm"]["email"].value;
    let password = document.forms["registrationForm"]["password"].value;
    let confirm = document.forms["registrationForm"]["confirm"].value;
    let terms = document.forms["registrationForm"]["terms"].checked;


    if (name == "" || gender == "" || username == "" || email == "" || password == "" || confirm == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Email must be a valid @gmail.com address");
        return false;
    }

    if (!checkPasswordComplexity(password)) {
        alert("Password must contain at least one uppercase letter, one special character, one number, and be at least 8 characters long");
        return false;
    }

    if (!validatePassword(password, confirm)) {
        alert("Passwords do not match");
        return false;
    }

    if (!terms) {
        alert("You must agree to the terms and conditions");
        return false;
    }

    return true;
}

function checkPasswordComplexity(password) {
    var re = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    return re.test(password);
}

function validateEmail(email) {
    var re = /^[\w.+]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password, confirm) {
    if (password !== confirm) {
        return false;
    }
    return true;
}

document.getElementById("registrationForm").onsubmit = validateForm;
