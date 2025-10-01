import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TournamentCard from "@/components/tournament-card";
import RegistrationForm from "@/components/registration-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  CheckCircle, 
  Calendar, 
  Trophy,
  Gamepad,
  Users,
  Shield,
  Clock
} from "lucide-react";
import type { Tournament } from "@shared/schema";

export default function Tournaments() {
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const registrationDialogRef = useRef<HTMLButtonElement | null>(null);

  const { data: tournaments = [], isLoading } = useQuery<Tournament[]>({
    queryKey: ["/api/tournaments"],
  });

  const handleRegister = (tournamentId: string) => {
    setSelectedTournament(tournamentId);
    setShowRegistration(true);
    setTimeout(() => {
      registrationDialogRef.current?.focus();
    }, 100);
  };

  const upcomingTournaments = tournaments.filter(t => t.status === "upcoming" || t.status === "live");
  const completedTournaments = tournaments.filter(t => t.status === "completed");

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gaming font-black text-4xl md:text-6xl text-foreground mb-6">
            Tournament <span className="text-primary">Registration</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to prove you're the ultimate Free Fire champion? Join our exciting tournaments and compete for amazing prizes!
          </p>
        </div>
      </section>

      {/* Registration Info Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* How to Register */}
            <div className="lg:col-span-2">
              <Card className="gaming-card border-0 hover-elevate mb-8">
                <CardContent className="p-8">
                  <h2 className="font-gaming font-bold text-2xl text-primary mb-6">How to Register</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Fill Registration Form</h3>
                        <p className="text-muted-foreground">Complete the registration form with your gaming details and contact information.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Age Verification</h3>
                        <p className="text-muted-foreground">Provide age verification (10-18 years old) with parental consent if under 16.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Join Discord Server</h3>
                        <p className="text-muted-foreground">Connect with our community and receive tournament updates and match schedules.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Confirmation</h3>
                        <p className="text-muted-foreground">Receive confirmation email with tournament details and team assignments.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility Criteria */}
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h2 className="font-gaming font-bold text-2xl text-accent mb-6">Eligibility Criteria</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-primary w-5 h-5" />
                        <span>Age: 10-18 years old</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-primary w-5 h-5" />
                        <span>Free Fire account level 15+</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-primary w-5 h-5" />
                        <span>Discord account required</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-primary w-5 h-5" />
                        <span>Stable internet connection</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-primary w-5 h-5" />
                        <span>Respectful gaming behavior</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-primary w-5 h-5" />
                        <span>Parental consent (under 16)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Registration */}
            <div className="space-y-6">
              <Dialog open={showRegistration} onOpenChange={(open) => {
                setShowRegistration(open);
                if (!open) setSelectedTournament(null);
              }}>
                <DialogTrigger asChild>
                  <Button
                    ref={registrationDialogRef}
                    className="w-full glow-button text-primary-foreground py-3 font-bold"
                    data-testid="button-quick-register"
                  >
                    Quick Registration
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-gaming text-2xl text-primary">Tournament Registration</DialogTitle>
                  </DialogHeader>
                  {showRegistration && (
                    <RegistrationForm
                      selectedTournamentId={selectedTournament || undefined}
                      onSuccess={() => {
                        setShowRegistration(false);
                        setSelectedTournament(null);
                      }}
                      autoFocus
                    />
                  )}
                </DialogContent>
              </Dialog>

              {/* Next Tournament Info */}
              {upcomingTournaments.length > 0 && (
                <Card className="neon-border hover-elevate">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-gaming font-bold text-lg mb-2">Next Tournament</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{upcomingTournaments[0].name}</div>
                    <div className="text-muted-foreground mb-4 flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(upcomingTournaments[0].startDate).toLocaleDateString()}
                    </div>
                    <div className="text-3xl font-gaming font-black text-accent">
                      ${upcomingTournaments[0].prizePool.toLocaleString()} Prize Pool
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tournament Features */}
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-gaming font-bold text-lg mb-4">Tournament Features</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Trophy className="text-primary w-4 h-4" />
                      <span>Competitive prize pools</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="text-primary w-4 h-4" />
                      <span>Fair play enforcement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="text-primary w-4 h-4" />
                      <span>Professional organization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-primary w-4 h-4" />
                      <span>Live streaming coverage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Available Tournaments */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Available <span className="text-primary">Tournaments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our exciting lineup of Free Fire tournaments
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="gaming-card p-6 rounded-lg animate-pulse">
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-10 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          ) : upcomingTournaments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTournaments.map((tournament) => (
                <TournamentCard
                  key={tournament.id}
                  tournament={tournament}
                  onRegister={handleRegister}
                />
              ))}
            </div>
          ) : (
            <Card className="gaming-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <Gamepad className="text-muted-foreground text-6xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-2xl mb-4">No Active Tournaments</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  No tournaments are currently open for registration. Check back soon for our next exciting tournament!
                </p>
                <Button variant="secondary" data-testid="button-notify-tournaments">
                  Notify Me of New Tournaments
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Past Tournaments */}
      {completedTournaments.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
                Past <span className="text-primary">Tournaments</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Check out our previous tournaments and their results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedTournaments.map((tournament) => (
                <Card key={tournament.id} className="gaming-card border-0 hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-sm text-muted-foreground">
                        {new Date(tournament.startDate).toLocaleDateString()}
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                    <h3 className="font-gaming font-bold text-lg mb-2">{tournament.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{tournament.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Prize Pool:</span>
                        <span className="font-semibold text-primary">${tournament.prizePool.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span className="font-semibold">{tournament.currentPlayers}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
