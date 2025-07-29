import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

const commissions = [
  { id: 1, artist: "Alex Ray", type: "Digital Portrait", price: 150, src: "https://placehold.co/400x300.png", hint: "digital portrait", style: "Realistic" },
  { id: 2, artist: "Maria Garcia", type: "Anime Character", price: 80, src: "https://placehold.co/400x300.png", hint: "anime character", style: "Anime/Manga" },
  { id: 3, artist: "Kenji Tanaka", type: "Fantasy Landscape", price: 250, src: "https://placehold.co/400x300.png", hint: "fantasy landscape", style: "Fantasy" },
  { id: 4, artist: "Chloe Dubois", type: "Abstract Canvas", price: 400, src: "https://placehold.co/400x300.png", hint: "abstract painting", style: "Abstract" },
  { id: 5, artist: "Sam O'Neill", type: "Pet Portrait", price: 120, src: "https://placehold.co/400x300.png", hint: "pet portrait", style: "Realistic" },
  { id: 6, artist: "Unit 734", type: "Sci-Fi Concept Art", price: 300, src: "https://placehold.co/400x300.png", hint: "concept art", style: "Sci-Fi" },
];

export default function StorePage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Commission Store</h1>
        <p className="text-lg text-muted-foreground mt-2">Find your perfect artist for a custom piece of art.</p>
      </div>

      {/* Filters */}
      <div className="mb-8 p-4 border rounded-lg bg-card flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by artist or type..." className="pl-10" />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realistic">Realistic</SelectItem>
              <SelectItem value="anime">Anime/Manga</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="abstract">Abstract</SelectItem>
              <SelectItem value="sci-fi">Sci-Fi</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Commission Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {commissions.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
            <Image src={item.src} alt={item.type} width={400} height={300} className="w-full h-auto object-cover" data-ai-hint={item.hint} />
            <CardContent className="p-6 flex-grow">
              <p className="text-sm text-muted-foreground">{item.style}</p>
              <CardTitle className="text-xl font-semibold mt-1 mb-2">{item.type}</CardTitle>
              <p className="text-sm text-muted-foreground">by {item.artist}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p className="text-2xl font-bold text-primary">${item.price}</p>
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Order Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
