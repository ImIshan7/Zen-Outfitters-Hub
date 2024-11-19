import { motion } from 'framer-motion';

export default function PromoSection() {
    return (
        <section className="py-12 bg-emerald-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="text-3xl font-bold mb-4">Spring Sale! Up to 40% Off</h2>
                        <p className="mb-6">Get ready for your next adventure with our biggest sale of the season.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Shop the Sale
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
                            alt="Camping gear on sale"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                            40% OFF
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}