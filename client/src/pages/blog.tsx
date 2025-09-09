import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Search,
  Eye,
  Clock,
  User,
  ArrowRight,
  Gamepad2,
  Target,
  Users,
  Trophy,
  Play,
  BookOpen
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  const categories = ["all", "STRATEGY", "NEWS", "TIPS", "GUIDE"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.views > 2000) || blogPosts[0];
  const popularPosts = blogPosts.filter(post => post.views > 1500).slice(0, 4);
  const recentPosts = blogPosts.slice(1, 4);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "STRATEGY": return "bg-primary text-primary-foreground";
      case "NEWS": return "bg-accent text-accent-foreground";
      case "TIPS": return "bg-secondary text-secondary-foreground";
      case "GUIDE": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gaming font-black text-4xl md:text-6xl text-foreground mb-6">
            Gaming <span className="text-primary">Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest Free Fire strategies, tips, tournament news, and pro gaming insights
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="gaming-input pl-10"
                  data-testid="input-search-articles"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                    data-testid={`button-category-${category}`}
                  >
                    {category === "all" ? "All" : category.toLowerCase()}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-gaming font-black text-3xl md:text-4xl text-foreground mb-4">
                Featured <span className="text-primary">Article</span>
              </h2>
            </div>

            <Card className="gaming-card border-0 hover-elevate overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.imageUrl || "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span data-testid="featured-post-views">{formatViews(featuredPost.views)} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span data-testid="featured-post-read-time">{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-gaming font-bold text-2xl md:text-3xl mb-4" data-testid="featured-post-title">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6" data-testid="featured-post-excerpt">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <User className="text-primary-foreground text-sm" />
                      </div>
                      <span className="text-sm font-semibold" data-testid="featured-post-author">
                        By {featuredPost.author}
                      </span>
                    </div>
                    <Button className="glow-button text-primary-foreground" data-testid="button-read-featured">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the latest strategies, tips, and news from the Free Fire community
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="gaming-card border-0 animate-pulse">
                  <div className="h-48 bg-muted rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-16 bg-muted rounded mb-4"></div>
                    <div className="h-10 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="gaming-card border-0 hover-elevate overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-muted flex items-center justify-center">
                      {post.category === "STRATEGY" && <Target className="text-4xl text-primary" />}
                      {post.category === "NEWS" && <BookOpen className="text-4xl text-accent" />}
                      {post.category === "TIPS" && <Gamepad2 className="text-4xl text-primary" />}
                      {post.category === "GUIDE" && <Users className="text-4xl text-accent" />}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        <span data-testid={`post-${post.id}-views`}>{formatViews(post.views)}</span>
                      </div>
                    </div>
                    <h3 className="font-gaming font-bold text-lg mb-3" data-testid={`post-${post.id}-title`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`post-${post.id}-excerpt`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span data-testid={`post-${post.id}-read-time`}>{post.readTime}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-accent font-semibold p-0"
                        data-testid={`button-read-${post.id}`}
                      >
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="gaming-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <Search className="text-muted-foreground text-6xl mb-6 mx-auto" />
                <h3 className="font-gaming font-bold text-2xl mb-4">No Articles Found</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  No articles match your search criteria. Try adjusting your search or browse all categories.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  data-testid="button-clear-search"
                >
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Popular Articles Sidebar */}
      {popularPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-gaming font-black text-4xl md:text-5xl text-foreground mb-4">
                Popular <span className="text-primary">This Week</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most viewed articles by the Free Fire community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPosts.map((post, index) => (
                <Card key={post.id} className="gaming-card border-0 hover-elevate">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      {post.readTime.includes("Video") ? (
                        <Play className="text-4xl text-primary" />
                      ) : (
                        <BookOpen className="text-4xl text-primary" />
                      )}
                    </div>
                    <h4 className="font-gaming font-bold mb-3" data-testid={`popular-post-${post.id}-title`}>
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`popular-post-${post.id}-excerpt`}>
                      {post.excerpt.substring(0, 80)}...
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-accent font-semibold" data-testid={`popular-post-${post.id}-views`}>
                        {formatViews(post.views)} views
                      </span>
                      <span className="text-muted-foreground" data-testid={`popular-post-${post.id}-read-time`}>
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="gaming-card border-0 max-w-3xl mx-auto hover-elevate">
            <CardContent className="p-12">
              <Trophy className="text-primary text-6xl mb-6 mx-auto" />
              <h2 className="font-gaming font-black text-3xl text-foreground mb-4">
                Stay Ahead of the Game
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get the latest Free Fire strategies, tournament updates, and pro tips delivered straight to your inbox. 
                Join thousands of players who never miss a beat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="gaming-input flex-1"
                  data-testid="input-newsletter-blog"
                />
                <Button className="glow-button text-primary-foreground px-6 font-bold" data-testid="button-subscribe-blog">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
