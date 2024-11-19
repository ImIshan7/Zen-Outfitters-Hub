import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

const events = [
    {
        id: 1,
        title: 'Beginner\'s Camping Workshop',
        date: '2024-04-15',
        location: 'Mountain View Park',
        image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        attendees: 45
    },
    {
        id: 2,
        title: 'Trail Cleanup Day',
        date: '2024-04-22',
        location: 'Forest Ridge Trail',
        image: 'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        attendees: 32
    },
    {
        id: 3,
        title: 'Night Sky Photography',
        date: '2024-05-01',
        location: 'Desert View Point',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        attendees: 28
    }
];

export default function Community() {
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
                        Join Our Community
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
                        Connect with fellow outdoor enthusiasts and participate in exciting events
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-48">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Upcoming
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                                    {event.title}
                                </h3>
                                <div className="space-y-2 text-gray-600 font-poppins">
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                                        {new Date(event.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                                        {event.location}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="h-5 w-5 mr-2 text-emerald-600" />
                                        {event.attendees} attending
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                                >
                                    Join Event
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
                    <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
                        View All Events
                    </button>
                </motion.div>
            </div>
        </section>
    );
}