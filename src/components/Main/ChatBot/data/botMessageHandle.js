const userMessage = [
     /* 0 */["hi", "hey", "hello", "hlo", "hi there", "hey there"],
  /* 1 */["how are you", "how r u", "hw r u", "how are you doing", "how's it going", "how's life"],
  /* 2 */["what are you doing", "what is going on", "what is up", "wud", "what's up", "what's happening", "ok", "ok"],
  /* 3 */["how old are you"],
  /* 4 */["bye", "good bye", "take care"],
  /* 5 */["who are you", "are you human", "human", "are you bot", "are you human or bot", "what are you", "tell me about yourself"],
  /* 6 */["who created you", "creator", "who is your creator", "who made you"],
  /* 7 */["email", "address", "mail"],
  /* 8 */["developer number", "message", "You are bad", "contact developer", "report", "there is bug", "bug", "who's behind you", "contact", "phone", "contact", "info", "whatsapp", "wa", "number", "Who is amaan", "amaan", "amaan mk", "mk", "mohammed", "khalander"],
  /* 9 */["instagram", "username", "link", "user", "insta"],
  /* 10 */["github", "repository", "repo", "git"],
  /* 11 */["your name please", "your name", "name", "may I know your name", "what is your name", "what do you call yourself", "tell me your name"],
  /* 12 */["i love you", "love", "love you", "i like you", "you're awesome", "you're great", "you're cool"],
  /* 13 */["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good", "awesome", "nice", "excellent"],
  /* 14 */["bad", "help", "bored", "tired", "not good", "feeling down", "feeling low", "i am sad", "sad"],
  /* 15 */["What is your purpose?", "Why were you created?", "What can you do?", "Tell me about your capabilities", "club", "What's your main function?"],
  /* 16 */["What's the weather like today?", "Tell me the weather forecast", "Weather today"],
  /* 17 */["How does your language model work?", "created", "language", "Explain your AI technology", "Tell me about your architecture", "how you work", "send your code"],
  /* 18 */["What's the time now?", "What's the current time?", "Tell me the time", "time"],
    /* 19 */["events", "news", "plans", "esports", "game", "planned", "future"],
        /* 20 */["previous", "old", "school visit", "visit", "school"],
    // More questions can be added here
  ];
  
  const botReply = [
    /* 0 */["Hello! 😊", "Hi! 👋", "Hey! 👍", "Hi there! 👋"],
  /* 1 */["Fine... how are you? 😄", "Pretty well, how are you? 😊", "Fantastic, how are you? 🌟"],
  /* 2 */["Getting better. There? 😄", "Somewhat okay! 😅", "Yeah fine!🏡"],
  /* 3 */["I am always young. 👶"],
  /* 4 */["Goodbye! 👋", "Farewell! 😊", "Please take care! 🌼"],
  /* 5 */["I am just a bot 😄", "I am a bot. What are you? 🤖"],
  /* 6 */["Amaan Mohammed Khalander is my creator 🙌"],
  /* 7 */["You can contact Amaan:<br> Email: <a href='mailto:syedkhalander66@gmail.com'>syedkhalander66@gmail.com 📧</a>"],
  /* 8 */["You can contact Amaan:<br> Phone: <a href='tel:8867305645'>8867305645</a> 📱<br> WhatsApp: <a href='https://wa.me/7353346164'>7353346164</a> 💬"],
  /* 9 */["Instagram: <a href='https://www.instagram.com/amaan.m.k/'>@amaan.m.k 📷</a>"],
  /* 10 */["GitHub: <a href='https://github.com/amaan9136'>@amaan9136 🐙</a>"],
  /* 11 */["I am ClubGPT by Amaan Mohammed Khalander 😊"],
  /* 12 */["I love you too ❤️", "Me too! 😄", "Thanks! Try giving feedback on WhatsApp: <a href='https://wa.me/7353346164'>7353346164</a> 💬"],
  /* 13 */[
    "I'm glad to hear that you're feeling happy! 😄", "That's great! 😊", "Thanks! Try giving feedback on WhatsApp: <a href='https://wa.me/7353346164'>7353346164</a> 💬", "Fun is always good! 🎉", "Wonderful! 😄", "Fantastic! 😃", "Cool! 😎", "😊", "Awesome! 🌟", "Excellent! 👏"
  ],
  /* 14 */[
    "I'm really sorry to hear that you're feeling this way. It's important to talk to someone you trust about your feelings. ❤️",
    "You don't have to go through this alone. Reach out to friends, family, or a mental health professional for support. 🤗",
    "I'm here to listen and chat with you, but I'm not a replacement for professional help. Please consider seeking help from a therapist or counselor. 🙏",
    "Remember that it's okay to not be okay sometimes. Your feelings are valid, and there are people who care about you. 💕",
    "If you'd like, we can chat about your feelings and experiences. Sharing can sometimes help lighten the burden. 📢",
    "Depression can be a tough journey, but there is hope and help available. You're not alone in this. 🌟",
    "Is there anything specific you'd like to talk about or any questions you have? 😊",
    "I'm here to provide a listening ear. Feel free to share as much or as little as you're comfortable with. 🤗"
  ],
  /* 15 */["My purpose is to manage the club and assist you with events and info. 🎉"],
  /* 16 */["I'm sorry, I cannot provide real-time weather information. You can check a weather website or app for the latest updates. ☀️"],
  /* 17 */["That's a secret only Amaan knows! 🤫"],
  /* 18 */["I don't have access to real-time data, including the current time. You can check the time on your device or ask a voice assistant like Siri or Google Assistant. ⌚"],
 /* 19 */[
    "As much as I know, we are conducting Esports from the Technical Club. 🎮",
    "Esports is one of the exciting initiatives of the Technical Club, and we have some amazing events lined up! 🎉",
    "Esports is booming in the Technical Club! Stay tuned for upcoming events and news related to gaming. 🕹️",
    "Esports is a key focus for us at the Technical Club. We have exciting plans and events in the world of gaming! 🚀"
  ],
/* 20 */[
    "Sure, I can tell you about the previous school visit. It was an event where all 4 clubs contributed their efforts. It was a fantastic experience for everyone involved! 🏫🤝",
    "The previous school visit was a collaborative effort from all 4 clubs. It was a memorable event with lots of exciting activities and interactions. 📚🤝",
    "Ah, the school visit! It was a great initiative where all 4 clubs joined forces to create a memorable experience. The teamwork and enthusiasm were truly commendable! 🌟🤝"
  ],
  ];
  
  
  // Ensure the number of responses in botReply matches the number of message groups in userMessage
  if (botReply.length !== userMessage.length) {
    console.log("The number of message groups in botReply must match the number of message groups in userMessage.");
    console.log("userMessage", userMessage.length)
    console.log("botReply", botReply.length);
  }
  
  const alternative = [
    /* 1 */ "Can you ask something else. ❓",
    /* 2 */ "Can you provide more context or ask a different question? 🧐",
    /* 3 */ "I didn't quite catch that. Could you please rephrase your question? 🤔",
    /* 4 */ "I'm not sure I understand. Can you provide more context or ask a different question? 🧐",
    /* 5 */ "Hmm, that's a bit confusing. Could you try asking in a different way? 🤨",
    /* 6 */ "Could you try asking in a different way? 🤨",
    /* 7 */ "I'm here to help, but I need a clearer question to provide a meaningful answer. 🤷‍♂️",
    /* 8 */ "It seems like we're on different wavelengths. Please try asking something else. 📡",
    /* 9 */ "I apologize, but I couldn't grasp the meaning of your input. Please rephrase your question. 🙁",
    // More alternatives can be added here
  ];
  
  
  function calculateSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const short = len1 < len2 ? len1 : len2;
    const long = len1 > len2 ? len1 : len2;
    let matchCount = 0;
  
    for (let i = 0; i < short; i++) {
      if (str1[i] === str2[i]) {
        matchCount++;
      }
    }
    const similarity = matchCount / long;
    return similarity;
  }
  
  function cleanInput(input) {
    return input
      .replace(/[^\w\s'"]/gi, "")
      .replace(/ a |i feel |whats|please /g, " ")
      .replace(/ please/g, "")
      .trim();
  }
  
  function isCommonWord(word) {
    const commonWords = [
      'why', 'who', 'how', 'what', 'please', 'a', 'an', 'the', 'is', 'are', 'am', 'I',
      'you', 'he', 'she', 'we', 'they', 'it', 'and', 'but', 'or', 'not', 'in', 'on',
      'your', 'my', 'their', 'his', 'her', 'its', 'our', 'with', 'without', 'at', 'by',
    ];
    return commonWords.includes(word.toLowerCase());
  }
  
  function findCategoryIndex(word) {
    return botReply.findIndex(category => category.includes(word));
  }
  
  function getRandomResponseFromCategory(categoryIndex) {
    const responses = botReply[categoryIndex];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  function getRandomAlternativeResponse() {
    return alternative[Math.floor(Math.random() * alternative.length)];
  }
  
  // Use a Map for faster lookup of user messages
  let userMessagesMap = new Map();
  const storedUserMessagesMap = localStorage.getItem('userMessagesMap');
  if (storedUserMessagesMap) {
    userMessagesMap = new Map(JSON.parse(storedUserMessagesMap));
  } else {
    userMessage.forEach((messages, index) => {
      messages.forEach(message => {
        userMessagesMap.set(message.toLowerCase(), index);
      });
    });
    localStorage.setItem('userMessagesMap', JSON.stringify([...userMessagesMap]));
  }
  
  function findDirectMatch(text) {
    if (userMessagesMap.has(text)) {
      return getRandomResponseFromCategory(userMessagesMap.get(text));
    }
    return null;
  }
  
  export function findResponse(input) {
    let text = cleanInput(input);
  
    // Check for direct matches using the optimized function
    const directMatch = findDirectMatch(text);
    if (directMatch) {
      return directMatch;
    }
  
    //check each word
    const words = text.split(' ');
    for (const word of words) {
      if (isCommonWord(word)) {
        continue;
      }
      const categoryIndex = findCategoryIndex(word);
      if (categoryIndex !== -1) {
        return getRandomResponseFromCategory(categoryIndex);
      }
    }
  
    //check similarity
    const SIMILARITY_THRESHOLD = 0.6;
    for (let i = 0; i < userMessage.length; i++) {
      const messageGroup = userMessage[i];
      for (const message of messageGroup) {
        const similarityScore = calculateSimilarity(text, message);
        if (similarityScore >= SIMILARITY_THRESHOLD) {
          return getRandomResponseFromCategory(i);
        }
      }
    }
  
    return getRandomAlternativeResponse();
  }