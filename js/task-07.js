const input = document.getElementById('font-size-control');
const text = document.getElementById('text')
input.addEventListener('input', e)

function e() {
    text.style.fontSize = `${this.value}px`
}