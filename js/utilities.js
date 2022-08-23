
// -------------------elements text---------------

function getElementTextById(elementId) {
    const elementTextId = document.getElementById(elementId);
    const elementTextString = elementTextId.innerText;
    // convert the string
    const elementText = parseFloat(elementTextString);
    return elementText;
}

// -------------------input value-------------------

function getInputValueById(inputId) {
    const inputValueId = document.getElementById(inputId);
    const inputValueString = inputValueId.value;
    // convert the string
    const inputValue = parseFloat(inputValueString);
    inputValueId.value = '';
    return inputValue;
}

// -------------------set value-------------------

function setValueById(id, value) {
    const getValueId = document.getElementById(id);
    // set value 
    getValueId.innerText = value;
}
