  const input = document.getElementById('validation-input')
  input.addEventListener('blur', handleText)

  function handleText() {
    const dataLength = this.dataset.length;
    const currentLength = this.value.length;
    if(currentLength == dataLength) {
        this.className = 'valid'
    }else (this.className = 'invalid')
  }