import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const artworks = [
    { id: 'ART001', title: "Cosmic Dream", artist: "Alex Ray", src: "https://placehold.co/40x40.png", hint: "galaxy nebula", status: "Published" },
    { id: 'ART002', title: "City at Dusk", artist: "Maria Garcia", src: "https://placehold.co/40x40.png", hint: "cityscape sunset", status: "Draft" },
    { id: 'ART003', title: "Forest Spirit", artist: "Kenji Tanaka", src: "https://placehold.co/40x40.png", hint: "mystical forest", status: "Published" },
    { id: 'ART004', title: "Ocean's Whisper", artist: "Chloe Dubois", src: "https://placehold.co/40x40.png", hint: "ocean wave", status: "Archived" },
];

export default function AdminGalleryPage() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Artworks</CardTitle>
                    <CardDescription>Manage your gallery artworks.</CardDescription>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Artwork
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Artist</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {artworks.map((art) => (
                            <TableRow key={art.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Image src={art.src} alt={art.title} width={40} height={40} className="rounded-md" data-ai-hint={art.hint} />
                                </TableCell>
                                <TableCell className="font-medium">{art.title}</TableCell>
                                <TableCell>{art.artist}</TableCell>
                                <TableCell>
                                    <Badge variant={art.status === 'Published' ? 'default' : 'outline'}>
                                        {art.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
