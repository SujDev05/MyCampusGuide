"use server";

import { suggestCourses, type CourseSuggestionInput, type CourseSuggestionOutput } from "@/ai/flows/course-suggestion";

export async function getCourseSuggestions(
  input: CourseSuggestionInput
): Promise<CourseSuggestionOutput | { error: string }> {
  try {
    // Basic validation can be done here if needed, though Zod on client is primary for UX
    if (input.tenthBoardMarks < 0 || input.tenthBoardMarks > 100 ||
        input.twelfthBoardMarks < 0 || input.twelfthBoardMarks > 100) {
      return { error: "Board marks must be between 0 and 100." };
    }
    if (!input.preferredStream || input.interests.length < 5 || input.careerAspirations.length < 5) {
        return {error: "Please fill all fields with sufficient details."};
    }


    const result = await suggestCourses(input);
    return result;
  } catch (e) {
    console.error("Error in getCourseSuggestions action:", e);
    const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
    return { error: `Failed to get course suggestions: ${errorMessage}` };
  }
}
