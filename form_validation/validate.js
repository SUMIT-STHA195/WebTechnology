function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;

    if (name == "" || email == "" || age == "" || password == "") {
        alert("Please fill all the fields");
        return false;
    }
    else if (name.match(/^[a-zA-Z]+$/) == null) {
        alert("Please enter a valid name");
        return false;
    }
    else if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/) == null) {
        alert("Please enter a valid email");
        return false;
    }
    /*

    /^: Matches the start of the string.
[a-zA-Z0-9._-]+  : lower case ,upper case, number ani dot, underscore, dash sab huna payo, last ma + ko meaning jati time repeat huna ni milyo

@                : Matches the @ symbol
[a-zA-Z0-9.-]+   : lower case ,upper case, number ani dot,  dash sab huna payo, last ma + ko meaning jati time repeat huna ni milyo
.                : Matches a dot symbol 
[a-zA-Z]{2,}     : kamti ma two or more characters huna paryo that are letters (uppercase or lowercase).
$/               : Matches the end of the string.

    */

    else if (age < 8 || age > 60) {
        alert("Age should be between 8 to 60");
        return false;
    }

    else if (password.length < 6) {
        alert("Password length should be greater than 6");
        return false;
    }
    else{
        alert("form submitted successfully!!!");
        return true;
    }
}
