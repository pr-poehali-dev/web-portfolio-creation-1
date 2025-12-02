import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioProjects = [
    { id: 1, title: 'Клиент А', description: 'Профессиональная консультация', category: 'Частные клиенты' },
    { id: 2, title: 'Клиент Б', description: 'Комплексное обследование', category: 'Корпоративные клиенты' },
    { id: 3, title: 'Клиент В', description: 'Экспресс-диагностика', category: 'Частные клиенты' },
    { id: 4, title: 'Клиент Г', description: 'Консультационные услуги', category: 'Корпоративные клиенты' },
  ];

  const services = [
    { icon: 'Ruler', title: 'Первичная консультация', description: 'Профессиональный подход к каждому клиенту' },
    { icon: 'LineChart', title: 'Детальная аналитика', description: 'Подробный анализ с предоставлением отчетности' },
    { icon: 'Users', title: 'Консультации для близких', description: 'Информирование доверенных лиц клиента' },
    { icon: 'Shield', title: 'Конфиденциальность', description: 'Гарантия полной конфиденциальности данных' },
  ];

  const blogPosts = [
    { id: 1, title: 'Важность профессиональных измерений', date: '15 ноября 2024', excerpt: 'Почему стоит обращаться к специалистам...' },
    { id: 2, title: 'Стандарты и методология', date: '8 ноября 2024', excerpt: 'Современные подходы к профессиональной практике...' },
    { id: 3, title: 'Психологические аспекты', date: '1 ноября 2024', excerpt: 'Этические стороны профессиональной деятельности...' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading">Профессиональное портфолио</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'portfolio', 'services', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О мне'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center animate-fade-in">
          <h2 className="text-6xl font-bold font-heading mb-6">Профессиональные услуги высшего класса</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Специализируюсь на профессиональных измерениях и консультациях с последующим информированием близких
          </p>
          <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
            Связаться со мной
          </Button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-muted/30">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold font-heading mb-8 text-center">О мне</h2>
          <Card className="animate-slide-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Опыт и квалификация</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Более 10 лет профессиональной практики в области специализированных измерений и консультаций.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Индивидуальный подход к каждому клиенту, строгое соблюдение профессиональных стандартов и конфиденциальности.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Ключевые навыки</h3>
                  <ul className="space-y-3">
                    {['Профессиональные измерения', 'Аналитическая отчетность', 'Консультирование', 'Конфиденциальность'].map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Icon name="CheckCircle2" className="text-primary" size={20} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold font-heading mb-12 text-center">Портфолио</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioProjects.map((project, idx) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Icon name="Briefcase" className="text-primary" size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {project.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center px-6 bg-muted/30">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold font-heading mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold font-heading mb-12 text-center">Блог</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-muted/30">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl font-bold font-heading mb-12 text-center">Контакты</h2>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем запросе..." rows={5} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm text-muted-foreground">info@example.com</p>
                  </div>
                  <div>
                    <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                  <div>
                    <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2024 Профессиональное портфолио. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
