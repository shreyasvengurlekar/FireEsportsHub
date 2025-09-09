import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Users, 
  Shield, 
  CheckCircle, 
  Target,
  Award,
  Heart,
  ArrowRight
} from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gaming font-black text-4xl md:text-6xl text-foreground mb-6">
            About <span className="text-primary">FireStorm Esports</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're building the ultimate gaming community for young Free Fire champions, 
            creating a safe space where skills are developed, friendships are forged, 
            and dreams become reality.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <Target className="text-primary text-4xl mb-6" />
                  <h2 className="font-gaming font-bold text-3xl text-primary mb-6">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    At FireStorm Esports, we believe that every young gamer deserves a platform to showcase their talent. 
                    Our mission is to create the most supportive, competitive, and fun environment for Free Fire players 
                    aged 10-18 to grow, compete, and achieve their esports dreams.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We're not just organizing tournaments - we're building a movement that empowers young gamers to 
                    develop their skills, build confidence, and create lasting connections with fellow players from 
                    around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Young esports players competing" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <Shield className="text-primary text-4xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-xl mb-4">Safety First</h3>
                <p className="text-muted-foreground">
                  We prioritize the safety and well-being of all our young players with strict moderation, 
                  parental consent requirements, and a zero-tolerance policy for toxic behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <Users className="text-accent text-4xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-xl mb-4">Community Focus</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community. Our tournaments are designed to bring players together, 
                  foster friendships, and create a supportive network of young gamers.
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <Award className="text-primary text-4xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-xl mb-4">Fair Competition</h3>
                <p className="text-muted-foreground">
                  We ensure fair play through transparent rules, professional oversight, and equal opportunities 
                  for all players to showcase their skills and compete at their best.
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <Heart className="text-accent text-4xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-xl mb-4">Youth Development</h3>
                <p className="text-muted-foreground">
                  We're committed to helping young players develop not just gaming skills, but also teamwork, 
                  communication, and leadership abilities that will serve them in all areas of life.
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <Target className="text-primary text-4xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-xl mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do - from tournament organization to player support, 
                  ensuring the highest quality experience for our community.
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <CheckCircle className="text-accent text-4xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-xl mb-4">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of integrity and transparency in all our operations, 
                  building trust with players, parents, and the wider gaming community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Why Choose <span className="text-primary">FireStorm?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what makes us the premier choice for young Free Fire players
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h3 className="font-gaming font-bold text-2xl text-accent mb-6">What Sets Us Apart</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Age-Appropriate Environment</h4>
                        <p className="text-muted-foreground text-sm">
                          Exclusively for players aged 10-18, ensuring age-appropriate content and interactions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Professional Tournament Organization</h4>
                        <p className="text-muted-foreground text-sm">
                          Expertly managed tournaments with clear rules, fair play enforcement, and reliable streaming
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Substantial Prize Pools</h4>
                        <p className="text-muted-foreground text-sm">
                          Competitive prize pools that reward skill and dedication, with prizes designed for young players
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">24/7 Community Support</h4>
                        <p className="text-muted-foreground text-sm">
                          Dedicated support team available around the clock to help with any questions or issues
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Educational Resources</h4>
                        <p className="text-muted-foreground text-sm">
                          Comprehensive guides, tutorials, and strategy content to help players improve their skills
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Parent-Friendly Policies</h4>
                        <p className="text-muted-foreground text-sm">
                          Transparent policies and regular communication to keep parents informed and involved
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h3 className="font-gaming font-bold text-2xl text-primary mb-4">Our Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Active Players</span>
                      <span className="font-gaming font-bold text-primary text-xl">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tournaments Organized</span>
                      <span className="font-gaming font-bold text-accent text-xl">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total Prize Money Distributed</span>
                      <span className="font-gaming font-bold text-primary text-xl">$50K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Countries Represented</span>
                      <span className="font-gaming font-bold text-accent text-xl">15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Community Satisfaction</span>
                      <span className="font-gaming font-bold text-primary text-xl">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h3 className="font-gaming font-bold text-2xl text-accent mb-4">Join Our Mission</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to be part of something bigger? Join thousands of young gamers who are already 
                    part of the FireStorm community and start your journey to becoming a Free Fire champion.
                  </p>
                  <Link href="/tournaments">
                    <Button className="w-full glow-button text-primary-foreground py-3 font-bold" data-testid="button-join-community">
                      Join Our Community
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate gamers and professionals behind FireStorm Esports
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-foreground text-2xl" />
                </div>
                <h3 className="font-gaming font-bold text-xl mb-2">Tournament Directors</h3>
                <p className="text-muted-foreground">
                  Experienced esports professionals who ensure every tournament runs smoothly and fairly
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent-foreground text-2xl" />
                </div>
                <h3 className="font-gaming font-bold text-xl mb-2">Community Moderators</h3>
                <p className="text-muted-foreground">
                  Dedicated team members who maintain a safe and positive environment for all players
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary-foreground text-2xl" />
                </div>
                <h3 className="font-gaming font-bold text-xl mb-2">Support Team</h3>
                <p className="text-muted-foreground">
                  Available 24/7 to help players, parents, and anyone with questions or concerns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
