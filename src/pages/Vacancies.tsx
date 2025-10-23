import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Vacancies = () => {
  const vacancies = [
    {
      title: "Инженер по капитальному ремонту",
      type: "Полная занятость",
      salary: "от 2000 BYN",
      location: "Минск",
      description:
        "Требуется опытный инженер для координации работ по капитальному ремонту многоквартирных домов.",
      requirements: [
        "Высшее строительное образование",
        "Опыт работы от 3 лет",
        "Знание нормативной базы РБ",
        "Навыки работы с проектной документацией",
      ],
    },
    {
      title: "Прораб строительных работ",
      type: "Полная занятость",
      salary: "от 1800 BYN",
      location: "Минск",
      description:
        "В связи с расширением штата требуется прораб для организации и контроля строительных работ.",
      requirements: [
        "Среднее специальное или высшее образование",
        "Опыт работы прорабом от 2 лет",
        "Умение работать с бригадами",
        "Ответственность и пунктуальность",
      ],
    },
    {
      title: "Специалист по работе с заказчиками",
      type: "Полная занятость",
      salary: "от 1500 BYN",
      location: "Минск",
      description:
        "Требуется специалист для работы с жильцами и координации заявок на ремонт.",
      requirements: [
        "Высшее образование",
        "Коммуникабельность",
        "Опыт работы в строительной сфере приветствуется",
        "Знание ПК на уровне пользователя",
      ],
    },
    {
      title: "Электромонтер",
      type: "Полная занятость",
      salary: "от 1600 BYN",
      location: "Минск",
      description:
        "Требуется квалифицированный электромонтер для выполнения работ по ремонту электросетей.",
      requirements: [
        "Наличие квалификации электромонтера",
        "Группа допуска не ниже 4",
        "Опыт работы от 2 лет",
        "Ответственность и внимательность",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Вакансии</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Присоединяйтесь к команде профессионалов
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">Достойная зарплата</h3>
                <p className="text-sm text-muted-foreground">
                  Конкурентная оплата труда и своевременные выплаты
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">Стабильность</h3>
                <p className="text-sm text-muted-foreground">
                  Официальное трудоустройство и соцпакет
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">Карьерный рост</h3>
                <p className="text-sm text-muted-foreground">
                  Возможности для профессионального развития
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 text-card-foreground">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {vacancy.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {vacancy.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Wallet className="h-3 w-3" />
                          {vacancy.salary}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{vacancy.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-card-foreground">Требования:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {vacancy.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contacts">
                    <Button className="bg-gradient-to-r from-accent to-[hsl(25_100%_50%)]">
                      Откликнуться на вакансию
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vacancies;
