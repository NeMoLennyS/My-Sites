import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import yogaCourseImage from "../assets/yoga_course.jpg";

const CoursePromoSection = () => {
  return (
    <section className="py-10 md:py-16 bg-[#F7F3E9]" id="course">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-[#4A5759] mb-4 md:mb-6">
            Авторский курс «Основы йоги»
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#D17B49] mx-auto mb-4 md:mb-8"></div>
          <p className="text-[#6D6875] text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2">
            Во время изучения курса «Основы йоги» вы приобретете привычку регулярно заниматься йогой.
            Это позволит вам измениться к лучшему, укрепить тело, нервную систему и
            поменять вашу точку зрения на многие события с минуса на плюс.
          </p>
          <p className="text-[#6D6875] text-sm md:text-base lg:text-lg max-w-3xl mx-auto mt-3 md:mt-4 px-2">
            Уйти от отрицания в принятие и самостоятельно создать гармонию в своей жизни!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={yogaCourseImage} 
              alt="Авторский курс Основы йоги" 
              className="w-full h-auto object-cover" 
            />
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#4A5759] mb-4 md:mb-6 mt-2 md:mt-0">
              Концепция курса
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h4 className="text-[#8CA58C] text-lg md:text-xl mb-2 md:mb-3">Йога - не средство, а инструмент</h4>
                <p className="text-[#6D6875] text-sm md:text-base">
                  Йога не является спортивной дисциплиной, наукой, психотерапией или спортивной дисциплиной.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h4 className="text-[#8CA58C] text-lg md:text-xl mb-2 md:mb-3">Конечная форма - не цель</h4>
                <p className="text-[#6D6875] text-sm md:text-base">
                  В йоге нет конечной формы. Практика задействует не только физическое тело, 
                  но и влияет на работу ума. Есть несколько ступеней развития, и человек 
                  самостоятельно выбирает, на какой ступени ему совершенствоваться.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h4 className="text-[#8CA58C] text-lg md:text-xl mb-2 md:mb-3">От простого к сложному</h4>
                <p className="text-[#6D6875] text-sm md:text-base">
                  Практикуя йогу, мы всегда идем по принципу "от простого к сложному". 
                  Это необходимо для того, чтобы избежать травматизации.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h4 className="text-[#8CA58C] text-lg md:text-xl mb-2 md:mb-3">Только базовые асаны</h4>
                <p className="text-[#6D6875] text-sm md:text-base">
                  Нет необходимости изучать тысячи асан. В "Хатха-йоге прадипике" изначально 
                  было всего 15 асан. Благодаря этому курсу вы научитесь самостоятельно 
                  собирать свои практики, исходя из тех асан, которые будут представлены.
                </p>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8">
              <Button 
                className="bg-[#D17B49] hover:bg-[#B05A2A] text-white rounded-full px-5 py-3 md:px-8 md:py-6 text-sm md:text-lg flex items-center"
                onClick={() => {
                  // Открытие WhatsApp с предустановленным сообщением
                  window.open("https://wa.me/79089828222?text=Здравствуйте!%20Интересует%20курс%20«Основы%20йоги».%20Расскажите%20подробнее.", "_blank");
                }}
              >
                Записаться на курс
                <ChevronRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 bg-white p-5 md:p-8 rounded-lg shadow-md">
          <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#4A5759] mb-4 md:mb-6 text-center">
            Часто задаваемые вопросы
          </h3>
          
          <div className="space-y-4 md:space-y-6">
            <div className="border-b border-gray-200 pb-3 md:pb-4">
              <h4 className="text-[#8CA58C] text-lg md:text-xl mb-1 md:mb-2">Почему мы занимаемся йогой?</h4>
              <p className="text-[#6D6875] text-sm md:text-base">
                Чтобы оставаться здоровыми, счастливыми, иметь возможность воплощать наши мечты в реальность. 
                Йога - это возможность путешествовать через тело к уму.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-3 md:pb-4">
              <h4 className="text-[#8CA58C] text-lg md:text-xl mb-1 md:mb-2">Какая связь с религией?</h4>
              <p className="text-[#6D6875] text-sm md:text-base">
                Заниматься йогой может человек с любым мировоззрением. Йога - это не религия 
                и это не про разделение, это возможность объединять людей всех конфессий.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#8CA58C] text-lg md:text-xl mb-1 md:mb-2">Какое количество асан в йоге?</h4>
              <p className="text-[#6D6875] text-sm md:text-base">
                В древних текстах упоминается разное количество асан. Например, в «Хатха-йога Прадипика» 
                описывается всего 15 асан, а в «Гхеранда Самхита» говорится о 32 асанах. 
                Однако для нашей практики мы используем основные базовые позы, которые 
                доступны обычному человеку и позволяют развивать силу и гибкость.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePromoSection;