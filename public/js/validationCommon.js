function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i = 0; i<inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for(let i = 0; i<errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    return value !== "";

}

function checkTextLengthRange(value, min, max) {
    if(!value) {
        return false;
    }
    value= value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    return !(min && length < min);

}

function checkEmail(value) {
    if(!value) {
        return false;
    }
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

function checkNumber(value) {
    if(!value) {
        return false;
    }
    return !isNaN(value);
}

function checkNumberRange(value, min, max) {

    if (!checkNumber(value)) {
        return false;
    }

    value = parseFloat(value);
    if(value < min) {
        return false;
    }

    return value <= max;

}

function checkLargerThanMin(min, max) {

    min = parseFloat(min);
    max = parseFloat(max);

    return min <= max;

}

function checkDate(value) {
    if(!value) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}

function checkDateIfAfter(value1, value2) {
    if(!value1 || !value2) {
        return false;
    }

    if(!checkDate(value1) || !checkDate(value2)) {
        return false;
    }

    const value1Date = new Date(value1);
    const value2Date = new Date(value2);

    return !(value1Date.getTime() <= value2Date.getTime());
}