// script.js

function showProfile() {
    const username = document.getElementById('username').value;
    const fileInput = document.getElementById('pfp');
    const userDisplay = document.getElementById('userDisplay');

    if (!username) {
        alert("Please enter a username!");
        return;
    }

    const reader = new FileReader();
    const file = fileInput.files[0];

    if (file) {
        reader.onload = function (e) {
            userDisplay.innerHTML = `
                <h2>Hello, ${username}!</h2>
                <img src="${e.target.result}" alt="Profile Picture">
            `;
        };
        reader.readAsDataURL(file);
    } else {
        userDisplay.innerHTML = `
            <h2>Hello, ${username}!</h2>
            <p>No image uploaded 🫣</p>
        `;
    }
}
