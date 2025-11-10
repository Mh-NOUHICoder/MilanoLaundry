import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

export default async function ServiceDetailPage({ params }: ServicePageProps) { // ← Add async here
  // Await the params promise
  const { serviceSlug } = await params; // ← Add await here
  
  console.log('Received serviceSlug:', serviceSlug); // Debug

  const service = services.find((s) => s.slug === serviceSlug); // ← Use serviceSlug
  console.log('Found service:', service); // Debug

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
    <div className="container mx-auto px-4 py-8">
      

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <div>
            <Link
              href="/service-selection"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              ← Back to all services
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {service.name}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {service.short}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Price</h3>
              <p className="text-3xl font-bold text-blue-600">
                ${service.price}
              </p>
              <p className="text-sm text-gray-500">starting price</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Turnaround</h3>
              <p className="text-2xl font-bold text-gray-800">
                {formatDuration(service.durationMins)}
              </p>
              <p className="text-sm text-gray-500">estimated</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Service Details
            </h3>
            <div className="prose text-gray-600">
              {service.slug === 'wash-fold' && (
                <div>
                  <p className="mb-4">
                    Our Wash & Fold service is perfect for everyday laundry needs. 
                    We carefully wash, dry, and fold your garments with attention 
                    to fabric care and hygiene standards.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
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
                  <ul className="list-disc list-inside space-y-2">
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
                  <ul className="list-disc list-inside space-y-2">
                    <li>Same-day service completion</li>
                    <li>Priority processing</li>
                    <li>Extended business hours</li>
                    <li>Emergency pickup available</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link 
              href="/checkout"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book This Service
            </Link>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}