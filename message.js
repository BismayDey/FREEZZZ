document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const usernameInput = document.getElementById('username-input');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Get or set the username
    let username = localStorage.getItem('username');
    if (username) {
        usernameInput.value = username;
    }

    // Load messages from localStorage
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messagesDiv.innerHTML = '';
        messages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${msg.username === username ? 'user' : 'other'}`;
            messageElement.innerHTML = `
                <div>${msg.text}</div>
                <div class="timestamp">${msg.timestamp}</div>
            `;
            messagesDiv.appendChild(messageElement);
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    };

    loadMessages();

    // Send message
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        const user = usernameInput.value.trim();

        if (message && user) {
            const timestamp = new Date().toLocaleTimeString();
            const messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push({ username: user, text: message, timestamp });
            localStorage.setItem('messages', JSON.stringify(messages));

            // Update the chat
            const messageElement = document.createElement('div');
            messageElement.className = `message ${user === username ? 'user' : 'other'}`;
            messageElement.innerHTML = `
                <div>${message}</div>
                <div class="timestamp">${timestamp}</div>
            `;
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            messageInput.value = '';
        }

        // Save username
        localStorage.setItem('username', usernameInput.value);
    });

    // Handle Enter key
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
