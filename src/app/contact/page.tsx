
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We're here to help! Whether you have questions about our platform, need support, or want to provide feedback, please don't hesitate to reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Use the information below to contact us. We typically respond within 24-48 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-md">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-foreground/80">support@mycampusguide.com</p>
                <p className="text-sm text-muted-foreground">For general inquiries and support.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-md">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-foreground/80">(555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 5 PM (EST)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-md">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p className="text-foreground/80">123 Education Lane, Knowledge City, EDU 54321</p>
                <p className="text-sm text-muted-foreground">Visits by appointment only.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div>
          <Image 
            src="https://placehold.co/600x450.png" 
            alt="Contact illustration" 
            width={600} 
            height={450} 
            className="rounded-lg shadow-xl object-cover w-full"
            data-ai-hint="contact support"
          />
        </div>
      </section>

      <section className="bg-secondary p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Feedback</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Your feedback is valuable to us. It helps us improve MyCampusGuide and better serve students like you. Please feel free to share your thoughts!
        </p>
      </section>
    </div>
  );
}
