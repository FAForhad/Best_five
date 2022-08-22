const buttons = document.querySelectorAll('.btn-select');
const playerArray = [];
for (button of buttons) {
    button.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;
        const playerList = document.getElementById('player-List');
        playerArray.push(playerName);
        const li = document.createElement('li')
        li.innerText = playerName;
        li.setAttribute('class', 'list-unstyled p-4 text-white my-3');

        if (playerArray.length > 5) {
            alert('You Cannot select more than 5 players!')
            playerArray.pop();
        }
        else {
            event.target.setAttribute('disabled', 'true');
            playerList.appendChild(li)
        }
    })
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    const player = getInputValueById('player')
    const expenses = player * playerArray.length;
    const expansesField = setValueById('expanses-field', expenses);
    return expansesField
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const expansesField = getElementTextById('expanses-field');
    const manager = getInputValueById('manager');
    const coach = getInputValueById('coach');
    const expanseTotal = expansesField + manager + coach;
    const total = setValueById('total', expanseTotal);
    return total;

})