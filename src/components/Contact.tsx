import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative py-20">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt="Mountain background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-gray-200 max-w-2xl mx-auto">
                        Have questions? We're here to help you find the perfect gear for your next adventure
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center mb-4">
                            <Mail className="h-6 w-6 text-emerald-600 mr-2" />
                            <h3 className="text-lg font-semibold">Email Us</h3>
                        </div>
                        <p className="text-gray-600">info@zenoutfitters.com</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center mb-4">
                            <Phone className="h-6 w-6 text-emerald-600 mr-2" />
                            <h3 className="text-lg font-semibold">Call Us</h3>
                        </div>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center mb-4">
                            <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                            <h3 className="text-lg font-semibold">Visit Us</h3>
                        </div>
                        <p className="text-gray-600">123 Adventure Ave, Mountain View, CA 94043</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg"
                >
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}