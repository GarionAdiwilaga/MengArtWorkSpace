# MengArtWork.space

This project is a web application for MengArtWork.space, an online platform for showcasing and selling artwork. It features a public-facing gallery and store, as well as a comprehensive admin interface for managing the site's content.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v20 or later)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/GarionAdiwilaga/MengArtWorkSpace.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Development Server

To run the app in development mode, use the following command:

```bash
npm run dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

## Key Technologies

*   **Next.js:** A React framework for building server-side rendered and static web applications.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Genkit:** An open-source framework for building AI-powered applications.
*   **Shadcn/ui:** A collection of re-usable UI components.
*   **Firebase:** A platform for building web and mobile applications.

## Project Structure

The project is organized as follows:

```
.
├── src
│   ├── app
│   │   ├── admin         # Admin interface pages
│   │   ├── api           # API routes
│   │   ├── gallery       # Gallery page
│   │   ├── store         # Store page
│   │   └── page.tsx      # Main landing page
│   ├── components
│   │   ├── ui            # UI components from Shadcn/ui
│   │   └── ...           # Other reusable components
│   ├── lib
│   │   └── utils.ts      # Utility functions
│   └── ...
├── public                # Static assets
└── ...
```

## Deployment

The application is configured for deployment on Firebase App Hosting.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
