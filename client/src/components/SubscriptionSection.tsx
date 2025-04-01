import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface PriceItem {
  sessions: string;
  price: string;
}

interface YogaClassType {
  title: string;
  prices: PriceItem[];
  singleClass?: string;
  individual?: string[];
  note?: string;
}

const SubscriptionSection = () => {
  const yogaClasses: YogaClassType[] = [
    {
      title: "ХАТХА ЙОГА",
      prices: [
        { sessions: "4 занятия", price: "2500 ₽" },
        { sessions: "6 занятий", price: "3800 ₽" },
        { sessions: "8 занятий", price: "4300 ₽" },
        { sessions: "10 занятий", price: "4700 ₽" },
        { sessions: "12 занятий", price: "5300 ₽" },
        { sessions: "20 занятий (на 2 месяца)", price: "8500 ₽" },
      ],
      singleClass: "900 ₽",
      individual: [
        "1 час - 2500 ₽",
        "1 час 30 минут - 3000 ₽"
      ]
    },
    {
      title: "ЗДОРОВАЯ СПИНА",
      prices: [
        { sessions: "4 занятия", price: "2500 ₽" },
        { sessions: "8 занятий", price: "3800 ₽" },
      ],
      singleClass: "700 ₽",
      individual: ["1 час - 2500 ₽"]
    },
    {
      title: "ВОСТОЧНЫЕ ТАНЦЫ",
      prices: [
        { sessions: "4 занятия", price: "2400 ₽" },
        { sessions: "8 занятий", price: "3800 ₽" },
      ],
      singleClass: "700 ₽"
    },
    {
      title: "ЛФК",
      prices: [
        { sessions: "4 занятия", price: "2400 ₽" },
        { sessions: "8 занятий", price: "3800 ₽" },
      ]
    },
    {
      title: "BELLY MIX",
      prices: [
        { sessions: "1 занятие", price: "2500 ₽" },
      ]
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-[#8CA58C] bg-opacity-10" id="subscriptions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#4A5759] mb-4 md:mb-6">
            Абонементы
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#D17B49] mx-auto mb-4 md:mb-8"></div>
          <p className="text-[#6D6875] text-base md:text-lg max-w-3xl mx-auto px-2">
            Выберите подходящий абонемент для занятий в нашей студии.
            Мы предлагаем различные варианты для разных типов занятий и целей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {yogaClasses.map((yogaClass, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-[#8CA58C] text-white p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-center">{yogaClass.title}</h3>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ul className="space-y-3 md:space-y-4">
                  {yogaClass.prices.map((price, priceIndex) => (
                    <li key={priceIndex} className="flex justify-between items-center border-b pb-2 border-gray-200">
                      <span className="font-medium text-sm md:text-base">{price.sessions}</span>
                      <span className="text-[#D17B49] font-bold text-sm md:text-base">{price.price}</span>
                    </li>
                  ))}
                  
                  {yogaClass.singleClass && (
                    <li className="flex justify-between items-center border-b pb-2 border-gray-200">
                      <span className="font-medium text-sm md:text-base">Разовое посещение</span>
                      <span className="text-[#D17B49] font-bold text-sm md:text-base">{yogaClass.singleClass}</span>
                    </li>
                  )}
                </ul>
                
                {yogaClass.individual && yogaClass.individual.length > 0 && (
                  <div className="mt-4 md:mt-6">
                    <h4 className="font-medium text-[#4A5759] mb-2 md:mb-3 text-sm md:text-base">Индивидуальные занятия:</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {yogaClass.individual.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-[#6D6875] text-xs md:text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {yogaClass.note && (
                  <div className="mt-3 md:mt-4 p-2 md:p-3 bg-[#F7F3E9] rounded-lg">
                    <p className="text-xs md:text-sm text-[#6D6875] italic">{yogaClass.note}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          
          {/* Общий абонемент */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#D17B49]">
            <CardHeader className="bg-[#D17B49] text-white p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-center">ОБЩИЙ АБОНЕМЕНТ</h3>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex justify-between items-center border-b pb-2 border-gray-200">
                  <span className="font-medium text-sm md:text-base">8 занятий (на месяц)</span>
                  <span className="text-[#D17B49] font-bold text-sm md:text-base">5000 ₽</span>
                </li>
              </ul>
              <div className="mt-3 md:mt-4 p-2 md:p-4 bg-[#F7F3E9] rounded-lg">
                <p className="text-xs md:text-sm text-[#6D6875]">
                  Дает право посещения любых занятий, кроме гавайских танцев
                </p>
              </div>
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-[#4A5759] font-medium mb-2 md:mb-4 text-sm md:text-base">Популярный выбор среди наших клиентов!</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button 
            className="bg-[#D17B49] hover:bg-[#B05A2A] text-white rounded-full px-6 py-3 md:px-8 md:py-6 text-base md:text-lg flex items-center mx-auto"
            onClick={() => {
              window.open("https://wa.me/79089828222?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20об%20абонементах.", "_blank");
            }}
          >
            Записаться на занятия
            <ChevronRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;