const input = document.getElementById('name-input');
const span = document.getElementById('name-output');  
  
input.addEventListener('input', inputHandler);
  
  function inputHandler() {
    if (this.value === '') {
      return span.textContent = 'Anonymous'
    }
    span.textContent = this.value;
  };