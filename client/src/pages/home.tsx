import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Users, 
  Shield, 
  CheckCircle, 
  Trophy, 
  Calendar, 
  Gamepad,
  ArrowRight,
  Flame
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              About <span className="text-primary">FireStorm</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the ultimate gaming community for young Free Fire champions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h3 className="font-gaming font-bold text-2xl text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At FireStorm Esports, we're passionate about creating a safe, competitive, and exciting environment 
                    where young Free Fire players can showcase their skills, learn from the best, and build lasting friendships 
                    in the gaming community.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h3 className="font-gaming font-bold text-2xl text-accent mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary w-5 h-5" />
                      <span>Safe environment designed specifically for young players</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary w-5 h-5" />
                      <span>Professional tournament organization and fair play</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary w-5 h-5" />
                      <span>Amazing prizes and recognition for champions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary w-5 h-5" />
                      <span>24/7 support and community guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Young gamers in esports tournament" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="gaming-card border-0 text-center hover-elevate">
                  <CardContent className="p-6">
                    <Users className="text-primary text-2xl mb-2 mx-auto" />
                    <div className="font-gaming font-bold text-lg">Community First</div>
                    <div className="text-sm text-muted-foreground">Building lasting friendships</div>
                  </CardContent>
                </Card>
                <Card className="gaming-card border-0 text-center hover-elevate">
                  <CardContent className="p-6">
                    <Shield className="text-accent text-2xl mb-2 mx-auto" />
                    <div className="font-gaming font-bold text-lg">Safe Gaming</div>
                    <div className="text-sm text-muted-foreground">Protected environment</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button className="glow-button text-primary-foreground px-8 py-3 font-bold" data-testid="button-learn-more">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tournament */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Featured <span className="text-primary">Tournament</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss our biggest tournament of the year!
            </p>
          </div>

          <Card className="neon-border bg-card hover-elevate">
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
                  <h3 className="font-gaming font-black text-3xl text-primary">FireStorm Championship 2024</h3>
                  <p className="text-muted-foreground text-lg">
                    The biggest Free Fire tournament of the year! 128 players, 4 weeks of intense battles, 
                    and a massive $10,000 prize pool. Do you have what it takes to become the ultimate champion?
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-primary w-4 h-4" />
                      <span>December 1-22, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="text-primary w-4 h-4" />
                      <span>$10,000 Prize Pool</span>
                    </div>
                  </div>
                  <Link href="/tournaments">
                    <Button className="glow-button text-primary-foreground px-8 py-3 font-bold" data-testid="button-register-championship">
                      Register for Championship!
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Get <span className="text-primary">Started</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to begin your esports journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tournaments">
              <Card className="gaming-card border-0 hover-elevate cursor-pointer h-full" data-testid="card-tournaments">
                <CardContent className="p-6 text-center">
                  <Gamepad className="text-primary text-3xl mb-4 mx-auto" />
                  <h3 className="font-gaming font-bold text-lg mb-2">Tournaments</h3>
                  <p className="text-muted-foreground text-sm">
                    Join exciting Free Fire tournaments and compete for amazing prizes
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/events">
              <Card className="gaming-card border-0 hover-elevate cursor-pointer h-full" data-testid="card-events">
                <CardContent className="p-6 text-center">
                  <Calendar className="text-accent text-3xl mb-4 mx-auto" />
                  <h3 className="font-gaming font-bold text-lg mb-2">Events</h3>
                  <p className="text-muted-foreground text-sm">
                    Stay updated with upcoming events and community gatherings
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog">
              <Card className="gaming-card border-0 hover-elevate cursor-pointer h-full" data-testid="card-blog">
                <CardContent className="p-6 text-center">
                  <Flame className="text-primary text-3xl mb-4 mx-auto" />
                  <h3 className="font-gaming font-bold text-lg mb-2">Gaming Hub</h3>
                  <p className="text-muted-foreground text-sm">
                    Learn pro strategies, tips, and stay updated with Free Fire news
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="gaming-card border-0 hover-elevate cursor-pointer h-full" data-testid="card-contact">
                <CardContent className="p-6 text-center">
                  <Users className="text-accent text-3xl mb-4 mx-auto" />
                  <h3 className="font-gaming font-bold text-lg mb-2">Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Get support, connect with players, and join our Discord server
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
