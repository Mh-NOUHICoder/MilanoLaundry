// milano_laundry/app/(book)/checkout/page.tsx - This is a Server Component

import { Suspense } from "react";
// Import the component containing the client-side logic
import CheckoutContent from "./CheckoutContent"; 

export default function CheckoutPage() {
  return (
    // Wrap the component that uses useSearchParams/useRouter
    <Suspense fallback={<div className="p-8 text-center">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}