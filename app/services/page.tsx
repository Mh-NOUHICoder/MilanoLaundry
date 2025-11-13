import Link from 'next/link';
import { Sparkles, Shirt, Clock, Flame, Truck, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    slug: 'wash-fold',
    name: 'Wash & Fold',
    description: 'Professional washing, drying, and folding of your everyday laundry',
    price: 25,
    icon: Shirt,
    features: ['Gentle detergent', 'Temperature control', 'Eco-friendly drying', '24h turnaround'],
    popular: true
  },
  {
    slug: 'dry-cleaning',
    name: 'Dry Cleaning',
    description: 'Expert care for delicate fabrics and formal wear',
    price: 45,
    icon: Sparkles,
    features: ['Eco-friendly solvents', 'Stain removal', 'Professional pressing', 'Garment protection'],
    popular: false
  },
  {
    slug: 'express',
    name: 'Express Service',
    description: 'Same-day service for your urgent laundry needs',
    price: 35,
    icon: Clock,
    features: ['Same-day completion', 'Priority processing', 'Extended hours', 'Emergency pickup'],
    popular: true
  },
  {
    slug: 'iron-press',
    name: 'Iron & Press',
    description: 'Professional ironing for crisp, fresh-looking clothes',
    price: 20,
    icon: Flame,
    features: ['Steam ironing', 'Wrinkle removal', 'Fabric protection', 'Same-day service'],
    popular: false
  }
];

const features = [
  {
    icon: Truck,
    title: 'Free Pickup & Delivery',
    description: 'We come to you - schedule pickup and delivery at your convenience'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: '100% satisfaction guarantee on all our services'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use environmentally friendly detergents and processes'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Premium laundry services designed to make your life easier and your clothes fresher
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our range of professional laundry services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.slug}
                  className={`bg-gray-900 border rounded-xl p-8 relative transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    service.popular 
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                      : 'border-gray-800'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                    <span className="text-gray-400 ml-2">starting price</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button className="w-full bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/booking" className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-600 text-white hover:bg-gray-800 transition-all duration-300"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your first pickup and experience the Milano Laundry difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="bg-cyan-500 text-gray-900 hover:bg-cyan-400 px-8 py-3 text-lg">
                Book Your First Service
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}