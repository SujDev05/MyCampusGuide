// This file uses server-side code.
'use server';

/**
 * @fileOverview AI agent that suggests suitable university courses based on student's academic inputs and preferences.
 *
 * - suggestCourses - A function that handles the course suggestion process.
 * - CourseSuggestionInput - The input type for the suggestCourses function.
 * - CourseSuggestionOutput - The return type for the suggestCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseSuggestionInputSchema = z.object({
  tenthBoardMarks: z
    .number()
    .describe('Marks obtained in 10th board exams (out of 100).'),
  twelfthBoardMarks: z
    .number()
    .describe('Marks obtained in 12th board exams (out of 100).'),
  preferredStream: z
    .string()
    .describe(
      'The preferred academic stream of the student (e.g., Science, Commerce, Arts).'
    ),
  interests: z
    .string()
    .describe('The interests of the student (e.g., coding, literature, sports).'),
  careerAspirations: z
    .string()
    .describe('The career aspirations of the student (e.g., engineering, medicine, business).'),
});

export type CourseSuggestionInput = z.infer<typeof CourseSuggestionInputSchema>;

const CourseSuggestionOutputSchema = z.object({
  suggestedCourses: z.array(
    z.object({
      courseName: z.string().describe('The name of the suggested course.'),
      university: z.string().describe('The university offering the course.'),
      personalizedRating: z
        .number()
        .describe(
          'A personalized rating (out of 5) indicating the suitability of the course for the student.'
        ),
      reason: z
        .string()
        .describe('The reason why this course is suitable for the student based on their inputs.')
    })
  ).describe('List of suitable university courses with personalized ratings.'),
});

export type CourseSuggestionOutput = z.infer<typeof CourseSuggestionOutputSchema>;

export async function suggestCourses(input: CourseSuggestionInput): Promise<CourseSuggestionOutput> {
  return suggestCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseSuggestionPrompt',
  input: {schema: CourseSuggestionInputSchema},
  output: {schema: CourseSuggestionOutputSchema},
  prompt: `You are an expert academic advisor specializing in suggesting university courses to students.

You will use the student's academic information and preferences to suggest suitable courses based on their personalized ratings (out of 5).

Consider the weights on the input like board marks, interests, stream and career aspirations.

Here is the student's information:

Tenth Board Marks: {{{tenthBoardMarks}}}
Twelfth Board Marks: {{{twelfthBoardMarks}}}
Preferred Stream: {{{preferredStream}}}
Interests: {{{interests}}}
Career Aspirations: {{{careerAspirations}}}

Suggest university courses with personalized ratings and reasons:

Output in JSON format.`, // Specify JSON format
});

const suggestCoursesFlow = ai.defineFlow(
  {
    name: 'suggestCoursesFlow',
    inputSchema: CourseSuggestionInputSchema,
    outputSchema: CourseSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
