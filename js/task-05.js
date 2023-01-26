const input = document.getElementById('name-input');
const span = document.getElementById('name-output');  
  
input.addEventListener('input', inputName);
  
  function inputName() {
    if (this.value === '') {
        span.textContent = 'Anonymous'
    }
    span.textContent = this.value;
  };