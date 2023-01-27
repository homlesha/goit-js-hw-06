  const input = document.getElementById('validation-input')
  input.addEventListener('blur', handleText)

  function handleText() {
    const dataLength = this.dataset.length;
    const currentLength = this.value.length;
    if(currentLength == dataLength) {
        this.classList.add('valid') 
        this.classList.remove('invalid') 
    }else (
      this.classList.add('invalid'),
      this.classList.remove('valid')
    );
  };