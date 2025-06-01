"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { CourseSuggestionInput, CourseSuggestionOutput } from "@/ai/flows/course-suggestion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PREFERRED_STREAMS } from "@/lib/constants";
import { NotebookText, Workflow, Sparkles, BriefcaseBusiness, Send } from 'lucide-react';
import type { ReactNode } from "react";

const formSchema = z.object({
  tenthBoardMarks: z.coerce.number().min(0, "Marks must be at least 0").max(100, "Marks cannot exceed 100"),
  twelfthBoardMarks: z.coerce.number().min(0, "Marks must be at least 0").max(100, "Marks cannot exceed 100"),
  preferredStream: z.string().min(1, "Preferred stream is required"),
  interests: z.string().min(10, "Please describe your interests in at least 10 characters").max(500, "Interests cannot exceed 500 characters"),
  careerAspirations: z.string().min(10, "Please describe your career aspirations in at least 10 characters").max(500, "Career aspirations cannot exceed 500 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface CourseSuggestionFormProps {
  onSubmit: (data: CourseSuggestionInput) => Promise<void>;
  isLoading: boolean;
}

const FormFieldWrapper = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <div className="flex items-start gap-3">
    <span className="mt-9 text-primary">{icon}</span>
    <div className="flex-grow">{children}</div>
  </div>
);

export function CourseSuggestionForm({ onSubmit, isLoading }: CourseSuggestionFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tenthBoardMarks: 0,
      twelfthBoardMarks: 0,
      preferredStream: "",
      interests: "",
      careerAspirations: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FormFieldWrapper icon={<NotebookText className="h-6 w-6" />}>
            <FormField
              control={form.control}
              name="tenthBoardMarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>10th Board Marks (Percentage)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 85" {...field} />
                  </FormControl>
                  <FormDescription>Enter your 10th board exam percentage.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          <FormFieldWrapper icon={<NotebookText className="h-6 w-6" />}>
            <FormField
              control={form.control}
              name="twelfthBoardMarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>12th Board Marks (Percentage)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 90" {...field} />
                  </FormControl>
                  <FormDescription>Enter your 12th board exam percentage.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormFieldWrapper>
        </div>

        <FormFieldWrapper icon={<Workflow className="h-6 w-6" />}>
          <FormField
            control={form.control}
            name="preferredStream"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Academic Stream</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred stream" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PREFERRED_STREAMS.map((stream) => (
                      <SelectItem key={stream.value} value={stream.value}>
                        {stream.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Choose the academic stream you are most interested in.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormFieldWrapper>

        <FormFieldWrapper icon={<Sparkles className="h-6 w-6" />}>
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Interests</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Coding, literature, sports, music, art, debating, volunteering..."
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormDescription>Describe your hobbies and interests briefly.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormFieldWrapper>

        <FormFieldWrapper icon={<BriefcaseBusiness className="h-6 w-6" />}>
          <FormField
            control={form.control}
            name="careerAspirations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Career Aspirations</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Software Engineer, Doctor, Entrepreneur, Writer, Researcher..."
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormDescription>What kind of career are you aiming for?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormFieldWrapper>

        <Button type="submit" disabled={isLoading} size="lg" className="w-full md:w-auto shadow-md">
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Suggesting Courses...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Get Course Suggestions
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
