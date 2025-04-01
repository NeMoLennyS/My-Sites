import { Button } from "@/components/ui/button";
import { scheduleData } from "../data/schedule";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">Расписание занятий</h2>
          <p className="text-[#6D6875] text-sm md:text-base max-w-2xl mx-auto px-2">Присоединяйтесь к нашим регулярным занятиям. Пожалуйста, бронируйте место заранее, так как количество мест ограничено.</p>
        </div>
        
        {/* Десктопная версия таблицы (скрытая на мобильных) */}
        <div className="hidden md:block bg-[#F7F3E9] rounded-lg p-4 md:p-6 overflow-x-auto shadow-md">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[#A7BBA7]">
                <th className="text-left pb-4 text-[#8CA58C] font-medium">День</th>
                <th className="text-left pb-4 text-[#8CA58C] font-medium">Время</th>
                <th className="text-left pb-4 text-[#8CA58C] font-medium">Занятие</th>
                <th className="text-right pb-4 text-[#8CA58C] font-medium">Уровень</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData
                .filter(day => day.classes.length > 0)
                .map((day, dayIndex) => (
                day.classes.map((classItem, classIndex) => (
                  <tr key={`${dayIndex}-${classIndex}`} className="border-b border-[#A7BBA7]/30">
                    {classIndex === 0 && (
                      <td className="py-4 font-medium" rowSpan={day.classes.length}>{day.name}</td>
                    )}
                    <td className="py-4">{classItem.time}</td>
                    <td className="py-4">{classItem.name}</td>
                    <td className="py-4 text-right">
                      <span className={`
                        ${classItem.level === 'Начинающий' || classItem.level === 'Все уровни' || classItem.level === 'Специальный' ? 'bg-[#A7BBA7]/30 text-[#748574]' : ''} 
                        ${classItem.level === 'Средний' ? 'bg-[#E6A685]/30 text-[#B05A2A]' : ''}
                        ${classItem.level === 'Продвинутый' ? 'bg-[#7E6784]/30 text-[#483A4D]' : ''}
                        rounded-full px-2 py-1 text-xs
                      `}>
                        {classItem.level}
                      </span>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Мобильная версия карточками (видимая только на мобильных) */}
        <div className="md:hidden space-y-4">
          {scheduleData
            .filter(day => day.classes.length > 0)
            .map((day, dayIndex) => (
              <div key={dayIndex} className="bg-[#F7F3E9] rounded-lg p-4 shadow-md">
                <h3 className="font-medium text-[#8CA58C] text-lg mb-3 border-b border-[#A7BBA7]/30 pb-2">{day.name}</h3>
                <div className="space-y-4">
                  {day.classes.map((classItem, classIndex) => (
                    <div key={classIndex} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-[#4A5759]">{classItem.name}</span>
                        <span className={`
                          ${classItem.level === 'Начинающий' || classItem.level === 'Все уровни' || classItem.level === 'Специальный' ? 'bg-[#A7BBA7]/30 text-[#748574]' : ''} 
                          ${classItem.level === 'Средний' ? 'bg-[#E6A685]/30 text-[#B05A2A]' : ''}
                          ${classItem.level === 'Продвинутый' ? 'bg-[#7E6784]/30 text-[#483A4D]' : ''}
                          rounded-full px-2 py-1 text-xs
                        `}>
                          {classItem.level}
                        </span>
                      </div>
                      <div className="text-sm text-[#6D6875]">
                        <span>{classItem.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
        
        <div className="mt-6 md:mt-8">
          <div className="bg-[#F7F3E9] rounded-lg p-4 md:p-6 mb-6 md:mb-8 shadow-md">
            <h3 className="text-[#8CA58C] text-lg md:text-xl mb-3 md:mb-4 font-['Playfair_Display']">Индивидуальные уроки включают:</h3>
            <ul className="list-disc pl-5 md:pl-6 text-[#6D6875] space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Belly mix</li>
              <li>Хатха йога</li>
              <li>Восточные танцы</li>
              <li>Растяжка</li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-[#6D6875] mb-4 text-sm md:text-base px-2">Для бронирования места на занятие, пожалуйста, свяжитесь с нами по телефону или через форму обратной связи.</p>
            <a href="#contact">
              <Button className="bg-[#D17B49] hover:bg-[#B05A2A] text-white px-6 md:px-8 py-2 md:py-3 rounded-md transition duration-300 text-sm md:text-base">
                Забронировать занятие
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
