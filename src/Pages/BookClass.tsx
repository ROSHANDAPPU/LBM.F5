import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import { Checkbox } from "@/Components/UI/checkbox";
import { useToast } from "@/Hooks/use-toast";
import { Input } from "@/Components/UI/input";
import { Label } from "@/Components/UI/label";
import { Textarea } from "@/Components/UI/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/UI/select";

const BookClass = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "private-cooking-class",
    classType: "",
    experienceLevel: "",
    dietaryRestrictions: "",
    guestCount: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    specialRequests: "",
    agreedToTerms: false
  });

  // Add CSS styles for exact hero layout
  useState(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --cream-bg: #f9f7f4;
        --burgundy: #7a3043;
      }

      .hero-section {
        display: flex;
        min-height: 80vh;
        background-color: var(--cream-bg);
        align-items: center;
        overflow: hidden;
        position: relative;
      }

      .hero-content {
        flex: 1;
        padding: 0 8%;
        z-index: 2;
      }

      .sub-headline {
        letter-spacing: 0.1em;
        font-size: 1rem;
        color: hsl(var(--accent));
        display: block;
        margin-bottom: 20px;
        font-weight: var(--font-weight-light, 300);
        font-family: 'Montserrat', Arial, sans-serif;
        text-transform: uppercase;
      }

      .hero-content h1 {
        font-family: 'Libre Baskerville', Georgia, serif;
        font-size: 4rem;
        line-height: 1.1;
        margin-bottom: 20px;
        color: var(--foreground);
        font-weight: var(--font-weight-light, 300);
        letter-spacing: -0.02em;
      }

      .hero-content h1 em {
        font-family: 'Libre Baskerville', Georgia, serif;
        color: hsl(var(--accent));
        font-style: italic;
        font-weight: var(--font-weight-light, 300);
      }

      .hero-content p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--muted-foreground);
        max-width: 500px;
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: var(--font-weight-light, 300);
      }

      .hero-image-container {
        flex: 1.2;
        height: 100vh;
        background: 
          linear-gradient(to right, var(--cream-bg) 0%, rgba(249, 247, 244, 0) 40%),
          url(${(import.meta as any).env?.BASE_URL || "/"}chef1.jpg); 
        background-size: cover;
        background-position: center;
      }

      .hero-btns {
        display: flex;
        gap: 20px;
        margin-top: 40px;
        flex-wrap: wrap;
      }

      @media (max-width: 768px) {
        .hero-section {
          flex-direction: column;
          min-height: auto;
        }

        .hero-content {
          padding: 60px 5%;
        }

        .hero-content h1 {
          font-size: 2.5rem;
        }

        .hero-image-container {
          height: 50vh;
          background: url(${(import.meta as any).env?.BASE_URL || "/"}chef1.jpg);
          background-size: cover;
          background-position: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  });

  const classTypes = [
    "Italian Pasta Making",
    "Sushi Rolling Workshop",
    "French Pastry Basics",
    "Mexican Cuisine Masterclass",
    "Mediterranean Cooking",
    "BBQ & Grilling Techniques",
    "Vegetarian/Vegan Cooking",
    "Baking & Desserts",
    "Custom/Other"
  ];

  const experienceLevels = [
    "Beginner - No experience needed",
    "Intermediate - Some cooking experience",
    "Advanced - Confident in the kitchen",
    "Mixed Group - Varying skill levels"
  ];

  const timeSlots = [
    "Morning (9:00 AM - 12:00 PM)",
    "Afternoon (1:00 PM - 4:00 PM)",
    "Evening (5:00 PM - 8:00 PM)",
    "Flexible - We can discuss timing"
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreedToTerms: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Class Booking Form Data:", formData);
    
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your cooking class details.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "private-cooking-class",
      classType: "",
      experienceLevel: "",
      dietaryRestrictions: "",
      guestCount: "",
      preferredDate: "",
      preferredTime: "",
      location: "",
      specialRequests: "",
      agreedToTerms: false
    });
  };

  return (
    <div className="min-h-screen bg-light-cream">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="sub-headline">RESERVE YOUR SPOT</span>
          <h1>Book a <br /><em>Cooking Class</em></h1>
          <p>Experience bespoke culinary creations in the comfort of your home with our expert private chefs.</p>
        </div>
        <div className="hero-image-container"></div>
      </section>

      {/* Booking Form */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-stone p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-light mb-6 text-ink-navy" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Class Details */}
              <div>
                <h2 className="text-2xl font-light mb-6 text-ink-navy" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Class Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="classType">Class Type *</Label>
                    <Select value={formData.classType} onValueChange={(value) => updateFormData('classType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a class type" />
                      </SelectTrigger>
                      <SelectContent>
                        {classTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experienceLevel">Experience Level *</Label>
                    <Select value={formData.experienceLevel} onValueChange={(value) => updateFormData('experienceLevel', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map(level => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guestCount">Number of Participants *</Label>
                    <Input
                      id="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) => updateFormData('guestCount', e.target.value)}
                      min="1"
                      max="20"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => updateFormData('preferredDate', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => updateFormData('preferredTime', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(slot => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateFormData('location', e.target.value)}
                      placeholder="Your address or 'Our kitchen'"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions or Allergies</Label>
                  <Textarea
                    id="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => updateFormData('dietaryRestrictions', e.target.value)}
                    rows={3}
                    placeholder="Please let us know about any dietary restrictions, allergies, or food preferences"
                    className="mt-1"
                  />
                </div>
                <div className="mt-6">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => updateFormData('specialRequests', e.target.value)}
                    rows={3}
                    placeholder="Any special requests or questions about the class?"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div>
                <div className="mb-6">
                  <label className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.agreedToTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the terms and conditions and understand that a 50% deposit is required to secure the booking. 
                      Cancellations made 7+ days before the class receive a full refund. Cancellations 3-6 days before receive 50% refund. 
                      Cancellations less than 3 days before are non-refundable.
                    </span>
                  </label>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-reserved-burgundy text-white hover:bg-reserved-burgundy/90"
                >
                  Book Cooking Class
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookClass;
