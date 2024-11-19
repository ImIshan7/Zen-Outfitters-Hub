import { motion } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { useState } from 'react';

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <>
            {/* Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg z-50"
            >
                <MessageSquare className="h-6 w-6" />
            </motion.button>

            {/* Chat Window */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 100 }}
                className={`fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-50 ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
                <div className="p-4 bg-emerald-600 text-white rounded-t-lg flex justify-between items-center">
                    <h3 className="font-semibold font-montserrat">Customer Support</h3>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="h-96 p-4 overflow-y-auto">
                    <div className="space-y-4">
                        <div className="flex justify-start">
                            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                                <p className="text-gray-800 font-poppins">
                                    Hello! How can I help you today?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-600 text-white p-2 rounded-lg"
                        >
                            <Send className="h-5 w-5" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}