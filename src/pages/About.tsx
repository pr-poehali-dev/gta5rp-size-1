import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5722455c-be13-4c16-9b1f-04c6699970be/files/4611774d-bbab-4ec0-ad1e-2c88745b6e2b.jpg)',
          backgroundPositionY: `${scrollY * 0.3}px`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in">
              О группировке
            </h1>
            <div className="h-1 w-24 bg-primary mb-12"></div>

            <div className="space-y-8 animate-fade-in-up">
              <Card className="bg-black/50 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Icon name="Crown" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Наша история</h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        Kavkazskoe Bratstvo - это не просто группировка, это элита Los Santos. Мы создали империю, 
                        основанную на силе, уважении и непоколебимой верности. Наша организация 
                        контролирует ключевые точки города и устанавливает правила игры.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Icon name="Target" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Наша миссия</h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        Мы стремимся к доминированию в криминальном мире Los Santos через 
                        стратегическое планирование, командную работу и безупречное выполнение 
                        операций. Каждый член Kavkazskoe Bratstvo - это профессионал высшего класса.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Icon name="Shield" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Наши ценности</h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-3">
                          <Icon name="Check" size={20} className="text-primary" />
                          <span className="text-white/80">Верность семье</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Check" size={20} className="text-primary" />
                          <span className="text-white/80">Честь и уважение</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Check" size={20} className="text-primary" />
                          <span className="text-white/80">Профессионализм</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Check" size={20} className="text-primary" />
                          <span className="text-white/80">Дисциплина</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}