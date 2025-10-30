import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import employee1 from "@/assets/employee-1.jpg";
import chiefEngineer from "@/assets/chief-engineer.jpg";

const Employees = () => {
  const team = [
    {
      name: "Иванов Александр Петрович",
      position: "Директор",
      phone: "+375 29 678 00 02",
      description: "Опыт работы в строительной отрасли более 40 лет",
      image: undefined as string | undefined,
      email: undefined as string | undefined,
    },
    {
      name: "Грибко Андрей Сергеевич",
      position: "Главный инженер",
      image: chiefEngineer,
      phone: "+375 29 632-02-02",
      description: "Сертифицированный специалист по строительному надзору",
      email: undefined as string | undefined,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Профессионалы с многолетним опытом работы
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                {member.image && (
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full transition-transform duration-300 hover:scale-110 ${
                        member.position === "Главный инженер" ? "object-contain" : "object-cover"
                      }`}
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-card-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  
                  <div className="space-y-2">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {member.phone}
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите присоединиться к команде?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Мы всегда рады талантливым и мотивированным специалистам
          </p>
          <a
            href="/vacancies"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Посмотреть вакансии
          </a>
        </div>
      </section>
    </div>
  );
};

export default Employees;
