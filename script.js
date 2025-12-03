let chatBox = document.getElementById("chat-box");

// Load previous messages
window.onload = () => {
    let savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    savedMessages.forEach(msg => addMessageToBox(msg));
};

function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value.trim();

    if (message === "") return;

    addMessageToBox(message);

    saveMessage(message);

    messageInput.value = "";
}

function addMessageToBox(message) {
    let div = document.createElement("div");
    div.className = "message";
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
}
