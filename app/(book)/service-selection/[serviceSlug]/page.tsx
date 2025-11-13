import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  
  console.log('Received serviceSlug:', serviceSlug);

  const service = services.find((s) => s.slug === serviceSlug);
  console.log('Found service:', service);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  const formatDuration = (minutes?: number) => {
    if (!minutes) return 'Varies';
    const hours = minutes / 60;
    if (hours < 24) return `${hours}h`;
    return `${Math.floor(hours / 24)} days`;
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <div className="mb-4 mt-10">
            <Link href="/">
              <Button 
                className="bg-white border-gray-600 text-black hover:bg-gray-800 hover:text-white transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Services
              </Button>
            </Link>
          </div>

          {/* Main Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8">
            {/* Header */}
            <h1 className="text-3xl font-bold text-white mb-4">
              {service.name}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              {service.short}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-300 mb-2">Price</h3>
                <p className="text-3xl font-bold text-cyan-400">
                  ${service.price}
                </p>
                <p className="text-sm text-gray-400">starting price</p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-300 mb-2">Turnaround</h3>
                <p className="text-2xl font-bold text-cyan-400">
                  {formatDuration(service.durationMins)}
                </p>
                <p className="text-sm text-gray-400">estimated</p>
              </div>
            </div>

            {/* Service Details */}
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Service Details
              </h3>
              <div className="text-gray-300">
                {service.slug === 'wash-fold' && (
                  <div>
                    <p className="mb-4">
                      Our Wash & Fold service is perfect for everyday laundry needs. 
                      We carefully wash, dry, and fold your garments with attention 
                      to fabric care and hygiene standards.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-cyan-100">
                      <li>Gentle detergent suitable for all fabrics</li>
                      <li>Temperature-appropriate washing</li>
                      <li>Careful folding and packaging</li>
                      <li>Quality inspection before delivery</li>
                    </ul>
                  </div>
                )}
                {service.slug === 'dry-cleaning' && (
                  <div>
                    <p className="mb-4">
                      Professional dry cleaning for delicate fabrics and formal wear. 
                      We handle suits, dresses, and specialty items with the care they 
                      deserve using eco-friendly solvents.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-cyan-100">
                      <li>Eco-friendly solvent system</li>
                      <li>Expert stain removal</li>
                      <li>Professional pressing and finishing</li>
                      <li>Garment protection packaging</li>
                    </ul>
                  </div>
                )}
                {service.slug === 'express' && (
                  <div>
                    <p className="mb-4">
                      Need it done fast? Our express service guarantees same-day 
                      completion for your urgent laundry needs. Perfect for business 
                      trips or last-minute plans.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-cyan-100">
                      <li>Same-day service completion</li>
                      <li>Priority processing</li>
                      <li>Extended business hours</li>
                      <li>Emergency pickup available</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Action Buttons - Modern Outline */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/service-selection"
                className="bg-cyan-500 text-white px-8 py-4 sm:py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 border-2 border-cyan-500 hover:border-cyan-600 text-center transform hover:scale-105 active:scale-95"
              >
                Book now
              </Link>
              <button className="bg-transparent text-cyan-100 px-8 py-4 sm:py-3 rounded-xl font-semibold hover:bg-cyan-100/10 transition-all duration-300 border-2 border-cyan-100 hover:border-cyan-300 text-center transform hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}