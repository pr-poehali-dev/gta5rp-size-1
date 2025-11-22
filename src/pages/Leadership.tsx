import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const leaders = [
  {
    id: 1,
    name: "Alexie Morozov",
    code: "CJE4",
    position: "Глава",
    rank: 1,
    description: "Основатель и лидер SIZE. Стратег и визионер, под руководством которого группировка достигла небывалых высот.",
    icon: "Crown"
  },
  {
    id: 2,
    name: "Maksim Hartford",
    code: "CQ18",
    position: "Первый Зам Главы",
    rank: 2,
    description: "Правая рука главы. Отвечает за координацию всех крупных операций и поддержание дисциплины в рядах.",
    icon: "Shield"
  },
  {
    id: 3,
    name: "Vlad Marozov",
    code: "BRIZ",
    position: "Второй Зам Главы (Бомж)",
    rank: 3,
    description: "Мастер тактических операций. Его нестандартный подход к решению задач сделал его легендой SIZE.",
    icon: "Swords"
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen">
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/5722455c-be13-4c16-9b1f-04c6699970be/files/90b1d6e4-5414-4d51-b497-3afb78493f7d.jpg)' }}
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
                          <div className="bg-primary/30 p-6 rounded-full mb-4 inline-block">
                            <Icon name={leader.icon as any} size={48} className="text-primary" />
                          </div>
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

                        <p className="text-white/80 leading-relaxed text-lg">
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
