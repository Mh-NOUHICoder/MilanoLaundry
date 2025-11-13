'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Google Maps Component
const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.2303835233!2d9.17773225!3d45.46273385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sma!4v1763041149734!5m2!1sen!2sma"
        height="100%"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Milano Laundry Location"
        className="rounded-lg"
      />
    </div>
  );
};

// Interactive Google Maps with React
const InteractiveGoogleMap = () => {
  return (
    <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center mt-10">
      <div className="text-center p-8">
        <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Interactive Map</h3>
        <p className="text-gray-400 mb-4">123 Fashion District, Milano</p>
        <Button 
          onClick={() => window.open('https://maps.google.com/?q=123+Fashion+District+Milano', '_blank')}
          className="bg-cyan-500 text-gray-900 hover:bg-cyan-400"
        >
          Open in Google Maps
        </Button>
      </div>
    </div>
  );
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Sun 6:00 AM - 10:00 PM'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@milanolaundry.com',
    description: 'We respond within 2 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Fashion District, Milano',
    description: 'Visit our main facility'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: '24/7 Online Booking',
    description: 'Pickup & Delivery available'
  }
];

const faqs = [
  {
    question: 'How does pickup and delivery work?',
    answer: 'We offer free pickup and delivery within our service area. Schedule your preferred time and we\'ll handle the rest.'
  },
  {
    question: 'What are your turnaround times?',
    answer: 'Standard service is 48 hours, express service is same-day (by 8 PM), and premium service is 24 hours.'
  },
  {
    question: 'Do you use eco-friendly products?',
    answer: 'Yes! We use environmentally friendly detergents and energy-efficient equipment in all our processes.'
  },
  {
    question: 'What is your satisfaction guarantee?',
    answer: 'If you\'re not completely satisfied with our service, we\'ll re-clean your items for free or provide a full refund.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Question</option>
                      <option value="booking">Booking Help</option>
                      <option value="complaint">Complaint</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 text-gray-900 hover:bg-cyan-400 py-3 text-lg font-semibold transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-cyan-400 mb-1">{item.details}</p>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                      <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Location</h2>
            <p className="text-gray-400 text-lg">
              Stop by our main facility in the Fashion District
            </p>
          </div>
          
          {/* Real Google Maps Embed */}
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700 max-w-6xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <GoogleMapEmbed />
            </div>
            <div className="mt-4 text-center">
              <p className="text-cyan-400 font-semibold">123 Fashion District, Milano</p>
              <p className="text-gray-400 text-sm">Open Monday - Sunday, 7:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Additional Location Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Business Hours</h3>
              <p className="text-gray-400 text-sm">Mon-Sun: 7AM-9PM</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Parking</h3>
              <p className="text-gray-400 text-sm">Free parking available</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Store Phone</h3>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}