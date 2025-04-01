import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="main" className="relative h-[80vh] overflow-hidden">
      <div 
        className="absolute w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')" 
        }}
      />
      <div className="absolute inset-0 bg-[#614C67] bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-[#F7F3E9] font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl mb-6">Путь к внутренней гармонии</h2>
        <p className="text-[#F7F3E9] text-lg md:text-xl max-w-2xl mb-8">Откройте для себя практику йоги, которая меняет не только тело, но и сознание</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#schedule">
            <Button 
              className="bg-[#8CA58C] hover:bg-[#748574] text-[#F7F3E9] px-8 py-3 rounded-md transition duration-300"
            >
              Расписание занятий
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="outline"
              className="bg-transparent hover:bg-[#F7F3E9] hover:bg-opacity-20 text-[#F7F3E9] border border-[#F7F3E9] px-8 py-3 rounded-md transition duration-300"
            >
              Связаться с нами
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
