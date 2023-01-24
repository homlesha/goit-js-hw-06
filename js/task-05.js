const input = document.getElementById('name-input');
const span = document.getElementById('name-output');  
  
input.addEventListener('input', e);
  
  function e() {
    span.textContent = this.value;
    if (this.value === '') {
        span.textContent = 'Anonymous'
    }
  };