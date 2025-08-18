import { Button } from "@/components/ui/button";
import { Bike, Clock, Target } from "lucide-react";
import cyclingHero from "@/assets/cycling-hero.jpg";

const CyclingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyclingHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      
      {/* Speed lines effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-speed opacity-30 animate-speed-lines"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-speed opacity-20 animate-speed-lines" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-gradient">
            CycleTour Pro
          </h1>
          <p className="text-xl md:text-3xl text-foreground mb-4 font-semibold">
            Elite Cycling Training & Performance
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Track your progress, showcase cutting-edge bikes, and follow the journey of the world's strongest cyclists
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="hero" size="hero" className="w-full sm:w-auto">
            <Target className="w-5 h-5 mr-2" />
            Start Training
          </Button>
          <Button variant="speed" size="hero" className="w-full sm:w-auto">
            <Bike className="w-5 h-5 mr-2" />
            View Bikes
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-card p-6 rounded-lg shadow-card backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Training Hours</h3>
            </div>
            <p className="text-3xl font-bold text-primary">2,450+</p>
            <p className="text-sm text-muted-foreground">This season</p>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-lg shadow-card backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Bike className="w-6 h-6 text-secondary" />
              <h3 className="text-lg font-semibold">Distance Covered</h3>
            </div>
            <p className="text-3xl font-bold text-secondary">15,780 km</p>
            <p className="text-sm text-muted-foreground">Total distance</p>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-lg shadow-card backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Average Speed</h3>
            </div>
            <p className="text-3xl font-bold text-primary">45.2 km/h</p>
            <p className="text-sm text-muted-foreground">Current season</p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default CyclingHero;