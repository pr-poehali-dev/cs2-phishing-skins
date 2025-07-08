import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = {
    USD: { symbol: "$", rate: 1 },
    EUR: { symbol: "€", rate: 0.85 },
    RUB: { symbol: "₽", rate: 75 },
    STEAM: { symbol: "S", rate: 1 },
  };

  const popularItems = [
    {
      id: 1,
      name: "AK-47 | Redline",
      price: 45.99,
      rarity: "Classified",
      wear: "Field-Tested",
      image: "/img/353a98b3-7ac3-4a29-952c-c8a4633b9e92.jpg",
      seller: "ProGamer2024",
      rating: 4.8,
    },
    {
      id: 2,
      name: "AWP | Dragon Lore",
      price: 2899.99,
      rarity: "Covert",
      wear: "Factory New",
      image: "/img/353a98b3-7ac3-4a29-952c-c8a4633b9e92.jpg",
      seller: "SkinMaster",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Karambit | Fade",
      price: 1299.99,
      rarity: "Covert",
      wear: "Minimal Wear",
      image: "/img/353a98b3-7ac3-4a29-952c-c8a4633b9e92.jpg",
      seller: "KnifeLord",
      rating: 4.9,
    },
    {
      id: 4,
      name: "M4A4 | Howl",
      price: 899.99,
      rarity: "Contraband",
      wear: "Field-Tested",
      image: "/img/353a98b3-7ac3-4a29-952c-c8a4633b9e92.jpg",
      seller: "RareCollector",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Glock-18 | Fade",
      price: 189.99,
      rarity: "Restricted",
      wear: "Factory New",
      image: "/img/353a98b3-7ac3-4a29-952c-c8a4633b9e92.jpg",
      seller: "GlockFan",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Butterfly Knife | Doppler",
      price: 1599.99,
      rarity: "Covert",
      wear: "Factory New",
      image: "/img/353a98b3-7ac3-4a29-952c-c8a4633b9e92.jpg",
      seller: "ButterflyKing",
      rating: 4.8,
    },
  ];

  const convertPrice = (price: number) => {
    const converted =
      price * currencies[selectedCurrency as keyof typeof currencies].rate;
    return `${currencies[selectedCurrency as keyof typeof currencies].symbol}${converted.toFixed(2)}`;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Covert":
        return "bg-red-500";
      case "Classified":
        return "bg-pink-500";
      case "Restricted":
        return "bg-purple-500";
      case "Contraband":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-slate-900 to-gaming-dark">
      {/* Header */}
      <header className="bg-gaming-dark/80 backdrop-blur-lg border-b border-gaming-orange/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-gaming-orange to-gaming-blue rounded-lg flex items-center justify-center animate-pulse-glow">
                  <Icon name="Gamepad2" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl font-bold text-white">SkinTrade</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск скинов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-gaming-dark/50 border-gaming-orange/30 text-white placeholder-gray-400"
                />
                <Icon
                  name="Search"
                  className="absolute right-3 top-3 text-gaming-orange"
                  size={16}
                />
              </div>

              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-gaming-dark/50 border border-gaming-orange/30 text-white px-3 py-2 rounded-md"
              >
                {Object.keys(currencies).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>

              <Button
                variant="outline"
                className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white relative"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-gaming-orange text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              <Avatar className="border-2 border-gaming-orange">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gaming-orange text-white">
                  У
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-orange/10 to-gaming-blue/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Лучшая торговая площадка
              <span className="block text-gaming-orange">
                игровых скинов CS2
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Безопасная торговля, мгновенные платежи, проверенные продавцы
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-gaming-orange hover:bg-gaming-orange/90 text-white px-8 py-3 text-lg animate-pulse-glow"
              >
                <Icon name="Zap" className="mr-2" size={20} />
                Начать торговлю
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white px-8 py-3 text-lg"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gaming-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-orange mb-2">
                50K+
              </div>
              <div className="text-gray-400">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-blue mb-2">
                $2.5M+
              </div>
              <div className="text-gray-400">Объём торгов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-orange mb-2">
                100K+
              </div>
              <div className="text-gray-400">Успешных сделок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-blue mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Безопасность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white">
              Популярные предметы
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
              >
                <Icon name="Filter" className="mr-2" size={16} />
                Фильтры
              </Button>
              <Button
                variant="outline"
                className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white"
              >
                <Icon name="ArrowUpDown" className="mr-2" size={16} />
                Сортировка
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-gaming-dark/80 border-gaming-orange/20 hover:border-gaming-orange/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge
                      className={`absolute top-2 left-2 ${getRarityColor(item.rarity)} text-white`}
                    >
                      {item.rarity}
                    </Badge>
                    <Badge className="absolute top-2 right-2 bg-gaming-dark/80 text-white">
                      {item.wear}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-white mb-2">{item.name}</CardTitle>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gaming-orange">
                      {convertPrice(item.price)}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                      <span className="text-white text-sm">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-gaming-blue text-white text-xs">
                          {item.seller[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-gray-400 text-sm">
                        {item.seller}
                      </span>
                    </div>
                    <Icon
                      name="Shield"
                      className="text-gaming-blue"
                      size={16}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gaming-orange hover:bg-gaming-orange/90 text-white">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Купить
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white"
                    >
                      <Icon name="Eye" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profile & Cart Section */}
      <section className="py-16 bg-gaming-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile */}
            <Card className="bg-gaming-dark/80 border-gaming-orange/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="User"
                    className="mr-2 text-gaming-orange"
                    size={20}
                  />
                  Профиль
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="w-16 h-16 border-2 border-gaming-orange">
                    <AvatarFallback className="bg-gaming-orange text-white text-xl">
                      Ю
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold">Юрий Гагарин</h4>
                    <p className="text-gray-400">Уровень: Космонавт</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Icon
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={14}
                      />
                      <span className="text-white text-sm">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Опыт</span>
                      <span className="text-white">850/1000</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-gaming-orange font-bold">127</div>
                      <div className="text-gray-400 text-sm">Сделок</div>
                    </div>
                    <div>
                      <div className="text-gaming-blue font-bold">$5,247</div>
                      <div className="text-gray-400 text-sm">Оборот</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cart */}
            <Card className="bg-gaming-dark/80 border-gaming-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="ShoppingCart"
                    className="mr-2 text-gaming-blue"
                    size={20}
                  />
                  Корзина
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Icon
                    name="ShoppingCart"
                    className="mx-auto text-gray-500 mb-4"
                    size={48}
                  />
                  <p className="text-gray-400 mb-4">Корзина пуста</p>
                  <Button className="bg-gaming-blue hover:bg-gaming-blue/90 text-white">
                    Перейти к покупкам
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="bg-gaming-dark/80 border-gaming-orange/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="CreditCard"
                    className="mr-2 text-gaming-orange"
                    size={20}
                  />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Wallet"
                        className="text-gaming-orange"
                        size={16}
                      />
                      <span className="text-white">Steam Wallet</span>
                    </div>
                    <span className="text-gaming-orange">$23.45</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="CreditCard"
                        className="text-gaming-blue"
                        size={16}
                      />
                      <span className="text-white">Visa **** 1234</span>
                    </div>
                    <Icon
                      name="CheckCircle"
                      className="text-green-400"
                      size={16}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Banknote"
                        className="text-yellow-400"
                        size={16}
                      />
                      <span className="text-white">Криптовалюта</span>
                    </div>
                    <Icon name="Plus" className="text-gray-400" size={16} />
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gaming-orange hover:bg-gaming-orange/90 text-white">
                  <Icon name="Plus" className="mr-2" size={16} />
                  Добавить способ оплаты
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Нужна помощь?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Наша служба поддержки работает 24/7 и готова помочь вам с любыми
              вопросами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gaming-dark/80 border-gaming-orange/20 text-center">
              <CardContent className="pt-6">
                <Icon
                  name="MessageCircle"
                  className="mx-auto text-gaming-orange mb-4"
                  size={48}
                />
                <h4 className="text-white font-semibold mb-2">Онлайн чат</h4>
                <p className="text-gray-400 mb-4">
                  Мгновенные ответы на ваши вопросы
                </p>
                <Button className="bg-gaming-orange hover:bg-gaming-orange/90 text-white">
                  Открыть чат
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gaming-dark/80 border-gaming-blue/20 text-center">
              <CardContent className="pt-6">
                <Icon
                  name="Mail"
                  className="mx-auto text-gaming-blue mb-4"
                  size={48}
                />
                <h4 className="text-white font-semibold mb-2">
                  Email поддержка
                </h4>
                <p className="text-gray-400 mb-4">
                  Подробные ответы в течение часа
                </p>
                <Button
                  variant="outline"
                  className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white"
                >
                  Написать email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gaming-dark/80 border-gaming-orange/20 text-center">
              <CardContent className="pt-6">
                <Icon
                  name="Phone"
                  className="mx-auto text-gaming-orange mb-4"
                  size={48}
                />
                <h4 className="text-white font-semibold mb-2">Телефон</h4>
                <p className="text-gray-400 mb-4">
                  Голосовая поддержка для VIP
                </p>
                <Button className="bg-gaming-orange hover:bg-gaming-orange/90 text-white">
                  Позвонить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-dark/80 border-t border-gaming-orange/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gaming-orange to-gaming-blue rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" className="text-white" size={16} />
                </div>
                <span className="text-white font-bold text-lg">SkinTrade</span>
              </div>
              <p className="text-gray-400">
                Безопасная торговая площадка игровых предметов
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Новости
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Социальные сети</h5>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
                >
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white"
                >
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
                >
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gaming-orange/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkinTrade. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
