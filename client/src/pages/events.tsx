import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TournamentCard from "@/components/tournament-card";
import { Link } from "wouter";
import { 
  Calendar, 
  Trophy, 
  Users, 
  Clock,
  Star,
  Medal,
  Crown,
  Gamepad2,
  ArrowRight
} from "lucide-react";
import type { Tournament } from "@shared/schema";

export default function Events() {
  const { data: tournaments = [], isLoading } = useQuery<Tournament[]>({
    queryKey: ["/api/tournaments"],
  });

  const liveTournaments = tournaments.filter(t => t.status === "live");
  const upcomingTournaments = tournaments.filter(t => t.status === "upcoming");
  const recentCompletedTournaments = tournaments.filter(t => t.status === "completed").slice(0, 3);

  const featuredTournament = upcomingTournaments.find(t => t.prizePool >= 10000) || upcomingTournaments[0];

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date | string) => {
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gaming font-black text-4xl md:text-6xl text-foreground mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don't miss out on these amazing tournaments and community events! Join the action and compete with the best Free Fire players.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredTournament && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="neon-border hover-elevate">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                      alt="Championship tournament arena" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold uppercase tracking-wide">
                      Featured Event
                    </Badge>
                    <h2 className="font-gaming font-black text-3xl text-primary" data-testid="featured-event-title">
                      {featuredTournament.name}
                    </h2>
                    <p className="text-muted-foreground text-lg" data-testid="featured-event-description">
                      {featuredTournament.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-primary w-4 h-4" />
                        <span data-testid="featured-event-date">{formatDate(featuredTournament.startDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="text-primary w-4 h-4" />
                        <span data-testid="featured-event-prize">${featuredTournament.prizePool.toLocaleString()} Prize Pool</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="text-primary w-4 h-4" />
                        <span data-testid="featured-event-players">{featuredTournament.currentPlayers}/{featuredTournament.maxPlayers} Players</span>
                      </div>
                    </div>
                    <Link href="/tournaments">
                      <Button className="glow-button text-primary-foreground px-8 py-3 font-bold" data-testid="button-register-featured">
                        Register for {featuredTournament.name}!
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Live Events */}
      {liveTournaments.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
                Live <span className="text-primary">Events</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join these tournaments happening right now!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveTournaments.map((tournament) => (
                <Card key={tournament.id} className="tournament-card hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-sm text-accent font-semibold">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {formatTime(tournament.startDate)}
                      </div>
                      <Badge className="bg-primary text-primary-foreground text-xs font-bold animate-pulse">
                        LIVE
                      </Badge>
                    </div>
                    <h3 className="font-gaming font-bold text-lg mb-2" data-testid={`live-tournament-${tournament.id}-name`}>
                      {tournament.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`live-tournament-${tournament.id}-description`}>
                      {tournament.description}
                    </p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span>Prize Pool:</span>
                        <span className="font-semibold text-primary" data-testid={`live-tournament-${tournament.id}-prize`}>
                          ${tournament.prizePool.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Players:</span>
                        <span className="font-semibold" data-testid={`live-tournament-${tournament.id}-players`}>
                          {tournament.currentPlayers}/{tournament.maxPlayers}
                        </span>
                      </div>
                    </div>
                    <Button 
                      className="w-full font-semibold"
                      disabled={tournament.currentPlayers >= tournament.maxPlayers}
                      data-testid={`button-join-live-${tournament.id}`}
                    >
                      {tournament.currentPlayers >= tournament.maxPlayers ? "Tournament Full" : "Join Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these exciting tournaments
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="gaming-card border-0 animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-16 bg-muted rounded mb-4"></div>
                    <div className="h-10 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : upcomingTournaments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTournaments.map((tournament) => (
                <TournamentCard
                  key={tournament.id}
                  tournament={tournament}
                />
              ))}
            </div>
          ) : (
            <Card className="gaming-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <Calendar className="text-muted-foreground text-6xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-2xl mb-4">No Upcoming Events</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  No tournaments are currently scheduled. Check back soon for our next exciting events!
                </p>
                <Button variant="secondary" data-testid="button-notify-events">
                  Notify Me of New Events
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Recent Champions */}
      {recentCompletedTournaments.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
                Recent <span className="text-primary">Champions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Congratulations to our latest tournament winners!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recentCompletedTournaments.map((tournament, index) => {
                const icons = [Crown, Medal, Star];
                const IconComponent = icons[index] || Trophy;
                const colors = ["text-yellow-400", "text-gray-400", "text-orange-400"];
                const colorClass = colors[index] || "text-primary";

                return (
                  <Card key={tournament.id} className="gaming-card border-0 hover-elevate">
                    <CardContent className="p-8 text-center">
                      <IconComponent className={`${colorClass} text-4xl mb-4 mx-auto`} />
                      <h3 className="font-gaming font-bold text-xl mb-2" data-testid={`champion-tournament-${tournament.id}`}>
                        {tournament.name}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-4">
                        {formatDate(tournament.startDate)}
                      </div>
                      <div className="space-y-2">
                        <div className="font-gaming font-bold text-lg text-primary" data-testid={`champion-winner-${tournament.id}`}>
                          {index === 0 ? "ProGamer_Alex" : index === 1 ? "FireStorm_Luna" : "SkillMaster_99"}
                        </div>
                        <div className="text-accent font-semibold" data-testid={`champion-prize-${tournament.id}`}>
                          Won ${Math.floor(tournament.prizePool * (index === 0 ? 0.6 : index === 1 ? 0.3 : 0.1)).toLocaleString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Event Calendar CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="gaming-card border-0 max-w-3xl mx-auto hover-elevate">
            <CardContent className="p-12">
              <Gamepad2 className="text-primary text-6xl mb-6 mx-auto" />
              <h2 className="font-gaming font-black text-3xl text-foreground mb-4">
                Never Miss an Event
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stay updated with all our tournaments, events, and community activities. 
                Join our Discord server for real-time notifications and connect with fellow gamers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glow-button text-primary-foreground px-8 py-3 font-bold" data-testid="button-join-discord">
                  Join Discord Community
                </Button>
                <Link href="/contact">
                  <Button variant="secondary" className="px-8 py-3 font-bold" data-testid="button-get-support">
                    Get Support
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
