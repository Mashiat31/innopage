import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import featuresData from "@/data/features.json";
import riskAnalyticsImage from "@/assets/risk-analytics-feature.jpg";
import globalMarketImage from "@/assets/global-market-feature.jpg";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const feature = featuresData.whatsNew.find(f => f.id === id);
  
  if (!feature) {
    return <div>Article not found</div>;
  }

  const getImageSrc = (mediaUrl: string) => {
    if (mediaUrl === "src/assets/risk-analytics-feature.jpg") {
      return riskAnalyticsImage;
    }
    if (mediaUrl === "src/assets/global-market-feature.jpg") {
      return globalMarketImage;
    }
    return mediaUrl;
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-lg font-medium text-gray-900">Product Updates</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">EiQ / Learn</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <span>?</span>
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <span>🔔</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </Button>
                <span className="text-sm font-medium">KL</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-8 py-8 overflow-y-auto bg-gray-50">
          <div className="max-w-6xl mx-auto">
            
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{feature.title}</h1>
              <p className="text-sm text-gray-600">Release Date: {feature.releaseDate}</p>
            </div>

            {/* Feature Images/Media */}
            <div className="mb-8">
              {feature.mediaType === "video" ? (
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={getImageSrc(feature.mediaUrl)} 
                      alt={`${feature.title} preview 1`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={getImageSrc(feature.mediaUrl)} 
                      alt={`${feature.title} preview 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* What is it? Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What is it?</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ArticleDetail;