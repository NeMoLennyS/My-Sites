import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Пожалуйста, введите корректный email" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });
  
  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Сообщение отправлено",
        description: data.message || "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
      setSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message || "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
      setSubmitting(false);
    }
  });
  
  const onSubmit = (values: FormValues) => {
    setSubmitting(true);
    mutation.mutate(values);
  };
  
  return (
    <section id="contact" className="py-10 md:py-16 lg:py-20 bg-[#8CA58C] bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">Свяжитесь с нами</h2>
          <p className="text-[#6D6875] text-sm md:text-base max-w-2xl mx-auto px-2">Мы всегда рады ответить на ваши вопросы и помочь вам найти подходящие занятия.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
              <h3 className="font-['Playfair_Display'] text-[#8CA58C] text-xl md:text-2xl mb-4 md:mb-6">Форма обратной связи</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6D6875] text-sm md:text-base">Ваше имя</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 border border-[#A7BBA7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8CA58C] text-sm md:text-base" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs md:text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6D6875] text-sm md:text-base">Электронная почта</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 border border-[#A7BBA7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8CA58C] text-sm md:text-base" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs md:text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6D6875] text-sm md:text-base">Телефон</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="tel"
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 border border-[#A7BBA7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8CA58C] text-sm md:text-base" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs md:text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6D6875] text-sm md:text-base">Сообщение</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={4}
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 border border-[#A7BBA7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8CA58C] text-sm md:text-base" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs md:text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full bg-[#8CA58C] hover:bg-[#748574] text-white py-2 md:py-3 rounded-md transition duration-300 text-sm md:text-base"
                  >
                    {submitting ? "Отправка..." : "Отправить сообщение"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md mb-6 md:mb-8">
              <h3 className="font-['Playfair_Display'] text-[#8CA58C] text-xl md:text-2xl mb-4 md:mb-6">Контактная информация</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="text-[#D17B49] mt-1 mr-3 md:mr-4">
                    <MapPin size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#748574] mb-0.5 md:mb-1 text-sm md:text-base">Адрес</h4>
                    <p className="text-[#6D6875] text-xs md:text-sm">Русская 65Б строение 2, город Владивосток, 690105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#D17B49] mt-1 mr-3 md:mr-4">
                    <Phone size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#748574] mb-0.5 md:mb-1 text-sm md:text-base">Телефон</h4>
                    <p className="text-[#6D6875] text-xs md:text-sm">+7 908 982-82-22</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#D17B49] mt-1 mr-3 md:mr-4">
                    <Mail size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#748574] mb-0.5 md:mb-1 text-sm md:text-base">Электронная почта</h4>
                    <p className="text-[#6D6875] text-xs md:text-sm">valeriya-ivanova-73@mail.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#D17B49] mt-1 mr-3 md:mr-4">
                    <Clock size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#748574] mb-0.5 md:mb-1 text-sm md:text-base">Часы работы</h4>
                    <p className="text-[#6D6875] text-xs md:text-sm">
                      Понедельник: 11:00 - 20:00<br />
                      Вторник - Четверг: 7:00 - 21:00<br />
                      Пятница: 11:00 - 20:00<br />
                      Суббота: 8:45 - 18:00<br />
                      Воскресенье: Закрыто
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 md:mt-8">
                <h4 className="font-medium text-[#748574] mb-2 md:mb-4 text-sm md:text-base">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/yogavaleriyaivanova73/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D17B49] hover:text-[#B05A2A] text-xl md:text-2xl transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2F%2Bdf-HxKbSdOAwY2Y6%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabZlZc9pfGxT3dsMQcUNkNOEwPrl6LCObDGK6z-J_bpFm4esB5b38jX3Jw_aem_pBsxktdUosra4AlokTpGeA&e=AT3tLf4uM3Yy7Hv5tj6SQ9yeFvjgGSuaxLTQYZ9sPoB4j_EBJd__Hgn7BfW11OUNI7zU78CjRh50XuIBjg04aPv8gcdy92vNpC_6nwQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D17B49] hover:text-[#B05A2A] text-xl md:text-2xl transition duration-300"
                  >
                    <FaTelegram />
                  </a>
                  <a 
                    href="https://wa.me/79089828222" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D17B49] hover:text-[#B05A2A] text-xl md:text-2xl transition duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
              <h3 className="font-['Playfair_Display'] text-[#8CA58C] text-xl md:text-2xl mb-3 md:mb-6">Наше расположение</h3>
              <div className="h-48 md:h-56 lg:h-64 bg-gray-200 rounded-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.222115631499!2d131.91886817655693!3d43.119429671123054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39463c4fa9a85%3A0x52e20dd52da25d92!2z0YPQuy4g0KDRg9GB0YHQutCw0Y8sIDY10JEg0YHRgtGA0L7QtdC90LjQtSAyLCDQktC70LDQtNC40LLQvtGB0YLQvtC6LCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwgNjkwMTA1!5e0!3m2!1sru!2sru!4v1713248926371!5m2!1sru!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                  title="Карта местоположения: Русская 65Б строение 2, Владивосток, 690105"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
