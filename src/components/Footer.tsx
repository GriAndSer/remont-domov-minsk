import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-background">
                ЧУП "Строймедсервис"
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Профессиональный капитальный ремонт многоквартирных домов в Минске
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/employees" className="text-sm hover:text-accent transition-colors">
                  Наши сотрудники
                </Link>
              </li>
              <li>
                <Link to="/vacancies" className="text-sm hover:text-accent transition-colors">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+375291234567" className="hover:text-accent transition-colors">
                  +375 29 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@stroymedservice.by" className="hover:text-accent transition-colors">
                  info@stroymedservice.by
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>г. Минск, ул. Строителей, 15</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Режим работы</h3>
            <ul className="space-y-2 text-sm">
              <li>Пн-Пт: 9:00 - 18:00</li>
              <li>Сб: 10:00 - 15:00</li>
              <li>Вс: выходной</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ЧУП "Строймедсервис". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
