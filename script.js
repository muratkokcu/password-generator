const passEl = document.getElementById('pass');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generatePassBtn = document.getElementById('generatePass');

const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercases = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()_+=';

function getUppercase() {
    return uppercases[Math.floor(Math.random() * uppercases.length)]
}

function getLowercase() {
    return lowercases[Math.floor(Math.random() * lowercases.length)]
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatedPassOnUI() {
    let length = lengthEl.value;

    let password = '';

    for (let i = 0; i < length; i++) {
        const passX = generatePass();
        password += passX;
    }

    passEl.innerText = password;
}

function generatePass() {
    const passArr = [];

    if (uppercase.checked) {
        passArr.push(getUppercase());
    }
    if (lowercase.checked) {
        passArr.push(getLowercase());
    }
    if (number.checked) {
        passArr.push(getNumbers());
    }
    if (symbol.checked) {
        passArr.push(getSymbols());
    }
    if (passArr.length === 0) return '';

    return passArr[Math.floor(Math.random() * passArr.length)];
}

function copyPassword() {
    const textToCopy = passEl.innerText;
    // invinsible textarea
    const text = document.createElement('textarea');
    text.value = textToCopy;
    text.setAttribute('readonly', '');
    text.style.position = 'absolute';
    text.style.left = '-9999px';
    document.body.appendChild(text);
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);
}

generatePassBtn.addEventListener('click', generatedPassOnUI);
copyEl.addEventListener('click', copyPassword);