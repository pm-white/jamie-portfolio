const buttons = document.querySelectorAll("button");

let categories = [];

buttons.forEach((button) => {
    // add click event listeners to filter buttons
    button.addEventListener('click', () => filterContent(button.id));
    if (button.id !== 'show-all') {
        categories.push(button.id);
    }

    // make Show all button bold
    document.querySelector('#show-all').style.fontWeight = 'bold';
});

// filters to only the content div with the passed id
function filterContent(id) {
    if (id === 'show-all') {
        for (let i=0; i < categories.length; i++) {
            const div = document.querySelector(`#${categories[i]}-container`);
            const button = document.querySelector(`#${categories[i]}`);
            div.hidden = false;
            button.style.fontWeight = 'normal';
        }
        document.querySelector('#show-all').style.fontWeight = 'bold';
    } else {
        for (let i=0; i < categories.length; i++) {
            const div = document.querySelector(`#${categories[i]}-container`);
            const button = document.querySelector(`#${categories[i]}`);

            if (categories[i] === id) {
                // show div and make button font bold
                div.hidden = false;
                button.style.fontWeight = 'bold';
            } else {
                // hide div and make button font normal
                div.hidden = true;
                button.style.fontWeight = 'normal';
            }
        }
        document.querySelector('#show-all').style.fontWeight = 'normal';
    }
}