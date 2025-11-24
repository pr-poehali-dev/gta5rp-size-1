import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Успешный захват территории",
    date: "15 ноября 2024",
    category: "Операции",
    content: "Kavkazskoe Bratstvo провела успешную операцию по расширению зоны влияния в районе Vinewood Hills. Операция прошла без потерь.",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "Новое пополнение",
    date: "10 ноября 2024",
    category: "Рекрутинг",
    content: "В ряды Kavkazskoe Bratstvo вступили 15 новых перспективных членов. Все кандидаты прошли строгий отбор и доказали свою преданность.",
    icon: "Users"
  },
  {
    id: 3,
    title: "Крупная сделка завершена",
    date: "5 ноября 2024",
    category: "Бизнес",
    content: "Заключена одна из крупнейших сделок в истории группировки. Прибыль превысила все ожидания.",
    icon: "TrendingUp"
  },
  {
    id: 4,
    title: "Обновление базы",
    date: "1 ноября 2024",
    category: "Инфраструктура",
    content: "Завершена модернизация главной базы Kavkazskoe Bratstvo. Новое оборудование и улучшенная система безопасности.",
    icon: "Building"
  }
];

export default function News() {
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
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5722455c-be13-4c16-9b1f-04c6699970be/files/998c309e-c45d-4281-82cf-509957d1ad4b.jpg)',
          backgroundPositionY: `${scrollY * 0.3}px`
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in">
              Новости
            </h1>
            <div className="h-1 w-24 bg-primary mb-12"></div>

            <div className="grid gap-6 animate-fade-in-up">
              {newsData.map((news, index) => (
                <Card 
                  key={news.id} 
                  className="bg-black/60 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/20 p-4 rounded-lg">
                          <Icon name={news.icon as any} size={32} className="text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <Badge variant="outline" className="border-primary text-primary">
                            {news.category}
                          </Badge>
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <Icon name="Calendar" size={14} />
                            {news.date}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {news.title}
                        </h3>
                        
                        <p className="text-white/80 leading-relaxed">
                          {news.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}