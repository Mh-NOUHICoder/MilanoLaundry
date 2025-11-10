import { Suspense } from 'react'
import CheckoutContent from './CheckoutContent'
import Loading from '@/components/ui/Loading'; // or your loading component

export default function CheckoutPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CheckoutContent />
    </Suspense>
  )
}