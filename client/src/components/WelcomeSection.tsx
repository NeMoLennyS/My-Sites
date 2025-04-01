import { HeartIcon, Users, Smile } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F7F3E9]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-3xl md:text-4xl mb-6">Добро пожаловать в Йога Ганеша</h2>
          <p className="text-[#6D6875] mb-8">Наша студия - это место, где вы можете найти внутренний баланс, укрепить тело и успокоить ум. Мы предлагаем различные стили йоги для практикующих всех уровней в спокойной и поддерживающей атмосфере.</p>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-[#D17B49] text-4xl mb-2 flex justify-center">
                <span className="inline-flex items-center justify-center">
                  <Smile size={36} />
                </span>
              </div>
              <h3 className="text-[#8CA58C] font-medium mb-1">Опыт</h3>
              <p className="text-sm text-[#6D6875]">Более 6 лет практики</p>
            </div>
            
            <div className="text-center">
              <div className="text-[#D17B49] text-4xl mb-2 flex justify-center">
                <span className="inline-flex items-center justify-center">
                  <Users size={36} />
                </span>
              </div>
              <h3 className="text-[#8CA58C] font-medium mb-1">Сообщество</h3>
              <p className="text-sm text-[#6D6875]">Дружелюбная атмосфера</p>
            </div>
            
            <div className="text-center">
              <div className="text-[#D17B49] text-4xl mb-2 flex justify-center">
                <span className="inline-flex items-center justify-center">
                  <HeartIcon size={36} />
                </span>
              </div>
              <h3 className="text-[#8CA58C] font-medium mb-1">Подход</h3>
              <p className="text-sm text-[#6D6875]">Индивидуальное внимание</p>
            </div>
          </div>
          
          <a href="#about" className="inline-block text-[#D17B49] hover:text-[#B05A2A]">
            Узнать больше о нашей философии 
            <svg className="inline-block ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
