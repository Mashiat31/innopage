import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ExternalLink, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import riskAnalyticsImg from "@/assets/risk-analytics-feature.jpg";
import globalMarketImg from "@/assets/global-market-feature.jpg";

interface Feature {
  id: string;
  title: string;
  description: string;
  releaseDate?: string;
  expectedDate?: string;
  mediaType?: "video" | "image";
  mediaUrl?: string;
  featured?: boolean;
  status?: string;
  webinarLink?: string;
  betaSignup?: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  type: "released" | "upcoming";
}

const FeatureCard = ({ feature, type }: FeatureCardProps) => {
  const navigate = useNavigate();
  
  // Map media URLs to imported images
  const getImageSrc = (mediaUrl: string) => {
    if (mediaUrl.includes("risk-analytics-feature.jpg")) return riskAnalyticsImg;
    if (mediaUrl.includes("global-market-feature.jpg")) return globalMarketImg;
    return null;
  };

  const handleCardClick = () => {
    if (type === "released") {
      navigate(`/article/${feature.id}`);
    }
  };

  return (
    <Card 
      className={`bg-feature-card hover:bg-feature-card-hover transition-colors duration-200 border border-innovation-section-border ${
        type === "released" ? "cursor-pointer hover:shadow-md" : ""
      }`}
      onClick={handleCardClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg font-semibold text-foreground">
                {feature.title}
              </CardTitle>
              {type === "released" && (
                <Badge 
                  variant="secondary" 
                  className="bg-green-100 text-green-800 border-green-200"
                >
                  Released
                </Badge>
              )}
              {type === "upcoming" && feature.status && (
                <Badge 
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 border-blue-200"
                >
                  {feature.status}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {type === "released" ? `Release Date: ${feature.releaseDate}` : `Expected: ${feature.expectedDate}`}
              </span>
            </div>
          </div>
          
          {feature.mediaType === "video" && feature.mediaUrl && (
            <div className="relative w-16 h-16 bg-muted rounded-lg flex items-center justify-center shrink-0">
              <Play className="h-6 w-6 text-muted-foreground" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {feature.mediaType === "image" && feature.mediaUrl && (
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
            {getImageSrc(feature.mediaUrl) ? (
              <img 
                src={getImageSrc(feature.mediaUrl)!} 
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Feature Image</span>
              </div>
            )}
          </div>
        )}
        
        <CardDescription className="text-sm leading-relaxed text-foreground">
          {feature.description}
        </CardDescription>
        
        {type === "upcoming" && (
          <div className="flex gap-2 pt-2">
            {feature.webinarLink && (
              <Button variant="outline" size="sm" className="text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                Webinar
              </Button>
            )}
            {feature.betaSignup && (
              <Button variant="default" size="sm" className="text-xs">
                Join Beta
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;