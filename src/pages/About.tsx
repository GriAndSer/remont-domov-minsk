import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const stats = [
    { value: "20+", label: "Лет опыта" },
    { value: "500+", label: "Завершенных объектов" },
    { value: "250+", label: "Специалистов" },
    { value: "100%", label: "Гарантия качества" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О нашей компании</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Мы создаем комфортную среду для жителей Минска уже более 20 лет
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-muted-foreground mb-4">
                ЧУП "Строймедсервис" - ведущая организация в сфере капитального ремонта многоквартирных домов в столице Беларуси. С момента основания в 2008 году мы успешно реализовали более 200 проектов различной сложности.
              </p>
              <p className="text-muted-foreground mb-4">
                Наша команда состоит из высококвалифицированных специалистов с многолетним опытом работы. Мы используем только проверенные технологии и качественные материалы, что гарантирует долговечность выполненных работ.
              </p>
              <p className="text-muted-foreground">
                Мы гордимся доверием, которое оказывают нам жители Минска, и постоянно совершенствуем качество наших услуг.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="О компании"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Наша миссия</h3>
                <p className="text-muted-foreground">
                  Обеспечивать высокое качество жизни горожан через профессиональный капитальный ремонт жилых домов, создавая безопасную и комфортную среду для каждой семьи.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Наше видение</h3>
                <p className="text-muted-foreground">
                  Стать лидером в сфере капитального ремонта в Беларуси, установив новые стандарты качества и профессионализма в отрасли.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Безупречное выполнение работ с гарантией результата
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
              <p className="text-muted-foreground">
                Опытная команда с высокой квалификацией
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ответственность</h3>
              <p className="text-muted-foreground">
                Выполнение обязательств в срок и в полном объеме
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
