import { Check, Users, Award, Clock, Heart, Leaf } from 'lucide-react';

const stats = [
  { number: '5,000+', label: 'Happy Customers' },
  { number: '50,000+', label: 'Items Cleaned' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Customer Support' }
];

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We never compromise on the quality of our cleaning and customer service.'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority in everything we do.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Committed to using environmentally friendly products and processes.'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Always on time, every time. Your schedule is our schedule.'
  }
];

const team = [
  {
    name: 'Mehdi ',
    role: 'Founder & CEO',
    image: '/team/marco.jpg',
    description: 'With over 15 years in the laundry industry, Marco founded Milano Laundry to revolutionize home cleaning services.'
  },
  {
    name: 'Sophia Chen',
    role: 'Operations Manager',
    image: '/team/sophia.jpg',
    description: 'Sophia ensures every order meets our high standards and coordinates our pickup and delivery team.'
  },
  {
    name: 'David Kim',
    role: 'Head of Quality',
    image: '/team/david.jpg',
    description: 'David oversees our cleaning processes and maintains our quality control standards.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white mt-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-cyan-400">Milano Laundry</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionizing laundry services with premium quality, convenience, and environmental responsibility
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg mb-6">
                Founded in 2018, Milano Laundry began with a simple mission: to provide busy professionals and families 
                with premium laundry services that save time while delivering exceptional quality.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                What started as a single location has grown into a trusted service used by thousands of customers 
                across the city. We combine traditional cleaning expertise with modern technology and eco-friendly practices.
              </p>
              <div className="space-y-3">
                {[
                  'Free pickup and delivery service',
                  'Eco-friendly detergents and processes',
                  'Quality guarantee on all services',
                  '24/7 customer support',
                  'Same-day express service available'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <img
                src="/about-hero.jpg"
                alt="Milano Laundry Facility"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-white">Our Commitment</h3>
              <p className="text-gray-300">
                We're committed to making your life easier while reducing our environmental impact. 
                Every garment is treated with care and every service is backed by our quality guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Milano Laundry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The passionate professionals dedicated to making your laundry experience exceptional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}