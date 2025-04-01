import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-3xl md:text-4xl mb-4">Что говорят наши ученики</h2>
          <p className="text-[#6D6875] max-w-2xl mx-auto">Мы гордимся тем, что помогаем нашим ученикам достигать их целей и находить внутреннюю гармонию.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F7F3E9] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-[#D17B49]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="inline-block fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#6D6875] italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${testimonial.avatarBg} rounded-full flex items-center justify-center mr-3`}>
                  <span className="text-white">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-[#748574]">{testimonial.name}</p>
                  {testimonial.period && <p className="text-sm text-[#6D6875]">{testimonial.period}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
