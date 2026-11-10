const btn = document.getElementById('btn');
const result = document.getElementById('result');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    result.textContent = `Ты нажал ${count} раз(а)`;
});