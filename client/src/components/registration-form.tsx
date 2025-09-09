import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertRegistrationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { Tournament } from "@shared/schema";
import { z } from "zod";

const registrationFormSchema = insertRegistrationSchema.extend({
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

interface RegistrationFormProps {
  selectedTournamentId?: string;
  onSuccess?: () => void;
}

export default function RegistrationForm({ selectedTournamentId, onSuccess }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: tournaments = [], isLoading: tournamentsLoading } = useQuery({
    queryKey: ["/api/tournaments"],
  });

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      tournamentId: selectedTournamentId || "",
      playerName: "",
      email: "",
      age: 15,
      freeFireId: "",
      hasParentalConsent: false,
      terms: false,
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: Omit<RegistrationFormData, "terms">) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "You've been registered for the tournament. Check your email for confirmation.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/tournaments"] });
      form.reset();
      onSuccess?.();
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      const { terms, ...registrationData } = data;
      await registrationMutation.mutateAsync(registrationData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTournaments = (tournaments as Tournament[]).filter(
    t => t.status === "upcoming" || t.status === "live"
  );

  return (
    <div className="gaming-card p-8 rounded-xl">
      <h3 className="font-gaming font-bold text-xl text-primary mb-6">Tournament Registration</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="playerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Player Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your player name" 
                    className="gaming-input"
                    data-testid="input-player-name"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="Enter your email address" 
                    className="gaming-input"
                    data-testid="input-email"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    min="10"
                    max="18"
                    placeholder="Enter your age" 
                    className="gaming-input"
                    data-testid="input-age"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="freeFireId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Free Fire ID</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your Free Fire ID" 
                    className="gaming-input"
                    data-testid="input-free-fire-id"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tournamentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Tournament</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  value={field.value}
                  disabled={tournamentsLoading}
                >
                  <FormControl>
                    <SelectTrigger className="gaming-input" data-testid="select-tournament">
                      <SelectValue placeholder="Choose a tournament" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTournaments.map((tournament) => (
                      <SelectItem key={tournament.id} value={tournament.id}>
                        {tournament.name} - ${tournament.prizePool.toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasParentalConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="checkbox-parental-consent"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm">
                    I have parental consent (required if under 16)
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="checkbox-terms"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm">
                    I agree to the tournament rules and terms of service
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full glow-button text-primary-foreground py-3 font-bold"
            disabled={isSubmitting || registrationMutation.isPending}
            data-testid="button-submit-registration"
          >
            {isSubmitting || registrationMutation.isPending ? "Registering..." : "Register Now!"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
