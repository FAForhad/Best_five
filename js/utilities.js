function getElementTextById(elementId) {
    const elementTextId = document.getElementById(elementId);
    const elementTextString = elementTextId.innerText;
    const elementText = parseFloat(elementTextString);
    return elementText;
}
function getInputValueById(inputId) {
    const inputValueId = document.getElementById(inputId);
    const inputValueString = inputValueId.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
function setValueById(id, value) {
    const getValueId = document.getElementById(id);
    getValueId.innerText = value;
}