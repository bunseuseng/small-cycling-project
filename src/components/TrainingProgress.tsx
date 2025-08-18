import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Zap, Activity } from "lucide-react";
import trainingImage from "@/assets/training.jpg";

const TrainingProgress = () => {
  const weeklyGoals = [
    { goal: "Distance", current: 280, target: 350, unit: "km" },
    { goal: "Climbing", current: 3200, target: 4000, unit: "m" },
    { goal: "Training Hours", current: 18, target: 25, unit: "hrs" },
    { goal: "Speed Work", current: 3, target: 4, unit: "sessions" }
  ];

  const recentActivities = [
    { date: "Today", type: "Hill Climbing", duration: "2h 15m", distance: "45 km", intensity: "High" },
    { date: "Yesterday", type: "Endurance Ride", duration: "3h 30m", distance: "95 km", intensity: "Medium" },
    { date: "2 days ago", type: "Sprint Intervals", duration: "1h 45m", distance: "35 km", intensity: "High" },
    { date: "3 days ago", type: "Recovery Ride", duration: "1h 30m", distance: "40 km", intensity: "Low" }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "High": return "bg-destructive/20 text-destructive border-destructive/30";
      case "Medium": return "bg-secondary/20 text-secondary border-secondary/30";
      case "Low": return "bg-primary/20 text-primary border-primary/30";
      default: return "bg-muted";
    }
  };

  return (
    <section id="training" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Training Progress</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Track performance metrics and monitor training progression towards peak cycling performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Weekly Goals */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">This Week's Goals</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {weeklyGoals.map((goal, index) => {
                const progress = (goal.current / goal.target) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{goal.goal}</span>
                      <span className="text-sm text-muted-foreground">
                        {goal.current} / {goal.target} {goal.unit}
                      </span>
                    </div>
                    <Progress value={progress} className="h-3" />
                    <div className="text-right text-xs text-muted-foreground">
                      {progress.toFixed(1)}% complete
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Training Image */}
          <div className="relative overflow-hidden rounded-lg shadow-card">
            <img 
              src={trainingImage} 
              alt="Cycling Training"
              className="w-full h-full object-cover animate-bike-bounce"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold mb-2">Dedicated Training</h3>
              <p className="text-muted-foreground">
                Consistent training and performance monitoring for optimal results
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Activity className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Recent Training Sessions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {activity.date}
                    </div>
                    <div>
                      <h4 className="font-semibold">{activity.type}</h4>
                      <p className="text-sm text-muted-foreground">
                        {activity.duration} • {activity.distance}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={`text-xs ${getIntensityColor(activity.intensity)}`}>
                    {activity.intensity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrainingProgress;