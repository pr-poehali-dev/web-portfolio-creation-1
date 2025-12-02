import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [revealedPeople, setRevealedPeople] = useState<number[]>([]);

  const celebrities = [
    { id: 1, name: 'Илон Маск', occupation: 'CEO Tesla & SpaceX', size: '17.8 см', price: 5000, image: '🚀' },
    { id: 2, name: 'Владимир Путин', occupation: 'Президент РФ', size: '14.2 см', price: 15000, image: '🇷🇺' },
    { id: 3, name: 'Дональд Трамп', occupation: 'Экс-президент США', size: '11.4 см', price: 8000, image: '🇺🇸' },
    { id: 4, name: 'Джефф Безос', occupation: 'Основатель Amazon', size: '13.6 см', price: 6000, image: '📦' },
    { id: 5, name: 'Марк Цукерберг', occupation: 'CEO Meta', size: '12.9 см', price: 4500, image: '👤' },
    { id: 6, name: 'Билл Гейтс', occupation: 'Основатель Microsoft', size: '15.3 см', price: 7000, image: '💻' },
  ];

  const reviews = [
    { id: 1, name: 'Анна К.', rating: 5, text: 'Наконец-то узнала правду о своем кумире! Информация достоверная, проверяла сама 😏', verified: true },
    { id: 2, name: 'Дмитрий М.', rating: 5, text: 'Был в шоке от результатов! Деньги не жалею, теперь могу спать спокойно.', verified: true },
    { id: 3, name: 'Екатерина Л.', rating: 5, text: 'Купила данные на бывшего начальника... Теперь понятно, почему он такой злой 😂', verified: false },
    { id: 4, name: 'Алексей В.', rating: 4, text: 'Точные измерения, конфиденциальная доставка. Рекомендую!', verified: true },
  ];

  const handleReveal = (id: number) => {
    if (!revealedPeople.includes(id)) {
      setRevealedPeople([...revealedPeople, id]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 bg-secondary/10 border-b border-secondary/30 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Ruler" className="text-primary" size={28} />
            <span className="font-heading text-xl font-bold">SizeLeaks</span>
          </div>
          <Badge variant="destructive" className="animate-pulse">
            <Icon name="AlertTriangle" size={14} className="mr-1" />
            Конфиденциально
          </Badge>
        </div>
      </div>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/40">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Уже 12,847 довольных клиентов
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in leading-tight">
            Узнайте НАСТОЯЩИЙ размер<br />
            <span className="text-primary">любого известного человека</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Мы профессионально измеряем мужское достоинство и за вашу цену готовы раскрыть эксклюзивные данные
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-green-400">
              <Icon name="CheckCircle2" size={20} />
              <span>Точные измерения</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Icon name="Shield" size={20} />
              <span>100% конфиденциально</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Icon name="Zap" size={20} />
              <span>Мгновенный доступ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Выберите интересующего человека
            </h2>
            <p className="text-lg text-muted-foreground">
              Нажмите на карточку, чтобы раскрыть секретную информацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.map((person, idx) => {
              const isRevealed = revealedPeople.includes(person.id);
              return (
                <Card 
                  key={person.id} 
                  className="relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-border hover:border-primary/50 cursor-pointer group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => handleReveal(person.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-6xl">{person.image}</div>
                      <Badge variant="secondary" className="text-xs">
                        {person.price.toLocaleString()} ₽
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-1">{person.name}</CardTitle>
                    <CardDescription className="text-base">{person.occupation}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 mb-4 relative overflow-hidden">
                      {!isRevealed && (
                        <div className="absolute inset-0 backdrop-blur-md bg-muted/80 flex items-center justify-center">
                          <Icon name="Lock" className="text-primary" size={32} />
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Размер:</span>
                        <span className={`text-2xl font-bold ${isRevealed ? 'text-primary' : 'blur-sm'}`}>
                          {person.size}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      variant={isRevealed ? "secondary" : "default"}
                      size="lg"
                    >
                      {isRevealed ? (
                        <>
                          <Icon name="CheckCircle2" className="mr-2" size={18} />
                          Данные раскрыты
                        </>
                      ) : (
                        <>
                          <Icon name="Eye" className="mr-2" size={18} />
                          Раскрыть за {person.price.toLocaleString()} ₽
                        </>
                      )}
                    </Button>
                  </CardContent>

                  {isRevealed && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                        <Icon name="Unlock" size={12} className="mr-1" />
                        Открыто
                      </Badge>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Отзывы довольных клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Более 12,000 человек уже получили секретную информацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <Card 
                key={review.id} 
                className="animate-fade-in hover:shadow-lg transition-shadow border-border"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg mb-1 flex items-center gap-2">
                        {review.name}
                        {review.verified && (
                          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                            <Icon name="BadgeCheck" size={12} className="mr-1" />
                            Проверено
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Shield" size={64} className="mx-auto mb-6 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Как это работает?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите персону</h3>
              <p className="text-muted-foreground">Выберите интересующего человека из нашей базы данных</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Оплатите доступ</h3>
              <p className="text-muted-foreground">Безопасная оплата через криптовалюту или банковскую карту</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите данные</h3>
              <p className="text-muted-foreground">Мгновенный доступ к точным измерениям и дополнительной информации</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <Badge variant="destructive" className="mb-6 text-sm px-4 py-2 animate-pulse">
            <Icon name="AlertCircle" size={16} className="mr-2" />
            Ограниченное предложение
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Не нашли нужного человека?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Закажите индивидуальное измерение любого известного человека! Работаем по всему миру.
          </p>
          
          <Button size="lg" className="text-lg px-12 py-6 h-auto">
            <Icon name="Mail" className="mr-2" size={20} />
            Заказать индивидуальное измерение
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Ruler" className="text-primary" size={24} />
                <span className="font-heading text-xl font-bold">SizeLeaks</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные измерения с 2024 года. Конфиденциальность гарантирована.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Методология</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Конфиденциальность</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@sizeleaks.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Telegram: @sizeleaks
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 SizeLeaks. Вся информация получена законным путем. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
