import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import featuresData from "@/data/features.json";

const Innovation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterFeatures = (features: any[], query: string) => {
    if (!query) return features;
    return features.filter(feature =>
      feature.title.toLowerCase().includes(query.toLowerCase()) ||
      feature.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredWhatsNew = filterFeatures(featuresData.whatsNew, searchQuery);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-innovation-section border-b border-innovation-section-border px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Innovation</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Discover the latest product updates and upcoming features
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-8 py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* What's New Section */}
            <section>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground mb-2">What's New</h2>
                <p className="text-muted-foreground">
                  Latest features and improvements released for EiQ platform
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWhatsNew.map((feature) => (
                  <FeatureCard
                    key={feature.id}
                    feature={feature}
                    type="released"
                  />
                ))}
              </div>
              
              {filteredWhatsNew.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No features found matching your search.
                </div>
              )}
            </section>


          </div>
        </main>
      </div>
    </div>
  );
};

export default Innovation;