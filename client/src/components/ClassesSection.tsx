import { Clock } from "lucide-react";
import { yogaClasses } from "../data/classes";
import { Button } from "@/components/ui/button";

const ClassesSection = () => {
  return (
    <section id="classes" className="py-16 md:py-20 bg-[#8CA58C] bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-3xl md:text-4xl mb-4">Наши занятия</h2>
          <p className="text-[#6D6875] max-w-2xl mx-auto">Мы предлагаем разнообразные стили йоги для всех уровней подготовки. Независимо от вашего опыта, вы найдете практику, которая подходит именно вам.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yogaClasses.map((yogaClass, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-[#8CA58C] text-xl mb-2">{yogaClass.title}</h3>
                <p className="text-[#6D6875] mb-4">{yogaClass.description}</p>
                <div className="flex items-center text-sm text-[#6D6875]">
                  <span className={`
                    ${yogaClass.level === 'Для всех уровней' || yogaClass.level === 'Специальный курс' ? 'bg-[#8CA58C] bg-opacity-20 text-[#748574]' : ''} 
                    ${yogaClass.level === 'Средний уровень' ? 'bg-[#D17B49] bg-opacity-20 text-[#B05A2A]' : ''}
                    ${yogaClass.level === 'Продвинутый уровень' ? 'bg-[#614C67] bg-opacity-20 text-[#483A4D]' : ''}
                    rounded-full px-3 py-1
                  `}>{yogaClass.level}</span>
                  <span className="ml-auto">
                    <Clock size={16} className="inline mr-1" /> {yogaClass.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#schedule">
            <Button className="bg-[#8CA58C] hover:bg-[#748574] text-white px-8 py-3 rounded-md transition duration-300">
              Посмотреть расписание
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
