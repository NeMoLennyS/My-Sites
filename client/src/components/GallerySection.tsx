import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Студия йоги интерьер"
  },
  {
    url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Групповое занятие"
  },
  {
    url: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    alt: "Индивидуальная практика"
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1520&q=80",
    alt: "Медитация"
  },
  {
    url: "https://images.unsplash.com/photo-1599447292761-40f4607e44d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Студия йоги пространство"
  },
  {
    url: "https://images.unsplash.com/photo-1599447292761-7939def5b1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Зона отдыха"
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1399&q=80",
    alt: "Практика на природе"
  },
  {
    url: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    alt: "Семинар по йоге"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-[#8CA58C] bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-3xl md:text-4xl mb-4">Галерея</h2>
          <p className="text-[#6D6875] max-w-2xl mx-auto">Загляните в нашу студию и атмосферу занятий. Наслаждайтесь спокойствием и гармонией вместе с нами.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/yogavaleriyaivanova73/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="inline-flex items-center bg-[#614C67] hover:bg-[#483A4D] text-white px-8 py-3 rounded-md transition duration-300">
              <FaInstagram className="mr-2" /> Больше фото в Instagram
            </Button>
          </a>
        </div>
        

      </div>
    </section>
  );
};

export default GallerySection;
