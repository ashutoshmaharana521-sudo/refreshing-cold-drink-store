
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    {role: 'bot', content: 'Hello! I am SipRefresh Business Assistant. How can I help you today? You can ask me about franchise costs, ROI, or our product range.'}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const botResponse = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition duration-300"
        >
          <i className="fas fa-robot text-2xl"></i>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-slideUp">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <i className="fas fa-robot"></i>
              </div>
              <span className="font-bold">Business Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-blue-200 transition">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 text-slate-400">
                  <i className="fas fa-circle-notch fa-spin"></i> Assistant is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full outline-none focus:ring-2 focus:ring-blue-200 transition text-sm"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;
