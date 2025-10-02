import { 
  users,
  type User, 
  type InsertUser, 
  tournaments,
  type Tournament, 
  type InsertTournament,
  registrations,
  type Registration,
  type InsertRegistration,
  blogPosts,
  type BlogPost,
  type InsertBlogPost,
  contacts,
  type Contact,
  type InsertContact,
  newsletters,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";
import { randomUUID } from "crypto";
import { eq, desc, asc, sql } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Tournaments
  getTournaments(): Promise<Tournament[]>;
  getTournament(id: string): Promise<Tournament | undefined>;
  createTournament(tournament: InsertTournament): Promise<Tournament>;
  updateTournament(id: string, updates: Partial<Tournament>): Promise<Tournament | undefined>;

  // Registrations
  getRegistrations(tournamentId?: string): Promise<Registration[]>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  incrementPostViews(id: string): Promise<void>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

class MemStorage implements IStorage {
  private users: Map<string, User>;
  private tournaments: Map<string, Tournament>;
  private registrations: Map<string, Registration>;
  private blogPosts: Map<string, BlogPost>;
  private contacts: Map<string, Contact>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.users = new Map();
    this.tournaments = new Map();
    this.registrations = new Map();
    this.blogPosts = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample tournaments
    const tournaments: Tournament[] = [
      {
        id: "tournament-1",
        name: "Weekly Clash #12",
        description: "Fast-paced 1-hour tournament with instant rewards",
        prizePool: 2500,
        maxPlayers: 64,
        currentPlayers: 32,
        format: "Battle Royale",
        status: "live" as const,
        startDate: new Date("2024-11-25T18:00:00Z"),
        endDate: new Date("2024-11-25T19:00:00Z"),
        eligibilityMinLevel: 15,
        eligibilityMaxLevel: null,
        createdAt: new Date(),
      },
      {
        id: "tournament-2",
        name: "Rookie Championship",
        description: "Special tournament for new players (Level 15-30)",
        prizePool: 1000,
        maxPlayers: 32,
        currentPlayers: 12,
        format: "Squad Battle",
        status: "upcoming" as const,
        startDate: new Date("2024-12-01T18:00:00Z"),
        endDate: new Date("2024-12-01T20:00:00Z"),
        eligibilityMinLevel: 15,
        eligibilityMaxLevel: 30,
        createdAt: new Date(),
      },
      {
        id: "tournament-3",
        name: "FireStorm Championship 2024",
        description: "The biggest Free Fire tournament of the year! 128 players, 4 weeks of intense battles.",
        prizePool: 10000,
        maxPlayers: 128,
        currentPlayers: 45,
        format: "Mixed Mode",
        status: "upcoming" as const,
        startDate: new Date("2024-12-01T18:00:00Z"),
        endDate: new Date("2024-12-22T20:00:00Z"),
        eligibilityMinLevel: 15,
        eligibilityMaxLevel: null,
        createdAt: new Date(),
      },
      {
        id: "tournament-4",
        name: "Holiday Showdown",
        description: "Special holiday event with exclusive rewards",
        prizePool: 5000,
        maxPlayers: 128,
        currentPlayers: 0,
        format: "Mixed Mode",
        status: "upcoming" as const,
        startDate: new Date("2024-12-15T18:00:00Z"),
        endDate: new Date("2024-12-15T22:00:00Z"),
        eligibilityMinLevel: 15,
        eligibilityMaxLevel: null,
        createdAt: new Date(),
      },
    ];

    tournaments.forEach(t => this.tournaments.set(t.id, t));

    // Sample blog posts
    const blogPosts: BlogPost[] = [
      {
        id: "post-1",
        title: "Top 10 Pro Strategies to Dominate Free Fire Tournaments",
        content: "Learn the advanced tactics that pro players use to consistently win tournaments...",
        excerpt: "Learn the advanced tactics that pro players use to consistently win tournaments. From positioning strategies to weapon combinations.",
        category: "STRATEGY",
        author: "GameMaster_Pro",
        imageUrl: "https://images.unsplash.com/photo-1560253023-3ec5d502959f" as string | null,
        views: 2548,
        readTime: "8 min read",
        createdAt: new Date("2024-11-20"),
        updatedAt: new Date("2024-11-20"),
      },
      {
        id: "post-2",
        title: "New Tournament Format Coming December",
        content: "We're introducing an exciting new tournament format that will change how you compete...",
        excerpt: "We're introducing an exciting new tournament format that will change how you compete in Free Fire.",
        category: "NEWS",
        author: "FireStorm Team",
        imageUrl: null as string | null,
        views: 1234,
        readTime: "3 min read",
        createdAt: new Date("2024-11-18"),
        updatedAt: new Date("2024-11-18"),
      },
      {
        id: "post-3",
        title: "Best Character Combinations for Squad Play",
        content: "Discover the most effective character synergies for dominating squad matches...",
        excerpt: "Discover the most effective character synergies for dominating squad matches in Free Fire tournaments.",
        category: "TIPS",
        author: "Squad_Master",
        imageUrl: null as string | null,
        views: 1876,
        readTime: "5 min read",
        createdAt: new Date("2024-11-15"),
        updatedAt: new Date("2024-11-15"),
      },
      {
        id: "post-4",
        title: "5-Minute Guide: Landing Zone Tactics",
        content: "Quick tips for choosing the perfect landing spot to maximize your survival chances...",
        excerpt: "Quick tips for choosing the perfect landing spot to maximize your survival chances.",
        category: "GUIDE",
        author: "TacticalGamer",
        imageUrl: null as string | null,
        views: 2501,
        readTime: "5 min read",
        createdAt: new Date("2024-11-14"),
        updatedAt: new Date("2024-11-14"),
      },
    ];

    blogPosts.forEach(p => this.blogPosts.set(p.id, p));
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Tournaments
  async getTournaments(): Promise<Tournament[]> {
    return Array.from(this.tournaments.values()).sort((a, b) => 
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  }

  async getTournament(id: string): Promise<Tournament | undefined> {
    return this.tournaments.get(id);
  }

  async createTournament(insertTournament: InsertTournament): Promise<Tournament> {
    const id = randomUUID();
    const tournament: Tournament = {
      id,
      name: insertTournament.name,
      description: insertTournament.description,
      prizePool: insertTournament.prizePool,
      maxPlayers: insertTournament.maxPlayers,
      currentPlayers: insertTournament.currentPlayers ?? 0,
      format: insertTournament.format,
      status: insertTournament.status ?? 'upcoming',
      startDate: insertTournament.startDate,
      endDate: insertTournament.endDate ?? null,
      eligibilityMinLevel: insertTournament.eligibilityMinLevel ?? 15,
      eligibilityMaxLevel: insertTournament.eligibilityMaxLevel ?? null,
      createdAt: new Date(),
    };
    this.tournaments.set(id, tournament);
    return tournament;
  }

  async updateTournament(id: string, updates: Partial<Tournament>): Promise<Tournament | undefined> {
    const tournament = this.tournaments.get(id);
    if (!tournament) return undefined;
    
    const updatedTournament = { ...tournament, ...updates };
    this.tournaments.set(id, updatedTournament);
    return updatedTournament;
  }

  // Registrations
  async getRegistrations(tournamentId?: string): Promise<Registration[]> {
    const registrations = Array.from(this.registrations.values());
    if (tournamentId) {
      return registrations.filter(r => r.tournamentId === tournamentId);
    }
    return registrations;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = { 
      ...insertRegistration, 
      id,
      hasParentalConsent: insertRegistration.hasParentalConsent || false,
      createdAt: new Date()
    };
    this.registrations.set(id, registration);
    
    // Update tournament current players count
    const tournament = this.tournaments.get(insertRegistration.tournamentId);
    if (tournament) {
      const updatedTournament = { 
        ...tournament, 
        currentPlayers: tournament.currentPlayers + 1 
      };
      this.tournaments.set(tournament.id, updatedTournament);
    }
    
    return registration;
  }

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id,
      views: 0,
      imageUrl: insertBlogPost.imageUrl || null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async incrementPostViews(id: string): Promise<void> {
    const post = this.blogPosts.get(id);
    if (post) {
      const updatedPost = { ...post, views: post.views + 1 };
      this.blogPosts.set(id, updatedPost);
    }
  }

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Newsletter
  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      isActive: true,
      createdAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

class DrizzleStorage implements IStorage {
  // Users
  async getUser(id: string): Promise<User | undefined> {
    return db.query.users.findFirst({ where: eq(users.id, id) });
  }
  async getUserByUsername(username: string): Promise<User | undefined> {
    return db.query.users.findFirst({ where: eq(users.username, username) });
  }
  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  // Tournaments
  async getTournaments(): Promise<Tournament[]> {
    return db.query.tournaments.findMany({
      orderBy: [asc(tournaments.startDate)],
    });
  }
  async getTournament(id: string): Promise<Tournament | undefined> {
    return db.query.tournaments.findFirst({ where: eq(tournaments.id, id) });
  }
  async createTournament(tournament: InsertTournament): Promise<Tournament> {
    const [newTournament] = await db.insert(tournaments).values(tournament).returning();
    return newTournament;
  }
  async updateTournament(id: string, updates: Partial<Tournament>): Promise<Tournament | undefined> {
    const [updatedTournament] = await db.update(tournaments).set(updates).where(eq(tournaments.id, id)).returning();
    return updatedTournament;
  }

  // Registrations
  async getRegistrations(tournamentId?: string): Promise<Registration[]> {
    if (tournamentId) {
      return db.query.registrations.findMany({ where: eq(registrations.tournamentId, tournamentId) });
    }
    return db.query.registrations.findMany();
  }
  async createRegistration(registration: InsertRegistration): Promise<Registration> {
    return db.transaction(async (tx) => {
      const [newRegistration] = await tx
        .insert(registrations)
        .values(registration)
        .returning();

      await tx
        .update(tournaments)
        .set({
          currentPlayers: sql`${tournaments.currentPlayers} + 1`,
        })
        .where(eq(tournaments.id, registration.tournamentId));

      return newRegistration;
    });
  }
  
  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return db.query.blogPosts.findMany({
      orderBy: [desc(blogPosts.createdAt)],
    });
  }
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return db.query.blogPosts.findFirst({ where: eq(blogPosts.id, id) });
  }
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }
  async incrementPostViews(id: string): Promise<void> {
    await db.update(blogPosts)
      .set({ views: sql`${blogPosts.views} + 1` })
      .where(eq(blogPosts.id, id));
  }

  // Contacts
  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }
  
  // Newsletter
  async createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter> {
    const [newSubscription] = await db.insert(newsletters).values(newsletter).returning();
    return newSubscription;
  }
}

import { db } from "./db.js";

function initializeStorage(): IStorage {
  // Use DrizzleStorage in production (on Vercel)
  if (process.env.NODE_ENV === 'production') {
    console.log("Using DrizzleStorage for production.");
    return new DrizzleStorage();
  }
  // Use MemStorage for local development
  console.log("Using MemStorage for development.");
  return new MemStorage();
}

export const storage: IStorage = initializeStorage();
