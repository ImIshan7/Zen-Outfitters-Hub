import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Adventure Enthusiast',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        content: 'The quality of the camping gear exceeded my expectations. Perfect for my hiking trips in the Rockies. The attention to detail and durability is outstanding.',
        rating: 5,
        location: 'Colorado, USA',
        tripType: 'Mountain Hiking'
    },
    {
        id: 2,
        name: 'Mike Chen',
        role: 'Professional Guide',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        content: 'As a professional guide, I trust Zen Outfitters for all my equipment needs. Their gear has never let me down, even in the most challenging conditions.',
        rating: 5,
        location: 'British Columbia, Canada',
        tripType: 'Wilderness Expeditions'
    },
    {
        id: 3,
        name: 'Emma Davis',
        role: 'Weekend Warrior',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        content: 'Great customer service and fast shipping. The team really knows their stuff and helped me choose the perfect gear for my skill level.',
        rating: 5,
        location: 'Oregon, USA',
        tripType: 'Weekend Camping'
    },
    {
        id: 4,
        name: 'Alex Thompson',
        role: 'Mountain Climber',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        content: "The durability of their equipment is outstanding. I've used their gear on multiple expeditions, and it never disappoints. Worth every penny!",
        rating: 5,
        location: 'Utah, USA',
        tripType: 'Alpine Climbing'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                     style={{ animation: 'float 10s ease-in-out infinite' }} />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                     style={{ animation: 'float 15s ease-in-out infinite' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                        Voices from the Trail
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
                        Real stories from our community of outdoor enthusiasts
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative h-96 lg:h-auto">
                                <motion.img
                                    key={testimonials[currentIndex].image}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                            </div>

                            {/* Content Section */}
                            <div className="relative p-8 lg:p-12">
                                <Quote className="absolute top-8 left-8 h-8 w-8 text-emerald-200 opacity-50" />

                                <motion.div
                                    key={testimonials[currentIndex].id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10"
                                >
                                    <div className="flex mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-8 font-poppins">
                                        "{testimonials[currentIndex].content}"
                                    </blockquote>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-gray-900 font-montserrat">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <div className="text-emerald-600 font-medium">
                                            {testimonials[currentIndex].role}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                                            <span>{testimonials[currentIndex].location}</span>
                                            <span>•</span>
                                            <span>{testimonials[currentIndex].tripType}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white shadow-lg hover:bg-emerald-50 transition-colors"
                        >
                            <ArrowLeft className="h-6 w-6 text-emerald-600" />
                        </motion.button>

                        <div className="flex items-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                        index === currentIndex ? 'bg-emerald-600' : 'bg-emerald-200'
                                    }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white shadow-lg hover:bg-emerald-50 transition-colors"
                        >
                            <ArrowRight className="h-6 w-6 text-emerald-600" />
                        </motion.button>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(30px, 20px) rotate(5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
        `}
            </style>
        </section>
    );
}