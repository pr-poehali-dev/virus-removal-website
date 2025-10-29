import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Shield",
      title: "Удаление вирусов",
      description: "Полное удаление всех типов вредоносного ПО с гарантией результата"
    },
    {
      icon: "Search",
      title: "Глубокая диагностика",
      description: "Комплексная проверка системы на наличие скрытых угроз"
    },
    {
      icon: "Lock",
      title: "Защита данных",
      description: "Восстановление и защита ваших личных данных от утечек"
    }
  ];

  const features = [
    {
      icon: "Award",
      title: "Гарантия 100%",
      description: "Полная гарантия на все выполненные работы"
    },
    {
      icon: "Clock",
      title: "Быстрое решение",
      description: "Устранение проблемы в течение 24 часов"
    },
    {
      icon: "Users",
      title: "Экспертная команда",
      description: "Сертифицированные специалисты с опытом 10+ лет"
    },
    {
      icon: "HeadphonesIcon",
      title: "24/7 поддержка",
      description: "Круглосуточная техническая поддержка"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      role: "Директор ООО 'Техносфера'",
      text: "Быстро и профессионально очистили все компьютеры в офисе. Работают на совесть!",
      rating: 5
    },
    {
      name: "Мария Иванова",
      role: "Частный клиент",
      text: "Спасли все мои фотографии и документы после заражения. Очень благодарна!",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      role: "IT-менеджер",
      text: "Профессионалы своего дела. Рекомендую всем коллегам и знакомым.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <Icon name="ShieldCheck" size={32} />
            <span>ВирусЩит</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#offer" className="text-foreground hover:text-primary transition-colors">Предложение</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          </div>
          <Button className="hidden md:flex">
            Получить консультацию
          </Button>
        </nav>
      </header>

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Защитите ваш компьютер от <span className="text-primary">всех типов вирусов</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональное лечение компьютеров от вредоносного ПО с гарантией результата. Более 5000 довольных клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="ShieldCheck" size={20} className="mr-2" />
                Проверить компьютер
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать стоимость
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Вылеченных ПК</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Успешных кейсов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              О нашей компании
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы — команда сертифицированных специалистов по информационной безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Trophy" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">10+ лет опыта</h3>
                  <p className="text-muted-foreground">
                    Наша команда работает в сфере информационной безопасности более десяти лет
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Сертифицированные специалисты</h3>
                  <p className="text-muted-foreground">
                    Все наши эксперты имеют международные сертификаты в области кибербезопасности
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">
                    Мы находим оптимальное решение для каждого клиента и его ситуации
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/678c25d7-148b-4f7e-8a27-9579ae9dce2b/files/dc40714e-1d69-4a79-9251-ba8c36aeaaeb.jpg" 
                alt="Команда специалистов по кибербезопасности"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Лечение от всех типов вирусов
            </h2>
            <p className="text-lg text-muted-foreground">
              Комплексная защита вашего компьютера с гарантией результата
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 p-8 bg-accent/10 rounded-2xl max-w-4xl mx-auto border-2 border-accent/20 animate-fade-in">
            <div className="flex items-start gap-4">
              <Icon name="ShieldCheck" size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Гарантия результата</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Мы гарантируем полное удаление всех типов вредоносного ПО: троянов, шпионов, рекламных программ, вирусов-шифровальщиков и других угроз. Если проблема вернется в течение 30 дней — повторная очистка бесплатно.
                </p>
                <Button className="bg-accent hover:bg-accent/90">
                  Получить гарантию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наше уникальное предложение
            </h2>
            <p className="text-lg text-muted-foreground">
              Преимущества работы с нами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center animate-fade-in">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-primary/80 text-white border-0">
              <CardContent className="p-10">
                <Icon name="Gift" size={48} className="mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Специальное предложение</h3>
                <p className="text-lg mb-6 opacity-90">
                  При заказе услуги до конца месяца — бесплатная установка антивируса и настройка защиты на год
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Воспользоваться предложением
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Более 5000 довольных клиентов доверяют нам защиту своих компьютеров
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы защитить ваш компьютер?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Получите бесплатную консультацию и диагностику вашего компьютера прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Icon name="ShieldCheck" size={28} className="text-primary" />
                <span>ВирусЩит</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональная защита компьютеров от вирусов с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Удаление вирусов</li>
                <li>Диагностика системы</li>
                <li>Установка защиты</li>
                <li>Восстановление данных</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@virusshield.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 ВирусЩит. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}