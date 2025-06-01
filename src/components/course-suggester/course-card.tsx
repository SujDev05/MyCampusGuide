import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GraduationCap, MessageCircleQuestion } from "lucide-react";

interface Course {
  courseName: string;
  university: string;
  personalizedRating: number;
  reason: string;
}

interface CourseCardProps {
  course: Course;
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ))}
      {halfStar && <Star key="half" className="h-5 w-5 text-yellow-400 fill-yellow-200" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />
      ))}
      <span className="ml-2 text-sm font-medium text-foreground/80">({rating.toFixed(1)}/5)</span>
    </div>
  );
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{course.courseName}</CardTitle>
        <CardDescription className="flex items-center gap-2 pt-1">
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
          {course.university}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center gap-2">
          <MessageCircleQuestion className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <p className="text-sm text-foreground/90">{course.reason}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
            <StarRating rating={course.personalizedRating} />
            <Badge variant={course.personalizedRating > 4 ? "default" : course.personalizedRating > 3 ? "secondary" : "outline"}
                   className={course.personalizedRating > 4 ? "bg-green-500 text-white" : course.personalizedRating > 3 ? "bg-yellow-500 text-black" : "border-destructive text-destructive"}>
              {course.personalizedRating > 4 ? "Excellent Match" : course.personalizedRating > 3 ? "Good Match" : "Consider"}
            </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
