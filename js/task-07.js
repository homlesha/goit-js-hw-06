const input = document.getElementById('font-size-control');
const text = document.getElementById('text')
input.addEventListener('input', event)

function event() {
    text.style.fontSize = `${this.value}px`
}