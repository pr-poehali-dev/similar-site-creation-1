import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const topPlayers = [
    { 
      rank: 1, 
      name: "cuties", 
      id: "643889", 
      clan: "cuties culture", 
      score: "30'4",
      avatar: "🧊",
      status: "up"
    },
    { 
      rank: 2, 
      name: "Vime", 
      id: "sqrt", 
      clan: "VimeWorld", 
      score: "28",
      avatar: "🎓",
      status: "down"
    },
    { 
      rank: 3, 
      name: "see", 
      id: "сталин", 
      clan: "Kyznetsky", 
      score: "24",
      avatar: "🥩",
      status: "up"
    },
    { 
      rank: 4, 
      name: "cuties", 
      id: "deathytears", 
      clan: "cuties culture", 
      score: "22",
      avatar: "🎮",
      status: "up"
    },
    { 
      rank: 5, 
      name: "cuties", 
      id: "Evarion", 
      clan: "cuties culture", 
      score: "20",
      avatar: "💎",
      status: "up"
    }
  ];

  const gameStats = [
    { label: "ПОБЕД", value: "126" },
    { label: "ИГР", value: "146" },
    { label: "УБИЙСТВ", value: "331" },
    { label: "СМЕРТЕЙ", value: "245" },
    { label: "КРОВАТЕЙ СЛОМАНО", value: "76" }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark text-gaming-light">
      {/* Header */}
      <header className="bg-neon-green text-gaming-dark px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon name="Menu" size={24} />
          <h1 className="text-xl font-bold font-rubik">vimetop</h1>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="Search" size={20} />
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gaming-dark hover:bg-gaming-dark/10"
            onClick={() => navigate('/analytics')}
          >
            <Icon name="BarChart3" size={20} />
          </Button>
          <Icon name="Shield" size={20} />
          <Icon name="Key" size={20} />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Поиск игрока..."
              className="w-full bg-gaming-gray border border-gray-600 rounded-lg px-4 py-3 text-gaming-light placeholder-gray-400 focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
            />
            <Icon name="Search" size={20} className="absolute right-3 top-3.5 text-gray-400" />
          </div>
          
          {/* Filter Options */}
          <div className="flex gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green transition-colors"
            >
              <Icon name="Filter" size={16} className="mr-2" />
              Фильтры
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green transition-colors"
            >
              <Icon name="ArrowUpDown" size={16} className="mr-2" />
              Сортировка
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green transition-colors"
            >
              <Icon name="Users" size={16} className="mr-2" />
              Кланы
            </Button>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="rating" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gaming-gray">
            <TabsTrigger 
              value="rating" 
              className="data-[state=active]:bg-neon-green data-[state=active]:text-gaming-dark font-semibold"
            >
              Рейтинг
            </TabsTrigger>
            <TabsTrigger 
              value="stats" 
              className="data-[state=active]:bg-neon-green data-[state=active]:text-gaming-dark font-semibold"
            >
              Статистика
            </TabsTrigger>
            <TabsTrigger 
              value="players" 
              className="data-[state=active]:bg-neon-green data-[state=active]:text-gaming-dark font-semibold"
            >
              Игроки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rating" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Hash" size={20} className="text-gray-400" />
              <Icon name="TrendingUp" size={20} className="text-neon-green" />
              <h2 className="text-lg font-semibold">Игрок</h2>
            </div>

            {/* Top Players List */}
            <div className="space-y-2">
              {topPlayers.map((player) => (
                <Card key={player.rank} className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 hover:animate-glow ${
                        player.status === 'up' ? 'bg-neon-green text-gaming-dark' : 'bg-red-500 text-white'
                      }`}>
                        {player.status === 'up' ? '+' : '-'}
                      </div>
                      <span className="text-2xl font-bold text-gray-400">{player.rank}</span>
                    </div>
                    
                    <div className="text-3xl">{player.avatar}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-red-400 font-semibold">&lt;{player.name}&gt;</span>
                        <span className="text-purple-400">{player.id}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-400">{player.clan}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-neon-green">{player.score}</div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="bg-neon-green text-gaming-dark hover:bg-neon-green/90 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/30"
                      onClick={() => navigate(`/player/${player.id}`)}
                    >
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gameStats.map((stat, index) => (
                <Card key={index} className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-neon-green mb-2 group-hover:animate-pulse-glow">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Progress Bars */}
            <Card className="bg-gaming-gray border-gray-600">
              <CardHeader>
                <CardTitle className="text-neon-green">Прогресс игрока</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Уровень</span>
                    <span className="text-sm text-neon-green">47 / 50</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Опыт</span>
                    <span className="text-sm text-neon-green">8,924 / 10,000</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Достижения</span>
                    <span className="text-sm text-neon-green">23 / 30</span>
                  </div>
                  <Progress value={77} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topPlayers.map((player, index) => (
                <Card key={index} className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors hover:shadow-lg hover:shadow-neon-green/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">{player.avatar}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-red-400">&lt;{player.name}&gt;</span>
                          <Badge variant="secondary" className="text-xs">{player.id}</Badge>
                        </div>
                        <div className="text-sm text-gray-400">{player.clan}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">Рейтинг: #{player.rank}</div>
                      <div className="text-lg font-bold text-neon-green">{player.score}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-gaming-gray border-t border-gray-600 px-4 py-3 flex justify-center gap-8 md:hidden">
          <button className="flex flex-col items-center gap-1 text-neon-green">
            <Icon name="BarChart3" size={24} />
            <span className="text-xs">Статы</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Icon name="Search" size={24} />
            <span className="text-xs">Поиск</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Icon name="User" size={24} />
            <span className="text-xs">Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;