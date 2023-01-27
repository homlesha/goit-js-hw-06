const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget
    const userDetails = { email: email.value, Password: password.value };
    
    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені.')
    } else (
        console.log(userDetails),
        event.currentTarget.reset()
    );
    
    
}