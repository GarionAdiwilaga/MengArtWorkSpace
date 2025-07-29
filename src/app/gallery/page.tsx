import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const artworks = [
  { id: 1, src: "https://placehold.co/600x800.png", title: "Cosmic Dream", artist: "Alex Ray", hint: "galaxy nebula" },
  { id: 2, src: "https://placehold.co/600x800.png", title: "City at Dusk", artist: "Maria Garcia", hint: "cityscape sunset" },
  { id: 3, src: "https://placehold.co/600x800.png", title: "Forest Spirit", artist: "Kenji Tanaka", hint: "mystical forest" },
  { id: 4, src: "https://placehold.co/600x800.png", title: "Ocean's Whisper", artist: "Chloe Dubois", hint: "ocean wave" },
  { id: 5, src: "https://placehold.co/600x800.png", title: "Crimson Fields", artist: "Sam O'Neill", hint: "red poppy" },
  { id: 6, src: "https://placehold.co/600x800.png", title: "Mechanical Heart", artist: "Unit 734", hint: "steampunk heart" },
  { id: 7, src: "https://placehold.co/600x800.png", title: "Retro Future", artist: "Isabella Rossi", hint: "retrofuturism car" },
  { id: 8, src: "https://placehold.co/600x800.png", title: "Portrait of Silence", artist: "Liam Chen", hint: "monochrome portrait" },
];

export default function GalleryPage() {
  return (
    <div className="container py-16 md:py-24 mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Art Gallery</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore a curated collection of art from our community.</p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {artworks.map((art) => (
          <Dialog key={art.id}>
            <DialogTrigger asChild>
              <div className="overflow-hidden rounded-lg cursor-pointer group relative break-inside-avoid">
                <Image
                  src={art.src}
                  alt={art.title}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={art.hint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold">{art.title}</h3>
                    <p className="text-sm">by {art.artist}</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{art.title}</DialogTitle>
                <DialogDescription>by {art.artist}</DialogDescription>
              </DialogHeader>
              <Image
                src={art.src}
                alt={art.title}
                width={800}
                height={1067}
                className="w-full h-auto rounded-md"
                data-ai-hint={art.hint}
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
