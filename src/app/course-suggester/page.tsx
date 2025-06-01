"use client";

import { useState } from "react";
import type { CourseSuggestionInput, CourseSuggestionOutput } from "@/ai/flows/course-suggestion";
import { CourseSuggestionForm } from "@/components/course-suggester/course-suggestion-form";
import { CourseCard } from "@/components/course-suggester/course-card";
import { getCourseSuggestions } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Lightbulb } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function CourseSuggesterPage() {
  const [suggestions, setSuggestions] = useState<CourseSuggestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = async (data: CourseSuggestionInput) => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    try {
      const result = await getCourseSuggestions(data);
      if ("error" in result) {
        setError(result.error);
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      } else {
        setSuggestions(result);
        toast({
          title: "Success!",
          description: "Course suggestions generated successfully.",
        });
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to get suggestions: ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <Card className="shadow-xl">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-8 w-8" />
            <CardTitle className="text-3xl">Personalized Course Suggester</CardTitle>
          </div>
          <p className="text-primary-foreground/80 mt-2">
            Fill in your academic details and preferences below to receive AI-powered course recommendations. Our system considers your marks, stream, interests, and career goals to find the best fit for you.
          </p>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <CourseSuggestionForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </CardContent>
      </Card>
      

      {isLoading && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-primary">Generating Suggestions...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-8 w-1/3" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="shadow-md">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {suggestions && suggestions.suggestedCourses && suggestions.suggestedCourses.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Your Personalized Course Suggestions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.suggestedCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {suggestions && suggestions.suggestedCourses && suggestions.suggestedCourses.length === 0 && !isLoading && (
         <Alert className="shadow-md border-accent bg-accent/20">
          <Lightbulb className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary">No Specific Suggestions Found</AlertTitle>
          <AlertDescription>
            We couldn't find specific course matches based on the provided input. Try broadening your interests or aspirations, or double-check your marks. Sometimes, unique profiles require more general guidance.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
