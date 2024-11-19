import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Essential Camping Tips for Beginners',
        excerpt: 'Planning your first camping trip? Here are the must-know tips to ensure a great experience.',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: '2024-03-15',
        author: 'Alex Thompson',
        category: 'Tips & Guides'
    },
    {
        id: 2,
        title: 'Top 10 Camping Destinations in 2024',
        excerpt: 'Discover the most breathtaking camping spots that should be on your bucket list this year.',
        image: 'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: '2024-03-10',
        author: 'Maria Garcia',
        category: 'Destinations'
    },
    {
        id: 3,
        title: 'Sustainable Camping: Leave No Trace',
        excerpt: 'Learn how to minimize your environmental impact while enjoying the great outdoors.',
        image: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: '2024-03-05',
        author: 'Chris Palmer',
        category: 'Environment'
    }
];

export default function Blog() {
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                        Outdoor Insights
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
                        Expert advice, travel guides, and outdoor inspiration
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center">
                                        <User className="h-4 w-4 mr-2" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 font-poppins">{post.excerpt}</p>
                                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700">
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}