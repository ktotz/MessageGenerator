const words = [
    "sunshine", "adventure", "believe", "dream", "journey", 
    "create", "explore", "happy", "future", "freedom", 
    "magic", "discover", "inspire", "courage", "peace",
    "love", "wonder", "growth", "strength", "wisdom"
  ];
  
  // Function to generate a random message
  function getRandomMessage(wordCount = 5) {
    let message = [];
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      message.push(words[randomIndex]);
    }
    return message.join(' ');
  }
  
  // Display a random message
  console.log(getRandomMessage());