createBtn.addEventListener('click', function () {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    cardContainer.style.backgroundColor = randomColor();

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('goal-cb');

    let goalText = document.createElement('span');
    goalText.textContent = 'another goal'
    goalText.classList.add('goal-text');
    goalText.textContent = createText.value;

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('delete-card-btn');

    let iconRemove = document.createElement('i');
    iconRemove.className = 'fa fa-close';

    removeBtn.append(iconRemove);
    
    
    cardContainer.append(checkbox);
    cardContainer.append(goalText);
    cardContainer.append(removeBtn);

    cardsList.append(cardContainer);

    createText.value = null;
});

main.addEventListener('click', function (event) {
    if(!event.target.classList.contains('fa-close')) return;

    event.target.closest('.card').remove();
});

function randomColor() {
    let r = Math.floor((Math.random() * 256) + 64);
    let g = Math.floor((Math.random() * 256) + 64);
    let b = Math.floor((Math.random() * 256) + 64);

    return `rgb(${r},${g},${b})`;
}