import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bike, Gauge, Weight, Zap } from "lucide-react";
import bikeModel from "@/assets/bike-model.jpg";

const BikeShowcase = () => {
  const bikes = [
    {
      name: "Canyon Aeroad CFR",
      category: "Racing",
      weight: "6.8kg",
      price: "$8,500",
      specs: ["Carbon Frame", "Shimano Dura-Ace", "Aerodynamic Design", "Electronic Shifting"],
      description: "Professional racing bike designed for speed and performance on any terrain."
    },
    {
      name: "Trek Madone SLR 9",
      category: "Time Trial",
      weight: "7.2kg",
      price: "$12,000",
      specs: ["IsoSpeed Technology", "SRAM Red", "Integrated Storage", "Wind Tunnel Tested"],
      description: "Ultimate aerodynamic machine built for time trials and competitive racing."
    },
    {
      name: "Specialized S-Works",
      category: "Climbing",
      weight: "6.4kg",
      price: "$15,000",
      specs: ["FACT 12r Carbon", "Lightweight Build", "Climbing Geometry", "Premium Components"],
      description: "Ultra-lightweight climbing specialist for mountain stages and hill climbs."
    }
  ];

  const specifications = [
    { icon: Weight, label: "Ultra-Light", value: "Starting at 6.4kg" },
    { icon: Gauge, label: "Top Speed", value: "65+ km/h achievable" },
    { icon: Zap, label: "Power Transfer", value: "98% efficiency" },
    { icon: Bike, label: "Aerodynamics", value: "Wind tunnel optimized" }
  ];

  return (
    <section id="bikes" className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Elite Bike Models</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Discover our collection of world-class racing bikes engineered for peak performance
          </p>
        </div>

        {/* Hero Bike Display */}
        <div className="mb-16">
          <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={bikeModel} 
                  alt="Featured Bike Model"
                  className="w-full h-full object-cover animate-bike-bounce"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 text-primary border-primary/30">
                  Featured Model
                </Badge>
                <h3 className="text-3xl font-bold mb-4">Canyon Aeroad CFR</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  The pinnacle of aerodynamic engineering meets lightweight carbon construction. 
                  Used by professional teams worldwide for its exceptional speed and handling.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {specifications.map((spec, index) => {
                    const IconComponent = spec.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{spec.label}</p>
                          <p className="font-semibold text-sm">{spec.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Button variant="hero" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bike Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike, index) => (
            <Card key={index} className="group bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {bike.category}
                  </Badge>
                  <span className="text-2xl font-bold text-primary">{bike.price}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {bike.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {bike.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Weight className="w-4 h-4 text-primary" />
                    <span>{bike.weight}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {bike.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="speed" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;