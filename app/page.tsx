'use client';
import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import {LoadingAnimation} from "@/components/LoadingAnimation";
import { useEffect , useState } from "react";
import {Toaster} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function Home() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Check if we've already loaded before
    const hasLoadedBefore = localStorage.getItem('pageHasLoaded')
    
    if (hasLoadedBefore) {
      setReady(true)
    } else {
      const t = setTimeout(() => {
        setReady(true)
        localStorage.setItem('pageHasLoaded', 'true')
      }, 5000)
      
      return () => clearTimeout(t)
    }
  }, [])

  if (!ready) return <LoadingAnimation />

  
  return (
    <>
     <HeroSection />
     <FeaturesSection/>
     <HowItWorksSection/>

     <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
      }}
      />
    </>

  );
}
