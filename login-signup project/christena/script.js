function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();

    if (!email || !password) {
        document.getElementById('signUpMessage').innerText = 'Email and password cannot be empty.';
        return;
    }

    if (localStorage.getItem(email)) {
        document.getElementById('signUpMessage').innerText = 'User already registered!';
        document.getElementById('signUpMessage').className = 'message error';
    } else {
        localStorage.setItem(email, password);
        document.getElementById('signUpMessage').innerText = 'Registration successful!';
        document.getElementById('signUpMessage').className = 'message success';
    }
}

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        document.getElementById('loginMessage').innerText = 'Email and password cannot be empty.';
        document.getElementById('loginMessage').className = 'message error';
        return;
    }

    const storedPassword = localStorage.getItem(email);
    if (!storedPassword) {
        document.getElementById('loginMessage').innerText = 'Username not registered';
        document.getElementById('loginMessage').className = 'message error';
    } else if (storedPassword === password) {
        document.getElementById('loginMessage').innerText = 'Login successful!';
        document.getElementById('loginMessage').className = 'message success';
        setTimeout(() => {
            window.location.href = 'https://pkco.github.io/github/'; 
        }, 1000);
    } else {
        document.getElementById('loginMessage').innerText = 'Incorrect password';
        document.getElementById('loginMessage').className = 'message error';
    }
}
