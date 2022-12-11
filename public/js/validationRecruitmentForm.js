function validateForm() {

    //form inputs
    const recUsernameInput = document.getElementById('recUsername');
    const companyRecNameInput = document.getElementById('companyRecName');
    const recPositionInput = document.getElementById('recPosition');
    const statusInput = document.getElementById('status');
    const dateOpenedInput = document.getElementById('dateOpened');
    const notesInput = document.getElementById('notes');

    //form errors
    const errorRecUsername = document.getElementById('errorRecUsername');
    const errorCompanyRecName = document.getElementById('errorCompanyRecName');
    const errorRecPosition = document.getElementById('errorRecPosition');
    const errorStatus = document.getElementById('errorStatus');
    const errorDateOpened = document.getElementById('errorDateOpened');
    const errorNotes = document.getElementById('errorNotes');
    const errorsSummary = document.getElementById('errorSummary');

    resetErrors([recUsernameInput, companyRecNameInput, recPositionInput, statusInput, dateOpenedInput, notesInput],
        [errorRecUsername, errorCompanyRecName, errorRecPosition, errorStatus, errorStatus, errorDateOpened, errorNotes], errorsSummary)

    let valid = true;

    if(!checkRequired(recUsernameInput.value)) {
        valid = false;
        recUsernameInput.classList.add("error-input");
        errorRecUsername.innerText = "Field required";
    } if(recUsernameInput.value === "0") {
        valid = false;
        recUsernameInput.classList.add("error-input");
        errorRecUsername.innerText = "Field required";
    }

    if(!checkRequired(companyRecNameInput.value)) {
        valid = false;
        companyRecNameInput.classList.add("error-input");
        errorCompanyRecName.innerText = "Field required";
    } else if(companyRecNameInput.value === "0") {
        valid = false;
        companyRecNameInput.classList.add("error-input");
        errorCompanyRecName.innerText = "Field required";
    }

    if(!checkRequired(recPositionInput.value)) {
        valid = false;
        recPositionInput.classList.add("error-input");
        errorRecPosition.innerText = "Field required";
    } else if (!checkTextLengthRange(recPositionInput.value, 2, 60)) {
        valid = false;
        recPositionInput.classList.add("error-input");
        errorRecPosition.innerText = "Field should have 2 to 60 characters";
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

    if(!checkRequired(dateOpenedInput.value)) {
        valid = false;
        dateOpenedInput.classList.add("error-input");
        errorDateOpened.innerText = "Field required"
    } else if (!checkDate(dateOpenedInput.value)) {
        valid = false;
        dateOpenedInput.classList.add("error-input");
        errorDateOpened.innerText = "Input should be a date in correct format (yyyy-mm-dd)"
    } else if (checkDateIfAfter(dateOpenedInput.value, nowString)) {
        valid = false;
        dateOpenedInput.classList.add("error-input");
        errorDateOpened.innerText = "Date cannot be in the future";
    }

    if(!valid) {
        errorsSummary.innerText = "Form contains errors";
    }

    return valid;
}
