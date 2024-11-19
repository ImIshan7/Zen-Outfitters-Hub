import { motion } from 'framer-motion';
import { Tag, Clock, Package } from 'lucide-react';

const offers = [
    {
        id: 1,
        title: 'Spring Bundle Deal',
        description: 'Get a 2-person tent, sleeping bags, and camping stove at 30% off',
        discount: '30% OFF',
        endDate: '2024-04-30',
        image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        originalPrice: 599.99,
        discountedPrice: 419.99
    },
    {
        id: 2,
        title: 'First-Time Buyer Discount',
        description: 'Save 15% on your first purchase with code WELCOME15',
        discount: '15% OFF',
        endDate: '2024-12-31',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        promoCode: 'WELCOME15'
    },
    {
        id: 3,
        title: 'Clearance Sale',
        description: 'Up to 50% off on selected camping gear',
        discount: 'UP TO 50% OFF',
        endDate: '2024-04-15',
        image: 'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
];

export default function SpecialOffers() {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 font-montserrat">Special Offers</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto font-poppins">
                        Don't miss out on these exclusive deals and discounts
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
                        >
                            <div className="relative h-48">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                                    {offer.discount}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 font-montserrat">{offer.title}</h3>
                                <p className="text-gray-300 mb-4 font-poppins">{offer.description}</p>

                                <div className="space-y-3">
                                    {offer.promoCode && (
                                        <div className="flex items-center">
                                            <Tag className="h-5 w-5 mr-2 text-emerald-400" />
                                            <span className="font-mono bg-gray-700 px-2 py-1 rounded">
                        {offer.promoCode}
                      </span>
                                        </div>
                                    )}

                                    {offer.originalPrice && (
                                        <div className="flex items-center">
                                            <Package className="h-5 w-5 mr-2 text-emerald-400" />
                                            <span className="line-through text-gray-400">${offer.originalPrice}</span>
                                            <span className="ml-2 text-lg font-bold text-emerald-400">
                        ${offer.discountedPrice}
                      </span>
                                        </div>
                                    )}

                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 mr-2 text-emerald-400" />
                                        <span className="text-gray-300">
                      Ends {new Date(offer.endDate).toLocaleDateString()}
                    </span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                                >
                                    Claim Offer
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-300 mb-4 font-poppins">
                        Subscribe to our newsletter for exclusive deals and offers
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}