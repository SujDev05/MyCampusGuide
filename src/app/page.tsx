import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lightbulb, BarChart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-accent rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-primary">Welcome to MyCampusGuide</h1>
          <p className="text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Discover the perfect university courses tailored to your academic strengths and career aspirations. Let our AI-powered guide illuminate your path to success.
          </p>
          <Button size="lg" asChild className="shadow-md">
            <Link href="/course-suggester">Get Course Suggestions</Link>
          </Button>
          <div className="mt-12">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Students collaborating" 
              width={800} 
              height={400} 
              className="rounded-lg mx-auto shadow-xl"
              data-ai-hint="students collaboration"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose MyCampusGuide?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <Lightbulb className="w-12 h-12 text-primary mb-2" />
              <CardTitle className="text-center">Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-foreground/80">
                Our AI analyzes your unique academic profile and interests to suggest courses that truly fit you.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <BarChart className="w-12 h-12 text-primary mb-2" />
              <CardTitle className="text-center">Data-Driven Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-foreground/80">
                Leverage comprehensive data to make informed decisions about your future education and career.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <CheckCircle className="w-12 h-12 text-primary mb-2" />
              <CardTitle className="text-center">Easy to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-foreground/80">
                An intuitive interface makes navigating your options simple and stress-free.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 bg-secondary rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Find Your Path?</h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-xl mx-auto">
            Take the first step towards a fulfilling academic journey. Our course suggester is just a click away.
          </p>
          <Button size="lg" variant="default" asChild className="shadow-md">
            <Link href="/course-suggester">Start Exploring Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
