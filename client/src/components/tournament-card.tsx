import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Gamepad } from "lucide-react";
import type { Tournament } from "@shared/schema";

interface TournamentCardProps {
  tournament: Tournament;
  onRegister?: (tournamentId: string) => void;
}

export default function TournamentCard({ tournament, onRegister }: TournamentCardProps) {
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: d.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-primary text-primary-foreground";
      case "upcoming": return "bg-accent text-accent-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "live": return "LIVE";
      case "upcoming": return "UPCOMING";
      case "completed": return "COMPLETED";
      default: return status.toUpperCase();
    }
  };

  const canRegister = tournament.status === "upcoming" || tournament.status === "live";
  const isFull = tournament.currentPlayers >= tournament.maxPlayers;

  return (
    <div className="tournament-card p-6 rounded-lg hover-elevate" data-testid={`tournament-card-${tournament.id}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-accent font-semibold">
          <Calendar className="w-4 h-4 inline mr-1" />
          {formatDate(tournament.startDate)}
        </div>
        <Badge className={`text-xs font-bold ${getStatusColor(tournament.status)}`}>
          {getStatusLabel(tournament.status)}
        </Badge>
      </div>
      
      <h4 className="font-gaming font-bold text-lg mb-2" data-testid="tournament-name">
        {tournament.name}
      </h4>
      <p className="text-muted-foreground text-sm mb-4" data-testid="tournament-description">
        {tournament.description}
      </p>
      
      <div className="space-y-2 text-sm mb-4">
        <div className="flex justify-between">
          <span className="flex items-center">
            <Trophy className="w-4 h-4 mr-1 text-primary" />
            Prize Pool:
          </span>
          <span className="font-semibold text-primary" data-testid="tournament-prize">
            ${tournament.prizePool.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            Players:
          </span>
          <span className="font-semibold" data-testid="tournament-players">
            {tournament.currentPlayers}/{tournament.maxPlayers}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center">
            <Gamepad className="w-4 h-4 mr-1" />
            Format:
          </span>
          <span className="font-semibold" data-testid="tournament-format">
            {tournament.format}
          </span>
        </div>
      </div>
      
      {canRegister && !isFull ? (
        <Button 
          className="w-full font-semibold"
          onClick={() => onRegister?.(tournament.id)}
          data-testid={`button-register-${tournament.id}`}
        >
          {tournament.status === "live" ? "Join Now" : "Register"}
        </Button>
      ) : isFull ? (
        <Button variant="secondary" className="w-full" disabled data-testid="button-tournament-full">
          Tournament Full
        </Button>
      ) : (
        <Button variant="secondary" className="w-full" disabled data-testid="button-registration-closed">
          Registration Closed
        </Button>
      )}
    </div>
  );
}
