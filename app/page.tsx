'use client';
import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LoadingScreen from "@/components/LoadingScreen";
import {LoadingAnimation} from "@/components/LoadingAnimation";
import { useEffect , useState } from "react";


export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 5000);
    // replace timeout with real readiness checks if available
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <LoadingAnimation />;
  return (
    <>
     <HeroSection />
     <FeaturesSection/>
     <HowItWorksSection/>
    </>

  );
}
