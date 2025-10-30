import { ArrowRight, CheckCircle, HardHat, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-renovation.jpg";

const Home = () => {
  const services = [
    {
      title: "Ремонт фасадов",
      description: "Полное восстановление и утепление фасадов многоквартирных домов",
    },
    {
      title: "Ремонт кровли",
      description: "Капитальный ремонт крыш с применением современных материалов",
    },
    {
      title: "Инженерные сети",
      description: "Модернизация систем отопления, водоснабжения и канализации",
    },
    {
      title: "Благоустройство",
      description: "Обустройство придомовой территории и детских площадок",
    },
  ];

  const advantages = [
    {
      icon: HardHat,
      title: "Опыт более 20 лет",
      description: "Успешно завершили более 500 проектов",
    },
    {
      icon: Users,
      title: "Команда профессионалов",
      description: "Квалифицированные специалисты с сертификатами",
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Капитальный ремонт
            <br />
            <span className="bg-gradient-to-r from-accent to-[hsl(25_100%_50%)] bg-clip-text text-transparent">
              многоквартирных жилых домов
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Профессиональный подход к ремонту вашего дома в Минске
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contacts">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-2xl transition-all">
                Оставить заявку
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Комплексный подход к капитальному ремонту многоквартирных домов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-[hsl(25_100%_50%)] rounded-full mb-4">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Готовы начать ремонт?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
          </p>
          <Link to="/contacts">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
