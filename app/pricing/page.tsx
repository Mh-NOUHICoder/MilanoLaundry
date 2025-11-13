import Link from 'next/link';
import { Check, Star, Zap, Crown, Sparkles, Shield, Truck, Clock, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const oneTimeServices = [
  {
    name: 'Wash & Fold',
    description: 'Perfect for everyday laundry needs',
    price: 25,
    originalPrice: 30,
    popular: false,
    features: [
      'Gentle detergent for all fabrics',
      'Temperature-appropriate washing',
      'Eco-friendly drying',
      'Careful folding & packaging',
      '24-48 hour turnaround'
    ],
    icon: Sparkles
  },
  {
    name: 'Dry Cleaning',
    description: 'Professional care for delicate fabrics',
    price: 45,
    originalPrice: 55,
    popular: true,
    features: [
      'Eco-friendly solvent system',
      'Expert stain removal',
      'Professional pressing',
      'Garment protection',
      '3-5 day turnaround'
    ],
    icon: Crown
  },
  {
    name: 'Express Service',
    description: 'Same-day service for urgent needs',
    price: 35,
    originalPrice: 40,
    popular: false,
    features: [
      'Same-day completion',
      'Priority processing',
      'Extended business hours',
      'Emergency pickup',
      'By 8 PM delivery'
    ],
    icon: Zap
  }
];

const subscriptionPlans = [
  {
    name: 'Essential',
    description: 'Perfect for individuals',
    monthlyPrice: 79,
    yearlyPrice: 79 * 12 * 0.8, // 20% discount
    popular: false,
    savings: 'Save 20% annually',
    features: [
      '4 Wash & Fold loads per month',
      'Free pickup & delivery',
      '10% off dry cleaning',
      'Standard turnaround',
      'Email support'
    ],
    icon: Sparkles
  },
  {
    name: 'Professional',
    description: 'Great for busy professionals',
    monthlyPrice: 149,
    yearlyPrice: 149 * 12 * 0.8, // 20% discount
    popular: true,
    savings: 'Save 20% annually',
    features: [
      '8 Wash & Fold loads per month',
      '2 Dry Cleaning items monthly',
      'Free express upgrade',
      'Priority scheduling',
      'Dedicated account manager',
      'Phone & email support'
    ],
    icon: Crown
  },
  {
    name: 'Family',
    description: 'Ideal for families',
    monthlyPrice: 249,
    yearlyPrice: 249 * 12 * 0.8, // 20% discount
    popular: false,
    savings: 'Save 20% annually',
    features: [
      '15 Wash & Fold loads per month',
      '5 Dry Cleaning items monthly',
      'Free express on all orders',
      '24/7 priority support',
      'Monthly deep clean item',
      'Flexible scheduling',
      'Cancel anytime'
    ],
    icon: Star
  }
];

const addOnServices = [
  {
    name: 'Stain Treatment',
    price: 5,
    description: 'Professional stain removal for tough spots'
  },
  {
    name: 'Fabric Softener',
    price: 3,
    description: 'Add fabric softener to your wash'
  },
  {
    name: 'Eco Detergent Upgrade',
    price: 2,
    description: 'Premium eco-friendly detergent'
  },
  {
    name: 'Special Handling',
    price: 10,
    description: 'Extra care for delicate items'
  }
];

const features = [
  {
    icon: Truck,
    title: 'Free Pickup & Delivery',
    description: 'We come to you at no extra cost'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction or we re-clean for free'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Environmentally responsible cleaning'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Book pickup and delivery around your schedule'
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black mt-16 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Just premium laundry service at fair prices.
          </p>
          <div className="flex items-center justify-center gap-4 text-cyan-400">
            <Check className="w-5 h-5" />
            <span>Free pickup & delivery</span>
            <Check className="w-5 h-5" />
            <span>Quality guarantee</span>
            <Check className="w-5 h-5" />
            <span>Eco-friendly</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">One-Time Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Perfect for occasional needs or trying us out for the first time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {oneTimeServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-900 border rounded-2xl p-8 relative transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${
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
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">${service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${service.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">per load</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking">
                    <Button className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      service.popular 
                        ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}>
                      Book Now
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Subscription Plans</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Save time and money with our subscription plans. Perfect for regular laundry needs.
            </p>
            <div className="inline-flex items-center bg-gray-800 rounded-full p-1 mt-6">
              <button className="px-6 py-2 rounded-full bg-cyan-500 text-gray-900 font-semibold">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full text-gray-300 font-semibold">
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-800 border rounded-2xl p-8 relative transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-cyan-400">${plan.monthlyPrice}</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    <p className="text-cyan-400 text-sm font-semibold">{plan.savings}</p>
                    <p className="text-gray-400 text-sm">Yearly: ${plan.yearlyPrice}/year</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking?plan=subscription">
                    <Button className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Add-On Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enhance your laundry experience with these optional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-3">${service.price}</div>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-lg">
                Everything you need to know about our pricing and services
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  question: 'Are there any hidden fees?',
                  answer: 'No, our pricing is completely transparent. The price you see is what you pay, including free pickup and delivery within our service area.'
                },
                {
                  question: 'What is included in the price?',
                  answer: 'All prices include washing, drying, folding, quality inspection, eco-friendly detergent, and free pickup/delivery.'
                },
                {
                  question: 'Can I cancel my subscription anytime?',
                  answer: 'Yes, you can cancel your subscription at any time without any cancellation fees. Your subscription will remain active until the end of your billing period.'
                },
                {
                  question: 'Do you offer discounts for large orders?',
                  answer: 'Yes, we offer volume discounts for orders over 50 lbs. Contact us for custom pricing for large or commercial orders.'
                },
                {
                  question: 'What is your refund policy?',
                  answer: 'If you are not satisfied with our service, we offer a 100% satisfaction guarantee. We will re-clean your items for free or provide a full refund.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Milano Laundry with their laundry needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/service-selection">
              <Button className="bg-cyan-500 text-gray-900 hover:bg-cyan-400 px-8 py-3 text-lg font-semibold">
                Book Your First Service
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                
                className="bg-transparent border-2 border-cyan-100 text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}