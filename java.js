function sendMessage() {
  var userInput = document.getElementById('userInput').value;
  var chatWindow = document.querySelector('.chat-window');

  // Add the user's message to the chat window
  chatWindow.innerHTML += '<div>User: ' + userInput + '</div>';

  // Prepare the data to send to the OpenAI API
  var data = {
    prompt: userInput,
    max_tokens: 150
  };

  // Make an HTTP POST request to the OpenAI API
  fetch('YOUR_ENDPOINT_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Add the OpenAI API's response to the chat window
    chatWindow.innerHTML += '<div>Bot: ' + data.choices[0].text.trim() + '</div>';
    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // Clear the input field
  document.getElementById('userInput').value = '';
}
