import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatsChart from "@/components/StatsChart";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  
  const performanceData = [
    { name: 'Пн', kills: 12, wins: 3, deaths: 8 },
    { name: 'Вт', kills: 15, wins: 4, deaths: 6 },
    { name: 'Ср', kills: 8, wins: 2, deaths: 10 },
    { name: 'Чт', kills: 22, wins: 6, deaths: 5 },
    { name: 'Пт', kills: 18, wins: 5, deaths: 7 },
    { name: 'Сб', kills: 25, wins: 7, deaths: 4 },
    { name: 'Вс', kills: 20, wins: 4, deaths: 9 }
  ];

  const gameModesData = [
    { name: 'Solo', value: 45, color: '#00ff88' },
    { name: 'Duos', value: 30, color: '#8b5cf6' },
    { name: 'Squad', value: 20, color: '#f59e0b' },
    { name: 'Event', value: 5, color: '#ef4444' }
  ];

  const rankingTrend = [
    { name: 'Янв', rank: 15 },
    { name: 'Фев', rank: 12 },
    { name: 'Мар', rank: 8 },
    { name: 'Апр', rank: 5 },
    { name: 'Май', rank: 3 },
    { name: 'Июн', rank: 1 }
  ];

  const hoursData = [
    { name: '00-06', games: 2 },
    { name: '06-12', games: 8 },
    { name: '12-18', games: 15 },
    { name: '18-24', games: 12 }
  ];

  const topStats = [
    { 
      label: "Лучший K/D", 
      value: "4.2", 
      change: "+0.8", 
      trend: "up",
      icon: "Target"
    },
    { 
      label: "Лучшая серия", 
      value: "12", 
      change: "+3", 
      trend: "up",
      icon: "Zap"
    },
    { 
      label: "Время игры", 
      value: "45ч", 
      change: "+12ч", 
      trend: "up",
      icon: "Clock"
    },
    { 
      label: "Точность", 
      value: "78%", 
      change: "+5%", 
      trend: "up",
      icon: "Crosshair"
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark text-gaming-light">
      {/* Header */}
      <header className="bg-neon-green text-gaming-dark px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gaming-dark hover:bg-gaming-dark/10"
            onClick={() => navigate('/')}
          >
            <Icon name="ArrowLeft" size={20} />
          </Button>
          <h1 className="text-xl font-bold font-rubik">Аналитика</h1>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="Download" size={20} />
          <Icon name="Share2" size={20} />
          <Icon name="Settings" size={20} />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {topStats.map((stat, index) => (
            <Card key={index} className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon 
                    name={stat.icon as any} 
                    size={20} 
                    className="text-neon-green group-hover:animate-pulse-glow" 
                  />
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    stat.trend === 'up' ? 'bg-neon-green/20 text-neon-green' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-neon-green mb-1 group-hover:animate-pulse-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gaming-gray">
            {["performance", "trends", "comparison", "insights"].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab}
                className="data-[state=active]:bg-neon-green data-[state=active]:text-gaming-dark font-semibold capitalize"
              >
                {tab === "performance" ? "Производительность" : 
                 tab === "trends" ? "Тренды" :
                 tab === "comparison" ? "Сравнение" : "Аналитика"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatsChart 
                title="Убийства за неделю"
                data={performanceData}
                type="line"
                dataKey="kills"
                xKey="name"
                color="#00ff88"
              />
              
              <StatsChart 
                title="Победы за неделю"
                data={performanceData}
                type="bar"
                dataKey="wins"
                xKey="name"
                color="#8b5cf6"
              />
              
              <StatsChart 
                title="Игровые режимы"
                data={gameModesData}
                type="pie"
                dataKey="value"
                xKey="name"
              />
              
              <StatsChart 
                title="Активность по времени"
                data={hoursData}
                type="bar"
                dataKey="games"
                xKey="name"
                color="#f59e0b"
              />
            </div>
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatsChart 
                title="Изменение рейтинга"
                data={rankingTrend}
                type="line"
                dataKey="rank"
                xKey="name"
                color="#ef4444"
              />
              
              <Card className="bg-gaming-gray border-gray-600">
                <CardHeader>
                  <CardTitle className="text-neon-green flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Прогноз на следующий месяц
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gaming-dark/50 rounded-lg">
                    <span className="text-sm">Ожидаемый рейтинг</span>
                    <span className="text-neon-green font-bold">TOP 1</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gaming-dark/50 rounded-lg">
                    <span className="text-sm">Прогноз K/D</span>
                    <span className="text-purple-400 font-bold">1.8</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gaming-dark/50 rounded-lg">
                    <span className="text-sm">Новых побед</span>
                    <span className="text-yellow-400 font-bold">~35</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Comparison Tab */}
          <TabsContent value="comparison" className="space-y-6">
            <Card className="bg-gaming-gray border-gray-600">
              <CardHeader>
                <CardTitle className="text-neon-green flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Сравнение с топ игроками
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "cuties", metric: "K/D", value: 1.35, compare: 2.1, status: "below" },
                    { name: "Vime", metric: "WinRate", value: 86, compare: 78, status: "above" },
                    { name: "see", metric: "Kills/Game", value: 2.3, compare: 2.8, status: "below" }
                  ].map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-red-400">&lt;{player.name}&gt;</span>
                        <span className="text-sm text-gray-400">{player.metric}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-neon-green font-bold">{player.value}</span>
                        <span className="text-gray-400">vs</span>
                        <span className={`font-bold ${player.status === 'above' ? 'text-neon-green' : 'text-red-400'}`}>
                          {player.compare}
                        </span>
                        <Icon 
                          name={player.status === 'above' ? "TrendingUp" : "TrendingDown"} 
                          size={16} 
                          className={player.status === 'above' ? 'text-neon-green' : 'text-red-400'} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gaming-gray border-gray-600">
                <CardHeader>
                  <CardTitle className="text-neon-green flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} />
                    Рекомендации
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-neon-green/10 border border-neon-green/30 rounded-lg">
                    <div className="font-semibold text-neon-green mb-1">Улучши точность</div>
                    <div className="text-sm text-gray-300">Твоя точность 78%. Потренируйся в режиме тренировки для достижения 85%</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <div className="font-semibold text-purple-400 mb-1">Играй в пик-часы</div>
                    <div className="text-sm text-gray-300">Больше всего побед с 18:00 до 22:00. Планируй игры на это время</div>
                  </div>
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="font-semibold text-yellow-400 mb-1">Фокус на Solo</div>
                    <div className="text-sm text-gray-300">В Solo режиме у тебя лучший K/D. Сосредоточься на нём для роста рейтинга</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray border-gray-600">
                <CardHeader>
                  <CardTitle className="text-neon-green flex items-center gap-2">
                    <Icon name="Trophy" size={20} />
                    Достижения в работе
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Серийный убийца</div>
                      <div className="text-sm text-gray-400">15 убийств подряд</div>
                    </div>
                    <div className="text-neon-green">12/15</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Мастер</div>
                      <div className="text-sm text-gray-400">50 уровень</div>
                    </div>
                    <div className="text-purple-400">47/50</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Легенда</div>
                      <div className="text-sm text-gray-400">1000 побед</div>
                    </div>
                    <div className="text-yellow-400">126/1000</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;