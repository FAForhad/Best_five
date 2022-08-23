// find buttons
const buttons = document.querySelectorAll('.btn-select');
// push child's
const playerArray = [];
for (const button of buttons) {
    // added click event
    button.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;
        const playerList = document.getElementById('player-List');
        playerArray.push(playerName);
        const li = document.createElement('li')
        li.innerText = playerName;
        li.setAttribute('class', 'fs-5 list-unstyled p-4 text-white my-3');
        // apply conditions
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
    // added click event to the button
document.getElementById('calculate-btn').addEventListener('click', function () {
    // calculate value
    const player = getInputValueById('player')
    const expenses = player * playerArray.length;
        // apply conditions
    if (player <= 0) {
        alert('!!!! Input Number Please !!!!')
        setValueById('expanses-field', 0);

    }
        // apply conditions isnan
    else if (isNaN(player)) {
        alert('!!!! Input Number Please !!!!')
        setValueById('expanses-field', 0);
    }
    else {
        setValueById('expanses-field', expenses);
    }
})
    // added click event to the button
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // calculate value
    const expansesField = getElementTextById('expanses-field');
    const manager = getInputValueById('manager');
    const coach = getInputValueById('coach');
    const expanseTotal = expansesField + manager + coach;
        // apply conditions 
    if (manager <= 0 || coach <= 0) {
            alert('!!!! Please Use Positive Input !!!!');
            setValueById('total', 0);
    }
        // apply conditions isnan
    else if (isNaN(manager) || isNaN(coach)) {
        alert('!!!! Input Number Please !!!!')
        setValueById('total', 0)
    }
    else {
        setValueById('total', expanseTotal);
    }
})