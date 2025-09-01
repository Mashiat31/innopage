import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-6">
        <div className="mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to EiQ Innovation Hub</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the latest product updates, feature releases, and upcoming innovations in risk management and analytics.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/innovation">
            <Button size="lg" className="group">
              Explore Innovation Updates
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Stay up to date with our latest features and roadmap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
