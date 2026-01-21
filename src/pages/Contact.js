import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className='fixed top-0 w-full'>
                <Navbar />
            </div>

            {/* Contact Hero */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-teal-600 text-white py-3 rounded-lg text-black font-semibold hover:bg-teal-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-teal-100 p-3 rounded-full">
                                            <span className="text-teal-600">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Address</h3>
                                            <p className="text-gray-600">123 Commerce Street<br />City, State 12345</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-teal-100 p-3 rounded-full">
                                            <span className="text-teal-600">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Phone</h3>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-teal-100 p-3 rounded-full">
                                            <span className="text-teal-600">✉️</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Email</h3>
                                            <p className="text-gray-600">support@styleshop.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-teal-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}