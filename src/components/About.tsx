import { motion } from 'framer-motion';
// @ts-ignore
import { Leaf, Shield, Wind } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                            alt="Our store"
                            className="rounded-lg shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-8">
                            At Zen Outfitters, we believe that nature is the ultimate source of peace and renewal.
                            Founded in 2020, we've made it our mission to provide mindful adventurers with
                            high-quality gear that respects both the environment and your desire for comfort.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                                    <Leaf className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                                <p className="text-sm text-gray-600">Sustainable materials and practices</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                                    <Shield className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold mb-2">Quality First</h3>
                                <p className="text-sm text-gray-600">Premium gear built to last</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                                    <Wind className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold mb-2">Expert Tested</h3>
                                <p className="text-sm text-gray-600">Field-tested by professionals</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}