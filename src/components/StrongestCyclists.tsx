import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Medal, Zap } from "lucide-react";
import championCyclist from "@/assets/cyclist-champion.jpg";

const StrongestCyclists = () => {
  const champions = [
    {
      name: "Marco Ventoso",
      specialty: "Mountain Climbing",
      achievements: ["Tour de France Winner 2023", "Giro d'Italia Champion", "Olympic Gold Medal"],
      stats: { power: "485W", speed: "68 km/h", climbing: "1,800m/h" },
      description: "Legendary climber known for dominating mountain stages with exceptional power-to-weight ratio."
    },
    {
      name: "Elena Rodriguez",
      specialty: "Sprint Racing",
      achievements: ["World Champion 2023", "5x Stage Winner", "Track Cycling Record"],
      stats: { power: "520W", speed: "75 km/h", climbing: "1,200m/h" },
      description: "The fastest sprinter in professional cycling with unmatched acceleration and top-end speed."
    },
    {
      name: "Thomas Berg",
      specialty: "Time Trial",
      achievements: ["TT World Champion", "Hour Record Holder", "Olympic Silver Medal"],
      stats: { power: "510W", speed: "72 km/h", climbing: "1,500m/h" },
      description: "Master of aerodynamics and sustained power output in time trial disciplines."
    }
  ];

  const recordStats = [
    { icon: Trophy, label: "World Records", value: "12 Active", color: "text-yellow-400" },
    { icon: Target, label: "Race Wins", value: "847 Total", color: "text-primary" },
    { icon: Medal, label: "Championships", value: "156 Titles", color: "text-secondary" },
    { icon: Zap, label: "Peak Power", value: "520W Max", color: "text-destructive" }
  ];

  return (
    <section id="cyclists" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Elite Cyclists</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Meet the world's strongest and most accomplished professional cyclists
          </p>
        </div>

        {/* Records Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {recordStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card text-center p-6">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Featured Champion */}
        <Card className="mb-16 bg-gradient-card border-0 shadow-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4 text-yellow-400 border-yellow-400/30">
                Current Champion
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Marco Ventoso</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                The undisputed king of mountain climbing, Marco has redefined what's possible 
                in high-altitude racing with his incredible power output and tactical brilliance.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">485W</p>
                  <p className="text-xs text-muted-foreground">Average Power</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">68 km/h</p>
                  <p className="text-xs text-muted-foreground">Top Speed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-destructive">1,800m/h</p>
                  <p className="text-xs text-muted-foreground">Climbing Rate</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Recent Achievements:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    Tour de France Winner 2023
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Medal className="w-4 h-4 text-silver" />
                    Giro d'Italia Champion
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-primary" />
                    Olympic Gold Medal
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={championCyclist} 
                alt="Champion Cyclist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20"></div>
            </div>
          </div>
        </Card>

        {/* All Champions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {champions.map((champion, index) => (
            <Card key={index} className="group bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {champion.specialty}
                  </Badge>
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {champion.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {champion.description}
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-primary">{champion.stats.power}</p>
                    <p className="text-xs text-muted-foreground">Power</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-secondary">{champion.stats.speed}</p>
                    <p className="text-xs text-muted-foreground">Speed</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-destructive">{champion.stats.climbing}</p>
                    <p className="text-xs text-muted-foreground">Climbing</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                  {champion.achievements.slice(0, 2).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrongestCyclists;