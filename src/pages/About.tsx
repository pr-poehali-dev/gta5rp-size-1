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
              <div className="bg-gradient-to-br from-black/80 to-black/60 border border-primary/30 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Crown" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Kavkazskoe Bratstvo</h3>
                  </div>
                </div>

                <div className="text-white/90 leading-relaxed space-y-4">
                  <p className="text-lg">
                    Кавказская мафия - Мафия, которая была основана в единую мафию живущих в кавказских странах как: Азербайджан, Дагестан, Чечня, Грузия, Абхазия, Южная часть России.
                  </p>

                  <div className="bg-black/40 p-6 rounded-lg border border-primary/20 my-6">
                    <h4 className="text-xl font-bold text-primary mb-4">Основная информация:</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-white/80">
                      <div><span className="text-secondary font-semibold">Название:</span> Kavkazskoe Bratstvo</div>
                      <div><span className="text-secondary font-semibold">Год основания:</span> 2025 год</div>
                      <div><span className="text-secondary font-semibold">Место основания:</span> Los-Santos</div>
                      <div><span className="text-secondary font-semibold">Место проживания:</span> Особняк на Вайнвуде</div>
                      <div><span className="text-secondary font-semibold">Глава:</span> AIexey Fomin</div>
                      <div><span className="text-secondary font-semibold">Одежда:</span> Стиль красный</div>
                      <div className="md:col-span-2"><span className="text-secondary font-semibold">Прикрытие:</span> Частное Охранное Предприятие</div>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-white mt-8 mb-4">История:</h4>
                  
                  <p>
                    Кавказская мафия одна из крупнейших и влиятельных мафий на територии Лос-Сантоса. Основаная на уважении, дисциплине и стреплении к вершине. Группировка известна своим участием в различных незаконных действиях, включая организованную преступность, незаконный оборот "наркоты" и отмывание денег.
                  </p>

                  <p>
                    Истоки Кавказской мафии можно проследить до начала 1990-х годов, после распада Советского Союза. В это время Кавказский регион пережил политическую нестабильность и экономические потрясения, что привело к росту преступной активности, и именно в этот момент случилось временный развал Кавказской мафии которая разделилась на разные группировки.
                  </p>

                  <p className="font-semibold text-primary">
                    И только в 2025 году Алексей Фомин Леонидович восоеденил группировки которые входили в состав Кавказской мафии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
