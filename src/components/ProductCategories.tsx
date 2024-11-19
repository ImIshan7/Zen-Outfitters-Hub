import { motion } from 'framer-motion';
import { Tent, Moon, Utensils, Backpack, Flashlight, Compass } from 'lucide-react';

const categories = [
    { name: 'Tents', icon: Tent, count: 24 },
    { name: 'Sleeping Gear', icon: Moon, count: 18 },
    { name: 'Cooking', icon: Utensils, count: 32 },
    { name: 'Backpacks', icon: Backpack, count: 15 },
    { name: 'Lighting', icon: Flashlight, count: 21 },
    { name: 'Navigation', icon: Compass, count: 9 },
];

export default function ProductCategories() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Shop by Category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
                        Find the perfect gear for your next adventure
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer group"
                        >
                            <div className="mb-4 relative">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200"
                                >
                                    <category.icon className="h-8 w-8 text-emerald-600" />
                                </motion.div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1 font-montserrat">
                                {category.name}
                            </h3>
                            <p className="text-sm text-gray-500 font-poppins">{category.count} items</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}