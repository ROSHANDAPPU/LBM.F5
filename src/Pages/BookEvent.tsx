import { useState } from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import { Input } from "@/Components/UI/input";
import { Label } from "@/Components/UI/label";
import { Textarea } from "@/Components/UI/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/UI/select";
import { Checkbox } from "@/Components/UI/checkbox";
import { useToast } from "@/Hooks/use-toast";
import Testimonials from "@/Components/Testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/UI/accordion";
import CTAPanel from "@/Components/CTAPanel";

const BookEvent = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Event Basics
    eventDate: '',
    guestCount: '',
    eventType: '',
    venueKnown: '',
    venueAddress: '',

    // Menu Interests
    menuCategories: [] as string[],
    dietaryNeeds: '',
    serviceStyle: '',

    // Details
    budgetRange: '',
    timeline: '',
    notes: '',
    moodboard: null as File | null,

    // Contact
    name: '',
    email: '',
    phone: '',
    bestTime: '',
  });

  const steps = [
    { id: 1, title: 'Event Basics', description: 'Date, guests & venue' },
    { id: 2, title: 'Menu Interests', description: 'Preferences & dietary needs' },
    { id: 3, title: 'Details', description: 'Budget & specifications' },
    { id: 4, title: 'Contact', description: 'Your information' },
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMenuCategoryChange = (category: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      menuCategories: checked
        ? [...prev.menuCategories, category]
        : prev.menuCategories.filter(c => c !== category)
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      updateFormData('moodboard', file);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Form submitted successfully!",
      description: "We'll be in touch within 24 hours to discuss your event.",
    });
    // Reset form or redirect
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="eventDate">Event Date (or approximate)*</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateFormData('eventDate', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="guestCount">Number of Guests*</Label>
                <Input
                  id="guestCount"
                  type="number"
                  placeholder="e.g., 50"
                  value={formData.guestCount}
                  onChange={(e) => updateFormData('guestCount', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="eventType">Event Type*</Label>
              <Select value={formData.eventType} onValueChange={(value) => updateFormData('eventType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="graduation">Graduation</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="venueKnown">Do you have a venue?*</Label>
              <Select value={formData.venueKnown} onValueChange={(value) => updateFormData('venueKnown', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No, I need recommendations</SelectItem>
                  <SelectItem value="maybe">Not confirmed yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.venueKnown === 'yes' && (
              <div>
                <Label htmlFor="venueAddress">Venue Address</Label>
                <Textarea
                  id="venueAddress"
                  placeholder="Enter venue address..."
                  value={formData.venueAddress}
                  onChange={(e) => updateFormData('venueAddress', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Menu Categories (select all that interest you)</Label>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                {[
                  'Appetizers & Canapés',
                  'Main Courses',
                  'Desserts',
                  'Beverages',
                  'Wedding Cake',
                  'Late Night Bites'
                ].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={formData.menuCategories.includes(category)}
                      onCheckedChange={(checked) => handleMenuCategoryChange(category, checked as boolean)}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="dietaryNeeds">Dietary Requirements</Label>
              <Textarea
                id="dietaryNeeds"
                placeholder="Any dietary restrictions, allergies, or preferences?"
                value={formData.dietaryNeeds}
                onChange={(e) => updateFormData('dietaryNeeds', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="serviceStyle">Service Style Preference</Label>
              <Select value={formData.serviceStyle} onValueChange={(value) => updateFormData('serviceStyle', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select service style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buffet">Buffet</SelectItem>
                  <SelectItem value="plated">Plated Service</SelectItem>
                  <SelectItem value="family-style">Family Style</SelectItem>
                  <SelectItem value="cocktail">Cocktail Reception</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="budgetRange">Budget Range</Label>
                <Select value={formData.budgetRange} onValueChange={(value) => updateFormData('budgetRange', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5000">Under £5,000</SelectItem>
                    <SelectItem value="5000-15000">£5,000 - £15,000</SelectItem>
                    <SelectItem value="15000-30000">£15,000 - £30,000</SelectItem>
                    <SelectItem value="30000-50000">£30,000 - £50,000</SelectItem>
                    <SelectItem value="over-50000">Over £50,000</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-12-months">6-12 months</SelectItem>
                    <SelectItem value="over-12-months">Over 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any special requests, themes, or additional details..."
                value={formData.notes}
                onChange={(e) => updateFormData('notes', e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="moodboard">Upload Mood Board (optional)</Label>
              <Input
                id="moodboard"
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="mt-1"
              />
              {formData.moodboard && (
                <p className="text-sm text-muted-foreground mt-1">
                  Selected: {formData.moodboard.name}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name*</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number*</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bestTime">Best Time to Reach You</Label>
                <Select value={formData.bestTime} onValueChange={(value) => updateFormData('bestTime', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                    <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="bg-light-cream p-4 rounded-lg">
              <p className="text-sm text-ink-navy">
                <span className="font-semibold">Privacy Note:</span> We respect your privacy and will only use your information to respond to your inquiry. No obligation to proceed.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-light-cream">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(import.meta as any).env?.BASE_URL || "/"}book-event-hero.jpg)` }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Book Your Event
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Let's bring your vision to life. Tell us about your event and we'll create a custom proposal tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex justify-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step.id ? 'bg-reserved-burgundy text-white' : 'bg-stone text-ink-navy'
                }`}>
                  {step.id}
                </div>
                <div className="ml-4 mr-8 hidden sm:block">
                  <h3 className={`font-semibold ${currentStep >= step.id ? 'text-ink-navy' : 'text-stone'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.id ? 'bg-reserved-burgundy' : 'bg-stone'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="bg-stone p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-ink-navy mb-6 text-center" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              {steps[currentStep - 1].title}
            </h2>
            {renderStepContent()}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="border-brass text-brass hover:bg-brass hover:text-white"
              >
                Previous
              </Button>
              <Button
                onClick={nextStep}
                className="bg-reserved-burgundy hover:bg-darker-burgundy text-white"
              >
                {currentStep === 4 ? 'Submit Inquiry' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* FAQ Section */}
      <div className="py-16 bg-light-cream">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl font-light text-center text-ink-navy mb-12" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                How far in advance should I book?
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We recommend booking at least 3-6 months in advance for weddings and larger events. However, we can accommodate shorter timelines for smaller gatherings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Do you provide tastings?
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Yes! We offer complimentary tastings for events over £5,000. For smaller events, there's a small tasting fee that can be applied to your booking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Can you accommodate dietary restrictions?
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Absolutely. Our chefs are trained to handle all dietary needs, including allergies, intolerances, and special diets. We'll discuss this in detail during our consultation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <CTAPanel
        title="Not Ready to Book Yet?"
        primaryButtonText="Download Menu PDF"
        primaryButtonLink="/menu.pdf"
        secondaryButtonText="View Our Gallery"
        secondaryButtonLink="/gallery"
        imageUrl="/Courtey_Jon_McNielPhotography_Photocreditneeded_08.17-46-scaled.jpg"
      />

      <Footer />
    </div>
  );
};

export default BookEvent;