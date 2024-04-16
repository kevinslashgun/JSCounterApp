let count = localStorage.getItem('count') || 0;
const counter = document.getElementById('counter');

const updateCounter = () => {
    counter.textContent = count;
};

updateCounter();

const updateLocalStorage = () => {
    localStorage.setItem('count', count);
};

const handleButtonClick = (operation) => {
    if (operation === 'increase') {
        count++;
    } else if (operation === 'decrease') {
        count--;
    } else {
        count = 0;
    }
    updateCounter();
    updateLocalStorage();
};

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.id);
    });
});