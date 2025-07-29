import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper, Users, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-primary via-purple-700 to-accent">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <Image src="/nishiki_art_logo.svg" alt="Logo" width={500} height={500} className="w-4/5 h-auto mx-auto mb-4 max-w-sm" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary-foreground font-headline">
            Where Creativity Finds a Home
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Discover unique artwork from our vibrant community of artists. Commission custom pieces and support creativity.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="w-60">
              <Link href="/gallery">
                Explore Gallery <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-60">
              <Link href="/store">Commission an Artist</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Posts Section */}
      <section id="posts" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Latest from the Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
              <Image src="https://placehold.co/600x400.png" alt="Featured post" width={600} height={400} className="w-full h-auto object-cover" data-ai-hint="abstract painting" />
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-semibold">New Artist Spotlight: Jane Doe</CardTitle>
                <p className="text-muted-foreground">Discover the vibrant and emotional world of our newest featured artist.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
              <Image src="https://placehold.co/600x400.png" alt="Tutorial" width={600} height={400} className="w-full h-auto object-cover" data-ai-hint="digital art" />
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-semibold">Digital Painting Tutorial</CardTitle>
                <p className="text-muted-foreground">Learn the basics of digital painting with this step-by-step guide from a pro.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
              <Image src="https://placehold.co/600x400.png" alt="Community Event" width={600} height={400} className="w-full h-auto object-cover" data-ai-hint="art exhibition" />
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-semibold">Upcoming Community Art Jam</CardTitle>
                <p className="text-muted-foreground">Join us for a day of creativity, collaboration, and fun. All skill levels welcome!</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Info Section */}
      <section id="community" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Join Our Creative Universe</h2>
              <p className="text-muted-foreground mb-6">
                MengArtWork.space is more than just a gallery; it's a hub for artists and art lovers to connect, share, and grow. We're dedicated to fostering a supportive environment where creativity thrives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4"><Palette className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">Showcase Your Talent</h3>
                    <p className="text-muted-foreground text-sm">Exhibit your artwork in our curated gallery, reaching a global audience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4"><Users className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">Connect with Peers</h3>
                    <p className="text-muted-foreground text-sm">Engage with fellow artists, share techniques, and collaborate on projects.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4"><Newspaper className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">Offer Commissions</h3>
                    <p className="text-muted-foreground text-sm">Monetize your skills by offering custom art commissions through our store.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image src="https://placehold.co/600x500.png" alt="Community artists" width={600} height={500} className="rounded-lg shadow-lg" data-ai-hint="artist community" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions, suggestions, or just want to say hi? Drop us a line!
          </p>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </div>
            <Textarea placeholder="Your Message" rows={6} />
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
