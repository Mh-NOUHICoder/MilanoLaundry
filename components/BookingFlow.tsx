import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Sparkles, Truck, Check,
   ArrowLeft, ArrowRight, Router, Link, House } from 'lucide-react';
import { ListChecks, Shirt,Flame, Zap } from "lucide-react";// for services
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar as CalendarComponent } from './ui/calendar';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { toast } from 'react-hot-toast';
import {useRouter} from "next/navigation";

export function BookingFlow({  }: any) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [deliveryTime, setDeliveryTime] = useState('');

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM',
  ];

  const services = [
    { id: 'wash-fold', name: 'Wash & Fold', price: 25, icon: Shirt },
    { id: 'dry-clean', name: 'Dry Cleaning', price: 45, icon: Sparkles },
    { id: 'iron-press', name: 'Iron & Press', price: 20, icon: Flame },
    { id: 'express', name: 'Express Service (24h)', price: 15, icon: Clock },
  ];

  const steps = [
    { number: 1, title: 'Pickup', icon: Truck },
    { number: 2, title: 'Services', icon: Sparkles },
    { number: 3, title: 'Delivery', icon: Check },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const canProceedStep1 = selectedDate && selectedTimeSlot;
  const canProceedStep2 = selectedServices.length > 0;
  const canProceedStep3 = deliveryDate && deliveryTime;


  const router = useRouter();
  const handleComplete = async () => {
  try {
    // 1. Validate one more time
    if (!canProceedStep3) {
      toast.error("Please complete all delivery details");
      return;
    }

    // 2. Show loading state
    // toast.loading("Processing your booking...");

    // 3. Simulate API call/processing
    // await new Promise(resolve => setTimeout(resolve, 1500));

    // 4. Show success message
    toast.success("Booking confirmed! We'll send you a confirmation email shortly.");
    router.push("/");
    // 5. Redirect to home after delay to show the success message
   

  } catch (error) {
    console.error("Booking error:", error);
    toast.error("Failed to complete booking. Please try again.");
  }
};
  const getTotalPrice = () => {
    return services
      .filter(s => selectedServices.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-950">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8 mt-12">
            
            <h2 className="text-4xl text-white/70 sm:text-5xl mb-2 mt-6">
              Book Your <span className="text-cyan-400">Laundry Service</span>
            </h2>
            <p className="text-xl text-gray-400">
              Complete your booking in three simple steps
            </p>
          </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'bg-cyan-400 border-cyan-400 text-gray-950'
                        : 'bg-gray-800 border-gray-700 text-gray-400'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span className={`mt-2 text-sm ${currentStep >= step.number ? 'text-cyan-400' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 transition-all duration-300 ${
                      currentStep > step.number ? 'bg-cyan-400' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white">Schedule Pickup</h3>
                    <p className="text-gray-300">Choose your preferred date and time</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                      <Label className="text-gray-800 mb-2 block font-medium">Select Pickup Date</Label>
                      
                      <div className="bg-gray-700 border-gray-600 rounded-lg p-4">
                          <CalendarComponent
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                          />
                      </div>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-3 block">Select Time Slot</Label>
                    <div className="space-y-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                            selectedTimeSlot === slot
                              ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400'
                              : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span>{slot}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedDate && selectedTimeSlot && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-lg"
                  >
                    <p className="text-cyan-400">
                      <Check className="w-4 h-4 inline mr-2" />
                      Pickup scheduled for {selectedDate.toLocaleDateString()} at {selectedTimeSlot}
                    </p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <ListChecks className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl">Select Services</h3>
                    <p className="text-gray-400">Choose the services you need</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                        selectedServices.includes(service.id)
                          ? 'bg-cyan-400/20 border-cyan-400'
                          : 'bg-gray-900 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            selectedServices.includes(service.id)
                              ? 'bg-cyan-400/20'
                              : 'bg-gray-800'
                          }`}>
                            <service.icon className={`w-4 h-4 ${
                              selectedServices.includes(service.id)
                                ? 'text-cyan-400'
                                : 'text-gray-400'
                            }`} />
                          </div>
                          <div>
                            <h4 className={selectedServices.includes(service.id) ? 'text-cyan-400' : 'text-gray-100'}>
                              {service.name}
                            </h4>
                          </div>
                        </div>
                        <Checkbox
                          checked={selectedServices.includes(service.id)}
                          className={selectedServices.includes(service.id) ? 'border-cyan-400 bg-cyan-400' : ''}
                        />
                      </div>
                      <p className="text-2xl text-cyan-400">${service.price}</p>
                    </div>
                  ))}
                </div>

                {selectedServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 bg-gray-900 border border-gray-700 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xl text-gray-300">Total Price:</span>
                      <span className="text-3xl text-cyan-400">${getTotalPrice()}</span>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white">Schedule Delivery</h3>
                    <p className="text-gray-300">When would you like your clothes back?</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-gray-300 mb-3 block">Select Delivery Date</Label>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                      <CalendarComponent
                        mode="single"
                        selected={deliveryDate}
                        onSelect={setDeliveryDate}
                        disabled={(date) => {
                          const minDate = new Date(selectedDate!);
                          minDate.setDate(minDate.getDate() + 1);
                          return date < minDate;
                        }}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-3 block">Select Time Slot</Label>
                    <div className="space-y-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setDeliveryTime(slot)}
                          className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                            deliveryTime === slot
                              ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400'
                              : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span>{slot}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {deliveryDate && deliveryTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg mb-4">
                      <h4 className="text-xl mb-4 text-white">Booking Summary</h4>
                      <div className="space-y-3 text-gray-200">
                        <div className="flex justify-between">
                          <span>Pickup:</span>
                          <span className="text-cyan-400">
                            {selectedDate?.toLocaleDateString()} at {selectedTimeSlot}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Services:</span>
                          <span className="text-cyan-400">{selectedServices.length} selected</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery:</span>
                          <span className="text-cyan-400">
                            {deliveryDate.toLocaleDateString()} at {deliveryTime}
                          </span>
                        </div>
                        <div className="border-t border-gray-700 pt-3 flex justify-between items-center">
                          <span className="text-xl">Total:</span>
                          <span className="text-3xl text-cyan-400">${getTotalPrice()}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            
            onClick={() => setCurrentStep(prev => prev - 1)}
            disabled={currentStep === 1}
            className=" bg-white text-black hover:bg-gray-100 disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={
                (currentStep === 1 && !canProceedStep1) ||
                (currentStep === 2 && !canProceedStep2)
              }
              className="bg-cyan-400 text-gray-950 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Step
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleComplete}
              disabled={!canProceedStep3}
              className="bg-cyan-400 text-gray-950 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-4 h-4 mr-2" />
              Complete Booking
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}