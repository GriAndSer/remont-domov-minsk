import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
  
  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Валидация
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Проверка капчи
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captcha.answer) !== correctAnswer) {
      toast({
        title: "Ошибка",
        description: "Неверный ответ на капчу",
        variant: "destructive",
      });
      setIsSubmitting(false);
      generateCaptcha();
      return;
    }

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          captcha: correctAnswer,
        },
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      // Очистка формы
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      generateCaptcha();
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Наши контакты</h2>
              
              <div className="space-y-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-card-foreground">Адрес</h3>
                        <p className="text-muted-foreground">
                          ул. Асаналиева, 36/2-1Н,
                          <br />
                          220004, г. Минск
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-card-foreground">Телефоны</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+375172710733" className="hover:text-primary transition-colors">
                            Тел/факс: +375 (17) 271 07 33
                          </a>
                          <br />
                          <a href="tel:+375296630009" className="hover:text-primary transition-colors">
                            GSM: +375 (29) 663 00 09
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-card-foreground">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:stroimed@mail.ru" className="hover:text-primary transition-colors">
                            stroimed@mail.ru
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-card-foreground">Режим работы</h3>
                        <p className="text-muted-foreground">
                          Пн-Пт: 08:00 - 17:00
                          <br />
                          Сб-Вс: выходной
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Оставить заявку</CardTitle>
                  <p className="text-muted-foreground">
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block text-card-foreground">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block text-card-foreground">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+375 29 123-45-67"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block text-card-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block text-card-foreground">
                        Сообщение *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Опишите, что вас интересует..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="captcha" className="text-sm font-medium mb-2 block text-card-foreground">
                        Проверка: Сколько будет {captcha.num1} + {captcha.num2}? *
                      </label>
                      <Input
                        id="captcha"
                        name="captcha"
                        type="number"
                        value={captcha.answer}
                        onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
                        placeholder="Введите ответ"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent to-[hsl(25_100%_50%)] hover:shadow-lg transition-shadow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
