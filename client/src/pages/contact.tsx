import ContactForm from "@/components/contact-form";
import NewsletterForm from "@/components/newsletter-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle,
  Mail,
  Clock,
  Users,
  Shield,
  HelpCircle,
  ExternalLink,
  Headphones
} from "lucide-react";
import { SiDiscord, SiX, SiInstagram, SiYoutube, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const supportOptions = [
    {
      icon: SiDiscord,
      title: "Discord Community",
      description: "Join our community for instant support and connect with other players",
      action: "Join Discord",
      color: "bg-indigo-600 hover:bg-indigo-700",
      href: "#"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email within 24 hours",
      action: "support@firestormesports.com",
      color: "bg-accent hover:bg-accent/90",
      href: "mailto:support@firestormesports.com"
    },
    {
      icon: Headphones,
      title: "Live Chat",
      description: "Available during tournament hours",
      action: "Monday-Friday: 3PM-9PM EST",
      color: "bg-primary hover:bg-primary/90",
      href: "#"
    }
  ];

  const socialMedia = [
    { icon: SiX, name: "X (Twitter)", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: SiInstagram, name: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
    { icon: SiYoutube, name: "YouTube", color: "bg-red-600 hover:bg-red-700" },
    { icon: SiWhatsapp, name: "WhatsApp", color: "bg-green-600 hover:bg-green-700" }
  ];

  const faqItems = [
    {
      question: "How do I register for tournaments?",
      answer: "Simply fill out our registration form, provide age verification, and join our Discord community for updates."
    },
    {
      question: "What age group can participate?",
      answer: "Our tournaments are exclusively for young gamers aged 10-18 years old."
    },
    {
      question: "How are prizes distributed?",
      answer: "Prizes are distributed within 48 hours after tournament completion via digital payment methods."
    },
    {
      question: "Do I need parental consent?",
      answer: "Yes, players under 16 years old require parental consent to participate in tournaments."
    },
    {
      question: "What if I have technical issues during a tournament?",
      answer: "Contact our support team immediately through Discord or live chat for real-time assistance."
    },
    {
      question: "Can I participate if I'm from another country?",
      answer: "Yes! We welcome players from all countries. Check specific tournament requirements for regional restrictions."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gaming font-black text-4xl md:text-6xl text-foreground mb-6">
            Get <span className="text-primary">Connected</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Need help or have questions? We're here to support you 24/7! Connect with our amazing community and get the help you need.
          </p>
        </div>
      </section>

      {/* Contact Form and Support */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Support Options */}
            <div className="space-y-6">
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h2 className="font-gaming font-bold text-2xl mb-6" data-testid="support-options-title">Support Options</h2>
                  <div className="space-y-6">
                    {supportOptions.map((option, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`${option.color} text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors`}>
                          <option.icon className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2" data-testid={`support-option-${index}-title`}>
                            {option.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3" data-testid={`support-option-${index}-description`}>
                            {option.description}
                          </p>
                          {option.href.startsWith("mailto:") ? (
                            <a 
                              href={option.href} 
                              className="text-accent font-semibold text-sm hover:text-primary transition-colors"
                              data-testid={`support-option-${index}-action`}
                            >
                              {option.action}
                            </a>
                          ) : (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-primary hover:text-accent font-semibold p-0"
                              data-testid={`support-option-${index}-action`}
                            >
                              {option.action} →
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card className="gaming-card border-0 hover-elevate">
                <CardContent className="p-8">
                  <h3 className="font-gaming font-bold text-2xl mb-6">Community Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-gaming font-bold text-primary" data-testid="stat-active-players">500+</div>
                      <div className="text-sm text-muted-foreground">Active Players</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-gaming font-bold text-accent" data-testid="stat-support-tickets">98%</div>
                      <div className="text-sm text-muted-foreground">Support Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-gaming font-bold text-primary" data-testid="stat-response-time">&lt; 2h</div>
                      <div className="text-sm text-muted-foreground">Avg Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-gaming font-bold text-accent" data-testid="stat-countries">15</div>
                      <div className="text-sm text-muted-foreground">Countries Served</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Follow <span className="text-primary">Our Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected with the FireStorm community across all social platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialMedia.map((platform, index) => (
              <Button
                key={index}
                className={`${platform.color} text-white p-8 h-auto flex flex-col items-center justify-center space-y-3 transition-colors`}
                data-testid={`button-social-${platform.name.toLowerCase()}`}
              >
                <platform.icon className="text-3xl" />
                <span className="font-gaming font-bold text-lg">{platform.name}</span>
              </Button>
            ))}
          </div>

          <Card className="gaming-card border-0 max-w-4xl mx-auto hover-elevate">
            <CardContent className="p-8 text-center">
              <Users className="text-primary text-4xl mb-6 mx-auto" />
              <h3 className="font-gaming font-bold text-2xl mb-4">Join Our Community</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Connect with thousands of Free Fire players, share strategies, and stay updated with the latest tournaments and events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glow-button text-primary-foreground px-8 py-3 font-bold" data-testid="button-join-community-main">
                  Join Discord Server
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" className="px-8 py-3 font-bold" data-testid="button-follow-social">
                  Follow on Social Media
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about tournaments, registration, and gameplay
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <Card key={index} className="gaming-card border-0 hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-gaming font-bold text-lg mb-3" data-testid={`faq-${index}-question`}>
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`faq-${index}-answer`}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? Our support team is here to help!
            </p>
            <Button className="glow-button text-primary-foreground px-8 py-3 font-bold" data-testid="button-contact-support">
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-6">
                Stay <span className="text-primary">Updated</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get tournament announcements, gaming tips, and community updates delivered straight to your inbox. 
                Never miss an important event or opportunity to compete!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-primary w-5 h-5" />
                  <span>No spam, ever. Unsubscribe anytime.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary w-5 h-5" />
                  <span>Weekly updates with the latest news</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary w-5 h-5" />
                  <span>Exclusive access to special events</span>
                </div>
              </div>
            </div>

            <Card className="gaming-card border-0 hover-elevate">
              <CardContent className="p-8">
                <h3 className="font-gaming font-bold text-2xl mb-6">Subscribe to Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of players who stay informed about tournaments and gaming opportunities.
                </p>
                <NewsletterForm />
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to receive tournament updates and gaming tips. You can unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
