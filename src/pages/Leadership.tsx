import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const leaders = [
  {
    id: 1,
    name: "Alexei Fomin",
    code: "CJE4",
    position: "Глава",
    rank: 1,
    description: `Алексей Фомин Леонидович - Биография

Родился в 1990 году 4 мая в детстве проживал на территории Москве. Его отец работал в милиции, а мать была учителем в школе. В 1996 переехал в Лос-Антос где отучился в школе а дальше пошёл учиться в колледже и уже после колледж пошёл работать в разные гос структуры. Позже создал группировку куда пригласил своего друга и правую рука Maksim Hartford (Прозвище Коммунист).

Остальная информация засекречена агентами FIB.`,
    icon: "Crown",
    avatar: "https://cdn.poehali.dev/files/c8f3e53c-9986-44ea-9d8a-750bc6d74252.png"
  },
  {
    id: 2,
    name: "Maksim Hartford",
    code: "CQ18",
    position: "Правая рука главы",
    rank: 2,
    description: `Максим Хартфорд (Прозвище Коммунист) - личность известная и уважаемая.

Биография
Родился в 1997 году 17 июня в детстве проживал на территории Нижнего Новгорода. Его отец был криминальным авторитетом. В 2000 переехал в Лос-Антос по не известным обстоятельствам. Где-то в 2022 работал 3 года в армии в подразделении ma и потом ушёл в мэрию где оттуда ушёл и вместе с Фомой создал группировку.

Остальная информация засекречена U.S.ARMY.`,
    icon: "Shield",
    avatar: "https://cdn.poehali.dev/files/f25315db-0e79-4fd8-9a91-673f2a4412ad.png"
  },
  {
    id: 3,
    name: "Kim Kolenvalov",
    code: "BRIZ",
    position: "Левая рука главы",
    rank: 3,
    description: `Ким Коленвалов (Прозвище Бомж) - личность известная и уважаемая.

Биография
Родился в 1988 году 23 сентября в детстве проживал на территории Петропавловска-Камчатска. Его отец был бизнесменом. В 2000 переехал в Лос-Антос из за бизнеса отца. Дальше он отучился в колледже и продолжал дела отца, а также устроился в мэрию откуда ушёл и пришёл к своим друзьям Максиму и Алексею и встал на Левую рука Главы.

Остальная информация засекречена мэрией.`,
    icon: "Swords",
    avatar: ""
  }
];

export default function Leadership() {
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
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5722455c-be13-4c16-9b1f-04c6699970be/files/90b1d6e4-5414-4d51-b497-3afb78493f7d.jpg)',
          backgroundPositionY: `${scrollY * 0.3}px`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in text-center">
              Руководство
            </h1>
            <div className="h-1 w-24 bg-primary mb-16 mx-auto"></div>

            <div className="space-y-8 animate-fade-in-up">
              {leaders.map((leader, index) => (
                <Card 
                  key={leader.id}
                  className="bg-black/60 border-primary/40 backdrop-blur-sm hover:border-primary transition-all duration-500 overflow-hidden group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-gradient-to-br from-primary/30 to-primary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                        <div className="relative z-10 text-center">
                          {leader.avatar ? (
                            <div className="mb-4">
                              <img 
                                src={leader.avatar} 
                                alt={leader.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
                              />
                            </div>
                          ) : (
                            <div className="bg-primary/30 p-6 rounded-full mb-4 inline-block">
                              <Icon name={leader.icon as any} size={48} className="text-primary" />
                            </div>
                          )}
                          <div className="text-6xl font-black text-primary mb-2">
                            #{leader.rank}
                          </div>
                          <div className="text-white/60 text-sm font-medium">
                            {leader.position}
                          </div>
                        </div>
                      </div>

                      <div className="md:w-2/3 p-8">
                        <div className="mb-4">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {leader.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <div className="text-primary font-mono text-lg">
                              {leader.code}
                            </div>
                            <div className="h-px flex-1 bg-primary/30"></div>
                            <div className="text-secondary font-semibold">
                              {leader.position}
                            </div>
                          </div>
                        </div>

                        <p className="text-white/80 leading-relaxed text-base whitespace-pre-line">
                          {leader.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg">
                            <Icon name="Star" size={16} className="text-secondary" />
                            <span className="text-white/90 text-sm">Лидер</span>
                          </div>
                          <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg">
                            <Icon name="Zap" size={16} className="text-secondary" />
                            <span className="text-white/90 text-sm">Опытный</span>
                          </div>
                          <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg">
                            <Icon name="Award" size={16} className="text-secondary" />
                            <span className="text-white/90 text-sm">Легенда</span>
                          </div>
                        </div>
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
