import { 
  Home, 
  Globe, 
  MapPin, 
  Calendar,
  FileText,
  Settings,
  HelpCircle,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const navigationItems = [
    { icon: Home, label: "Home", active: false, hasNew: false },
    { icon: Globe, label: "Global Risk", active: false, hasNew: false },
    { icon: MapPin, label: "Location", active: false, hasNew: false },
    { icon: Calendar, label: "Calendar", active: false, hasNew: false },
    { icon: FileText, label: "Reports", active: false, hasNew: false },
    { icon: Lightbulb, label: "Innovation", active: true, hasNew: true },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <div className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="w-8 h-8 bg-sidebar-primary rounded flex items-center justify-center">
          <span className="text-sidebar-primary-foreground font-bold text-sm">EQ</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4">
        {navigationItems.map((item, index) => (
          <div key={index} className="relative">
            <Button
              variant="ghost"
              size="sm"
              className={`w-full h-12 mb-1 rounded-none flex items-center justify-center ${
                item.active
                  ? "bg-sidebar-accent border-r-2 border-sidebar-primary text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
            </Button>
            {item.hasNew && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] font-medium bg-red-500 text-white border-0"
              >
                N
              </Badge>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border p-2">
        {bottomItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className="w-full h-12 mb-1 rounded-none flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <item.icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;