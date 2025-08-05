import { motion } from "framer-motion"
import ChatHeader from "./components/ChatHeader"
import ChatInput from "./components/ChatInput"
import { useEffect, useRef, useState } from "react"
import MessageBubble from "./components/MessageBubble"
import TypingIndicator from "./components/TypingIndicator"

export default function App() {

  const [messages, setMessages] = useState([
    { sender: "bot", text: "سلام من ربات هوش مصنوعی هستم" }
  ])

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const [isTyping, setIsTyping] = useState(false)
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input }

    setMessages([...messages, newMessage])
    setInput('');
    setIsTyping(true)

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "پاسخ نمونه از چت بات." }]);
      setIsTyping(false)
    }, 1500);
  };
  return (
    <dir dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col h-screen w-full bg-gradient-to-br from-blue-900 via-gray-900 to-black "
      >
        <ChatHeader />

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <MessageBubble key={index} sender={message.sender} text={message.text} />
          ))}

          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef}></div>
        </div>

        <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
      </motion.div>
    </dir>
  )
}
