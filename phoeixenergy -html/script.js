// script.js

const messagesContainer = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    displayMessage(userMessage, "user");
    userInput.value = "";
    handleChatResponse(userMessage.toLowerCase());
  }
});

function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleChatResponse(userMessage) {
  let botResponse;

  // Predefined responses for Phoenix Energy
  if (userMessage.includes("services")) {
    botResponse =
      "We offer electrical design, construction, lighting control systems, switchboard upgrades, and more. Would you like more details?";
  } else if (userMessage.includes("contact")) {
    botResponse =
      "You can reach us at (07) 4671 2720 or email us at admin@phoenixenergyqld.com.au.";
  } else if (userMessage.includes("location")) {
    botResponse =
      "Our offices are located at 2/5 Mill Street, Goondiwindi, and 3 Loam Street, Dalby.";
  } else if (userMessage.includes("about")) {
    botResponse =
      "Phoenix Energy is a trusted Queensland-based electrical contractor specializing in commercial and industrial projects.";
  } else if (userMessage.includes("help")) {
    botResponse =
      "Sure! I'm here to help. You can ask about our services, contact details, or locations.";
  } else {
    botResponse =
      "I'm sorry, I don't understand that. You can ask about our services, contact details, or locations.";
  }

  displayMessage(botResponse, "bot");
}
