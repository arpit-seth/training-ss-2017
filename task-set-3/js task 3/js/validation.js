class Validation {

    static validateForm(form1) {

    	var o = new Validation();	
        if (o.validateName(form1["first_name"].value) && o.validateName(form1["last_name"].value) && o.validatePhone(form1["phone"].value) && o.validateDob(form1["dob"].value) && o.validateEmail(form1["email"].value) && o.validatePassword(form1["password"].value))
            return "Good, Your form is submitted successfully !!!!";
        return;
    }

    validateName(name) {
        var patt = /[^a-zA-Z]/g;
        if (name.length < 6 || name.length > 15) {
            alert("length of name should be 6-15.");
        } else if (patt.test(name)) {
            alert("only alphabets are allowed for name.");
        } else {
            return true;
        }
        return false;
    }

    validatePhone(phone) {
        if (phone.length != 10) {
            alert("Phone should be 10 digits number.");
            return false;
        }
        return true;
    }

    validateDob(dob) {
        var patt = /[0-9]{2}[-][0-9]{2}[-][0-9]{4}/g;
        if (!patt.test(dob)) {
            alert("Please, enter date in format of DD-MM-YYYY");
        } else {
            var day = dob.slice(0, 2);
            var month = dob.slice(3, 5);
            var year = dob.slice(6, 10);

            if (day < 1 || day > 31) {
                alert("Date should be 01 - 31");
            } else if (month < 1 || month > 12) {
                alert("Month should be 01 - 12");
            } else if (year < 1900 || year > 2017) {
                alert("Year should be 1900 - 2017");
            } else {
                var today_date = new Date();
                var dob_date = new Date(year, month - 1, day);
                var time1 = today_date.getTime();
                var time2 = dob_date.getTime();
                var time_diff = time1 - time2;

                var days = Math.floor(time_diff / 86400000);
                var years = Math.floor(days / 365);
                var rem_days = days % 365;

                var age = "Your age is " + years + " years " + rem_days + " days.";
                alert(age);

                return true;
            }
        }
        return false;
    }

    validateEmail(email) {
        var patt = /[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/g;
        if (!patt.test(email)) {
            alert("Please, enter a valid email like 'username@gmail.com' .");
            return false;
        }
        return true;
    }

    validatePassword(password) {
        var patt1 = /[a-z]+/g;
        var patt2 = /[A-Z]+/g;
        var patt3 = /\d+/g;
        var patt4 = /[~!@#$%^&*.,]+/g;

        if (password.length < 6 || password.length > 15) {
            alert("Length of Password should be 6-15.");
        } else if (!patt1.test(password)) {
            alert("For Password, use atleast one Lower alphabet[a-z].");
        } else if (!patt2.test(password)) {
            alert("For Password, use atleast one Upper alphabet[A-Z].");
        } else if (!patt3.test(password)) {
            alert("For Password, use atleast one digit[0-9].");
        } else if (!patt4.test(password)) {
            alert("For Password, use atleast one special character from  ~ ! @ # $ % ^ & . , * ");
        } else {
            return true;
        }

        return false;
    }

}