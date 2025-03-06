
function randBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function randomColor() {
    const r = randBetween(0, 255);
    const g = randBetween(0, 255);
    const b = randBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}

function randomLinearGradient() {
    const deg = randBetween(0, 359);
    const randomColor1 = randomColor();
    const randomColor2 = randomColor();
    return `linear-gradient(${deg}deg, ${randomColor1}, ${randomColor2})`;
}