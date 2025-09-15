import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const PlayerProfile = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const playerData = {
    name: "cuties",
    id: "643889",
    clan: "cuties culture",
    rank: 1,
    score: "30'4",
    avatar: "🧊",
    level: 47,
    experience: 8924,
    maxExperience: 10000,
    joinDate: "15.03.2023",
    lastSeen: "5 минут назад",
    status: "online"
  };

  const gameStats = {
    wins: 126,
    games: 146,
    kills: 331,
    deaths: 245,
    bedsDestroyed: 76,
    winRate: 86,
    kdr: 1.35,
    avgKills: 2.3,
    playTime: "45ч 32м"
  };

  const recentGames = [
    { 
      mode: "Solo", 
      result: "WIN", 
      kills: 4, 
      deaths: 1, 
      time: "12:45", 
      score: "+15",
      map: "Desert"
    },
    { 
      mode: "Duos", 
      result: "WIN", 
      kills: 6, 
      deaths: 0, 
      time: "08:32", 
      score: "+18",
      map: "Forest"
    },
    { 
      mode: "Squad", 
      result: "LOSS", 
      kills: 2, 
      deaths: 3, 
      time: "15:21", 
      score: "-8",
      map: "City"
    },
    { 
      mode: "Solo", 
      result: "WIN", 
      kills: 7, 
      deaths: 1, 
      time: "09:15", 
      score: "+22",
      map: "Snow"
    },
    { 
      mode: "Duos", 
      result: "LOSS", 
      kills: 1, 
      deaths: 2, 
      time: "06:43", 
      score: "-5",
      map: "Desert"
    }
  ];

  const achievements = [
    { name: "First Blood", description: "Первое убийство в игре", icon: "🩸", unlocked: true },
    { name: "Bed Destroyer", description: "Сломал 50 кроватей", icon: "🛏️", unlocked: true },
    { name: "Survivor", description: "Выжил 100 игр", icon: "🛡️", unlocked: true },
    { name: "Killer", description: "500 убийств", icon: "⚔️", unlocked: false },
    { name: "Master", description: "Достиг 50 уровня", icon: "👑", unlocked: false },
    { name: "Legend", description: "1000 побед", icon: "🏆", unlocked: false }
  ];

  const chartData = [
    { day: "Пн", kills: 12, wins: 3 },
    { day: "Вт", kills: 15, wins: 4 },
    { day: "Ср", kills: 8, wins: 2 },
    { day: "Чт", kills: 22, wins: 6 },
    { day: "Пт", kills: 18, wins: 5 },
    { day: "Сб", kills: 25, wins: 7 },
    { day: "Вс", kills: 20, wins: 4 }
  ];

  const maxKills = Math.max(...chartData.map(d => d.kills));
  const maxWins = Math.max(...chartData.map(d => d.wins));

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
          <h1 className="text-xl font-bold font-rubik">Профиль игрока</h1>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="Share2" size={20} />
          <Icon name="Bookmark" size={20} />
          <Icon name="MoreVertical" size={20} />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Player Header */}
        <Card className="bg-gaming-gray border-gray-600 mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-neon-green/20 to-purple-600/20 p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="text-6xl mb-2">{playerData.avatar}</div>
                <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-gaming-dark ${
                  playerData.status === 'online' ? 'bg-neon-green' : 'bg-gray-500'
                }`}></div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-red-400">&lt;{playerData.name}&gt;</h1>
                  <span className="text-purple-400 font-mono">{playerData.id}</span>
                  <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30">
                    #{playerData.rank}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    <span>{playerData.clan}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>Играет с {playerData.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>Был в сети: {playerData.lastSeen}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-neon-green">{playerData.score}</div>
                    <div className="text-sm text-gray-400">Рейтинг</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{playerData.level}</div>
                    <div className="text-sm text-gray-400">Уровень</div>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Опыт</span>
                      <span className="text-neon-green">{playerData.experience.toLocaleString()} / {playerData.maxExperience.toLocaleString()}</span>
                    </div>
                    <Progress value={(playerData.experience / playerData.maxExperience) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-gaming-gray">
            {["overview", "games", "achievements", "charts", "compare"].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab}
                className="data-[state=active]:bg-neon-green data-[state=active]:text-gaming-dark font-semibold capitalize"
              >
                {tab === "overview" ? "Обзор" : 
                 tab === "games" ? "Игры" :
                 tab === "achievements" ? "Награды" :
                 tab === "charts" ? "Графики" : "Сравнить"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors group">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-neon-green mb-1 group-hover:animate-pulse-glow">
                    {gameStats.wins}
                  </div>
                  <div className="text-xs text-gray-400">ПОБЕД</div>
                  <div className="text-xs text-neon-green mt-1">{gameStats.winRate}%</div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors group">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-neon-green mb-1 group-hover:animate-pulse-glow">
                    {gameStats.games}
                  </div>
                  <div className="text-xs text-gray-400">ИГР</div>
                  <div className="text-xs text-purple-400 mt-1">{gameStats.playTime}</div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors group">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-neon-green mb-1 group-hover:animate-pulse-glow">
                    {gameStats.kills}
                  </div>
                  <div className="text-xs text-gray-400">УБИЙСТВ</div>
                  <div className="text-xs text-yellow-400 mt-1">K/D {gameStats.kdr}</div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors group">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-neon-green mb-1 group-hover:animate-pulse-glow">
                    {gameStats.bedsDestroyed}
                  </div>
                  <div className="text-xs text-gray-400">КРОВАТЕЙ</div>
                  <div className="text-xs text-red-400 mt-1">СЛОМАНО</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gaming-gray border-gray-600">
              <CardHeader>
                <CardTitle className="text-neon-green flex items-center gap-2">
                  <Icon name="Activity" size={20} />
                  Недавняя активность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentGames.slice(0, 3).map((game, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={game.result === 'WIN' ? 'default' : 'destructive'}
                        className={game.result === 'WIN' ? 'bg-neon-green text-gaming-dark' : ''}
                      >
                        {game.result}
                      </Badge>
                      <span className="text-sm">{game.mode}</span>
                      <span className="text-xs text-gray-400">{game.map}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span>{game.kills}K / {game.deaths}D</span>
                      <span className="text-gray-400">{game.time}</span>
                      <span className={`font-semibold ${game.score.startsWith('+') ? 'text-neon-green' : 'text-red-400'}`}>
                        {game.score}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Games Tab */}
          <TabsContent value="games" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">История игр</h3>
              <div className="flex gap-2">
                {["day", "week", "month"].map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    className={selectedPeriod === period ? "bg-neon-green text-gaming-dark" : "border-gray-600 text-gray-300"}
                  >
                    {period === "day" ? "День" : period === "week" ? "Неделя" : "Месяц"}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {recentGames.map((game, index) => (
                <Card key={index} className="bg-gaming-gray border-gray-600 hover:border-neon-green transition-colors">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant={game.result === 'WIN' ? 'default' : 'destructive'}
                        className={`${game.result === 'WIN' ? 'bg-neon-green text-gaming-dark' : ''} min-w-[60px] justify-center`}
                      >
                        {game.result}
                      </Badge>
                      <div>
                        <div className="font-semibold">{game.mode}</div>
                        <div className="text-sm text-gray-400">{game.map}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-neon-green font-semibold">{game.kills}</div>
                        <div className="text-gray-400">Kills</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-semibold">{game.deaths}</div>
                        <div className="text-gray-400">Deaths</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{game.time}</div>
                        <div className="text-gray-400">Time</div>
                      </div>
                      <div className={`text-center font-bold ${game.score.startsWith('+') ? 'text-neon-green' : 'text-red-400'}`}>
                        {game.score}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`border-gray-600 transition-colors ${
                    achievement.unlocked 
                      ? 'bg-gaming-gray hover:border-neon-green' 
                      : 'bg-gaming-gray/50 border-gray-700'
                  }`}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className={`text-3xl ${!achievement.unlocked ? 'grayscale opacity-50' : ''}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${achievement.unlocked ? 'text-neon-green' : 'text-gray-500'}`}>
                        {achievement.name}
                      </div>
                      <div className="text-sm text-gray-400">{achievement.description}</div>
                    </div>
                    {achievement.unlocked && (
                      <Icon name="Check" size={20} className="text-neon-green" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Charts Tab */}
          <TabsContent value="charts" className="space-y-6">
            <Card className="bg-gaming-gray border-gray-600">
              <CardHeader>
                <CardTitle className="text-neon-green">Статистика за неделю</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Kills Chart */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-300">Убийства по дням</h4>
                    <div className="flex items-end justify-between h-32 gap-2">
                      {chartData.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-neon-green rounded-t transition-all duration-500 hover:bg-neon-green/80"
                            style={{ height: `${(day.kills / maxKills) * 100}%`, minHeight: '4px' }}
                          ></div>
                          <div className="mt-2 text-xs text-gray-400">{day.day}</div>
                          <div className="text-xs font-semibold text-neon-green">{day.kills}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Wins Chart */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-300">Победы по дням</h4>
                    <div className="flex items-end justify-between h-32 gap-2">
                      {chartData.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-purple-500 rounded-t transition-all duration-500 hover:bg-purple-400"
                            style={{ height: `${(day.wins / maxWins) * 100}%`, minHeight: '4px' }}
                          ></div>
                          <div className="mt-2 text-xs text-gray-400">{day.day}</div>
                          <div className="text-xs font-semibold text-purple-400">{day.wins}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compare Tab */}
          <TabsContent value="compare" className="space-y-4">
            <Card className="bg-gaming-gray border-gray-600">
              <CardHeader>
                <CardTitle className="text-neon-green flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Сравнить с другими игроками
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 mb-4">Функция сравнения игроков</p>
                <p className="text-sm text-gray-500">Будет доступна в следующем обновлении</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlayerProfile;