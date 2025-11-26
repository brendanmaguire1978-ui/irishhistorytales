import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateStorytellerResponse } from '../services/geminiService';

const Storyteller: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Dia duit! I am Old Finbar, the digital Seanachaí. Ask me of the high kings, the hidden folk, or the writings of Darren Beaming." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for questions from other parts of the app (e.g., BookSection)
  useEffect(() => {
    const handleCustomEvent = (e: CustomEvent) => {
      const text = e.detail;
      if (text) {
        setInput(text);
        // Optional: Auto-send if desired, but letting user confirm is usually better UX
        // To auto-send, we would call a modified handleSend logic here.
      }
    };

    window.addEventListener('askStoryteller', handleCustomEvent as EventListener);
    return () => {
      window.removeEventListener('askStoryteller', handleCustomEvent as EventListener);
    };
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateStorytellerResponse(userText);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "The spirits are quiet today. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="storyteller" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-2">The Virtual Seanachaí</h2>
          <p className="text-stone-600">Powered by Gemini AI • Connected to Google Search</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-300 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-emerald-900 p-4 text-center border-b border-emerald-800">
            <p className="text-emerald-100 text-sm">Ask about Irish History, Folklore, or check book details</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`
                    max-w-[80%] rounded-2xl p-4 shadow-sm relative
                    ${msg.role === 'user' 
                      ? 'bg-emerald-800 text-white rounded-br-none' 
                      : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'}
                    ${msg.isError ? 'border-red-500 bg-red-50' : ''}
                  `}
                >
                  <p className="leading-relaxed whitespace-pre-wrap text-sm md:text-base">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-stone-200">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the Great Famine, or details on Darren's books..."
                className="flex-1 p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-stone-50"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="p-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            {!process.env.API_KEY && (
               <p className="text-xs text-red-500 mt-2 flex items-center">
                 <AlertCircle className="w-3 h-3 mr-1"/> API Key missing. Chat will not function.
               </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Storyteller;