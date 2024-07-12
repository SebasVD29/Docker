async function fetchMessage() {
    try {
        const response = await fetch('http://localhost:3000/api/hello');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        console.error('Error fetching message:', error);
        document.getElementById('message').textContent = 'Error loading message';
    }
}

window.onload = fetchMessage;
