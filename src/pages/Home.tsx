import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5722455c-be13-4c16-9b1f-04c6699970be/files/90b1d6e4-5414-4d51-b497-3afb78493f7d.jpg)',
          backgroundPositionY: `${scrollY * 0.5}px`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="mb-6">
            <h1 className="md:text-9xl font-black text-white tracking-wider drop-shadow-2xl text-7xl">
              Kavkazskoe Bratstvo
            </h1>
            <div className="h-1 w-32 bg-primary mx-auto mt-4"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide drop-shadow-lg">
            Элитная группировка Los Santos
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-2xl hover:scale-105 transition-all"
          >
            Узнать больше
            <Icon name="ChevronRight" size={20} className="ml-2" />
          </Button>
        </div>


      </div>
    </div>
  );
}