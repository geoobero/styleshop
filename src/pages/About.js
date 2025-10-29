import Navbar from "@/components/Navbar"

export default function About() {
    const teamMembers = [
        { id: 1, name: "John Doe", role: "Founder & CEO", bio: "Passionate about ecommerce and customer satisfaction." },
        { id: 2, name: "Jane Smith", role: "Head of Design", bio: "Creating beautiful and functional user experiences." },
        { id: 3, name: "Mike Johnson", role: "Marketing Director", bio: "Driving growth through innovative strategies." }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* About Hero */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About StyleShop</h1>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                        We are dedicated to providing high-quality products with exceptional customer service.
                        Our mission is to make online shopping seamless and enjoyable for everyone.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2020, StyleShop started as a small boutique and has grown into
                                a trusted online destination for quality products. We believe in transparency,
                                quality, and putting our customers first.
                            </p>
                            <p className="text-gray-600">
                                Every product in our catalog is carefully selected to ensure it meets our
                                high standards for quality and value. We work directly with manufacturers
                                to bring you the best prices without compromising on quality.
                            </p>
                        </div>
                        <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Company Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="text-center">
                                <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-teal-600 font-semibold">Avatar</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                                <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}