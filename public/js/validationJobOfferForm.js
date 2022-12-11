function validateForm() {

    // form inputs
    const companyInput = document.getElementById('companyName');
    const positionInput = document.getElementById('position');
    const locationInput = document.getElementById('location');
    const minSalaryInput = document.getElementById('minSalary');
    const maxSalaryInput = document.getElementById('maxSalary');
    const descriptionInput = document.getElementById('description');

    // form error inputs
    const errorCompanyName = document.getElementById('errorCompanyName');
    const errorPosition = document.getElementById('errorPosition');
    const errorLocation = document.getElementById('errorLocation');
    const errorMinSalary = document.getElementById('errorMinSalary');
    const errorMaxSalary = document.getElementById('errorMaxSalary');
    const errorsSummary = document.getElementById('errorSummary');

    resetErrors([companyInput, positionInput, locationInput, minSalaryInput, maxSalaryInput, descriptionInput],
        [errorCompanyName, errorPosition, errorLocation,  errorMinSalary, errorMaxSalary], errorsSummary);

    let valid = true;

    if(!checkRequired(companyInput.value)) {
        valid = false;
        companyInput.classList.add("error-input");
        errorCompanyName.innerText = "Field required";
    } else if (!checkTextLengthRange(companyInput.value, 1, 60)) {
        valid = false;
        companyInput.classList.add("error-input");
        errorCompanyName.innerText = "Field should have 1 to 60 characters";
    }

    if(!checkRequired(positionInput.value)) {
        valid = false;
        positionInput.classList.add("error-input");
        errorPosition.innerText = "Field required";
    } else if (!checkTextLengthRange(positionInput.value, 2, 60)) {
        valid = false;
        positionInput.classList.add("error-input");
        errorPosition.innerText = "Field should have 2 to 60 characters";
    }

    if(!checkRequired(locationInput.value)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Field required";
    } else if (!checkTextLengthRange(locationInput.value, 2, 60)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Field should have 2 to 60 characters";
    }

    if(checkRequired(minSalaryInput.value)) {
        if (!checkNumber(minSalaryInput.value)) {
            valid = false;
            minSalaryInput.classList.add("error-input");
            errorMinSalary.innerText = "Input should be a number";
        } else if (!checkNumberRange(minSalaryInput.value, 2000, 1_000_000)) {
            valid = false;
            minSalaryInput.classList.add("error-input");
            errorMinSalary.innerText = "Input should be a number ranging from 2000 PLN to 1000000 PLN"
        }
    }
    if(checkRequired(maxSalaryInput.value)) {
        if (!checkNumber(maxSalaryInput.value)) {
            valid = false;
            maxSalaryInput.classList.add("error-input");
            errorMaxSalary.innerText = "Input should be a number";
        } else if (!checkNumberRange(maxSalaryInput.value, 2000, 1_000_000)) {
            valid = false;
            maxSalaryInput.classList.add("error-input");
            errorMaxSalary.innerText = "Input should be a number ranging from 2000 PLN to 1000000 PLN"
        } else if (!checkLargerThanMin(minSalaryInput.value, maxSalaryInput.value)) {
            valid = false;
            maxSalaryInput.classList.add("error-input");
            errorMaxSalary.innerText = "Maximum salary cannot be lower then minimum";
        }
    }

    if(!valid) {
        errorsSummary.innerText = "Form contains errors";
    }

    return valid;
}
