function validateForm() {

    // form inputs
    const usernameInput = document.getElementById('username');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const genderInput = document.getElementById('gender');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dateInput = document.getElementById('creationDate')

    // form error inputs
    const errorUsername = document.getElementById('errorUsername');
    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');
    const errorGender = document.getElementById('errorGender');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');
    const errorDate = document.getElementById('errorCreationDate');
    let errorsSummary = document.getElementById('errorSummary');

    if (errorsSummary === null) {
        errorsSummary = "";
    }
    resetErrors([usernameInput, nameInput, surnameInput, genderInput, emailInput, passwordInput, dateInput],
                [errorUsername, errorName, errorSurname, errorGender, errorEmail, errorPassword, errorDate], errorsSummary);

    let valid = true;

    if(!checkRequired(usernameInput.value)) {
        valid = false;
        usernameInput.classList.add("error-input");
        errorUsername.innerText = "Field required!";
    } else if (!checkTextLengthRange(usernameInput.value, 2, 60)) {
        valid = false;
        usernameInput.classList.add("error-input");
        errorUsername.innerText = "Field should have 2 to 60 characters!";
    }

    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Field required!";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Field should have 2 to 60 characters!";
    }

    if(!checkRequired(surnameInput.value)) {
        valid = false;
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Field required!";
    } else if (!checkTextLengthRange(surnameInput.value, 2, 60)) {
        valid = false;
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Field should have 2 to 60 characters!";
    }

    if(!checkRequired(genderInput.value)) {
        valid = false;
        genderInput.classList.add("error-input");
        errorGender.innerText = "Field required!";
    } else if (!checkTextLengthRange(genderInput.value, 2, 60)) {
        valid = false;
        genderInput.classList.add("error-input");
        errorGender.innerText = "Field should have 2 to 60 characters!";
    }

    if(!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Field required!";
    } else if (!checkTextLengthRange(passwordInput.value, 8, 14)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Field should have 2 to 10 characters!";
    }

    if(!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Field required!";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Field should have 5 to 60 characters!";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input")
        errorEmail.innerText = "Field should contain email in correct form"
    }

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();

    if(month.length < 2)
        month = '0' + month;
    if(day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');

    if(!checkRequired(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Field required!"
    } else if (!checkDate(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Input should be a date in correct format (yyyy-mm-dd)!"
    } else if (checkDateIfAfter(dateInput.value, nowString)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Date cannot be in the future!";
    }


    if(!valid) {
        errorsSummary.innerText = "Form contains errors!";
    }

    return valid;


}
