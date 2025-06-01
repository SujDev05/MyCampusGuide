import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">About MyCampusGuide</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          MyCampusGuide is dedicated to helping students navigate the complex landscape of higher education. We believe that every student deserves to find a course and university that aligns with their passions, strengths, and career goals.
        </p>
      </section>

      <section>
        <Image
          src="https://placehold.co/1200x400.png"
          alt="Diverse group of students on a university campus"
          width={1200}
          height={400}
          className="rounded-lg shadow-xl object-cover w-full"
          data-ai-hint="university campus"
        />
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="mx-auto bg-accent p-3 rounded-full w-fit">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="mt-2">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              To empower students with personalized, data-driven insights, making the process of choosing a university course simpler, clearer, and more effective.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="mx-auto bg-accent p-3 rounded-full w-fit">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="mt-2">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              To be the leading platform for AI-powered academic guidance, helping shape the future of students worldwide by connecting them to their ideal educational paths.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="mx-auto bg-accent p-3 rounded-full w-fit">
               <Target className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="mt-2">Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              We leverage cutting-edge AI technology combined with a deep understanding of academic landscapes to provide tailored recommendations that consider individual student needs.
            </p>
          </CardContent>
        </Card>
      </section>
      
      <section className="bg-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Meet the Technology</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center">
          MyCampusGuide utilizes advanced AI models to analyze your academic performance, preferred streams, interests, and career aspirations. This allows us to generate highly personalized course suggestions, complete with ratings and rationale, to help you make the best choice for your future. We are committed to providing a transparent and supportive tool for your educational journey.
        </p>
      </section>
    </div>
  );
}
