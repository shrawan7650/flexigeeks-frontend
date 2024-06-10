import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'FlexiBot';

const config = {
  initialMessages: [createChatBotMessage(`Hey Dev's ! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#5AB2FF',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
    
  },
  
  
};

export default config;

