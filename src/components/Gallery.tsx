import { motion } from 'framer-motion';

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Camping under stars"
    },
    {
        url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Mountain hiking"
    },
    {
        url: "https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Lake camping"
    },
    {
        url: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Forest adventure"
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Adventure Gallery</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore the great outdoors through the eyes of our community
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-lg"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={image.url}
                                alt={image.title}
                                className="w-full h-64 object-cover"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                            >
                                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}