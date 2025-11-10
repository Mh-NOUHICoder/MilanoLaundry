import Link from 'next/link';

export default function ServicesNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Service Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The service you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/service-selection"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Back to Services
      </Link>
    </div>
  );
}