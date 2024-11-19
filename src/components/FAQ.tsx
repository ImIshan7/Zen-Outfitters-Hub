import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: 'What is your shipping policy?',
        answer: 'We offer free shipping on orders over $100. Standard shipping takes 3-5 business days, while express shipping is available for 1-2 business days delivery.'
    },
    {
        id: 2,
        question: 'How do I return an item?',
        answer: 'Returns are accepted within 30 days of purchase. Items must be unused and in original packaging. Contact our support team to initiate a return.'
    },
    {
        id: 3,
        question: 'Do you offer international shipping?',
        answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.'
    },
    {
        id: 4,
        question: 'How do I track my order?',
        answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard."
    }
];

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt="Mountain landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 to-gray-900/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-emerald-100 max-w-2xl mx-auto font-poppins">
                        Find answers to common questions about our products and services
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-colors"
                        >
                            <motion.button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between p-6 text-left"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                <span className="text-lg font-semibold text-white font-montserrat">
                  {faq.question}
                </span>
                                <motion.div
                                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {openId === faq.id ? (
                                        <Minus className="h-5 w-5 text-emerald-400" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-emerald-400" />
                                    )}
                                </motion.div>
                            </motion.button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openId === faq.id ? 'auto' : 0,
                                    opacity: openId === faq.id ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0">
                                    <p className="text-emerald-100 font-poppins leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-emerald-100 mb-6">
                        Still have questions? We're here to help!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors shadow-lg"
                    >
                        Contact Support
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}