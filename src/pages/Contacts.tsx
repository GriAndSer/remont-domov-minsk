import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
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

    try {
      // TODO: Здесь будет интеграция с Telegram Bot
      // Для примера просто показываем успешное сообщение
      const telegramMessage = `
🏢 Новая заявка с сайта КапРемонт Минск

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
📧 Email: ${formData.email || "Не указан"}
💬 Сообщение: ${formData.message}
      `.trim();

      console.log("Telegram message:", telegramMessage);

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
    } catch (error) {
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
                          220123, г. Минск,
                          <br />
                          ул. Строителей, 15
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
                          <a href="tel:+375291234567" className="hover:text-primary transition-colors">
                            +375 29 123-45-67
                          </a>
                          <br />
                          <a href="tel:+375172334455" className="hover:text-primary transition-colors">
                            +375 17 233-44-55
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
                          <a href="mailto:info@kapremont.by" className="hover:text-primary transition-colors">
                            info@kapremont.by
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
                          Понедельник - Пятница: 9:00 - 18:00
                          <br />
                          Суббота: 10:00 - 15:00
                          <br />
                          Воскресенье: выходной
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
