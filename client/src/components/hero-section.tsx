import { Button } from "@/components/ui/button";
import { Gamepad2, Play } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Gaming setup background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="font-gaming font-black text-4xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block text-foreground">BECOME THE</span>
            <span
              className="block gaming-gradient px-2 rounded glow-button"
              style={{ color: 'white', WebkitBackgroundClip: 'padding-box', backgroundClip: 'padding-box', display: 'inline-block' }}
            >
              ULTIMATE CHAMPION
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the most epic Free Fire tournaments designed for young legends aged 10-18. 
            Battle it out with the best players and claim your victory!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/tournaments" data-testid="button-register-today">
              <Button className="glow-button text-primary-foreground px-8 py-4 text-lg font-bold flex items-center space-x-2">
                <Gamepad2 className="w-5 h-5" />
                <span>Register Today!</span>
              </Button>
            </Link>
            <Link href="/highlights" data-testid="button-watch-highlights">
              <Button 
                variant="secondary" 
                className="px-8 py-4 text-lg font-bold border-2 border-secondary hover:border-accent transition-colors flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Highlights
              </Button>
            </Link>
          </div>

          {/* Tournament Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <div className="gaming-card p-6 rounded-lg text-center hover-elevate" data-testid="stat-players">
              <div className="text-3xl font-gaming font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="gaming-card p-6 rounded-lg text-center hover-elevate" data-testid="stat-prize">
              <div className="text-3xl font-gaming font-bold text-accent">$10K</div>
              <div className="text-muted-foreground">Prize Pool</div>
            </div>
            <div className="gaming-card p-6 rounded-lg text-center hover-elevate" data-testid="stat-tournaments">
              <div className="text-3xl font-gaming font-bold text-primary">24</div>
              <div className="text-muted-foreground">Tournaments</div>
            </div>
            <div className="gaming-card p-6 rounded-lg text-center hover-elevate" data-testid="stat-countries">
              <div className="text-3xl font-gaming font-bold text-accent">15</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
