const buttons = document.querySelectorAll("button");

let categories = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => filterContent(button.id));
    if (button.id !== 'show-all')
    categories.push(button.id);
});

function filterContent(id) {
    if (id === 'show-all') {
        for (let i=0; i < categories.length; i++) {
            const div = document.querySelector(`#${categories[i]}-container`);
            div.hidden = false;
        }
    } else {
        for (let i=0; i < categories.length; i++) {
            const temp = categories[i]
            console.log(temp)
            const div = document.querySelector(`#${categories[i]}-container`);
            if (categories[i] === id) {
                div.hidden = false;
            } else {
                div.hidden = true;
            }
        }
    }
}