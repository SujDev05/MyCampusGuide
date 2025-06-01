
# MyCampusGuide

MyCampusGuide is a Next.js application designed to provide personalized university course suggestions to students based on their academic performance, interests, and career aspirations. It utilizes AI to generate tailored recommendations.

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to get your development environment set up:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd MyCampusGuide
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of your project by copying the example if one exists (e.g., `.env.example`), or create an empty one.
    ```bash
    touch .env
    ```
    Populate this file with any necessary environment variables. For Genkit and Google AI, you might need API keys or specific configurations. Refer to the Genkit and Google AI documentation for details.
    For example:
    ```
    GOOGLE_API_KEY=your_google_api_key_here
    ```

## Running the Development Server

To start the Next.js development server:
```bash
npm run dev
```
Or using Yarn:
```bash
yarn dev
```
The application will typically be available at `http://localhost:9002`.

## Running the Genkit Development Server

Genkit flows are developed and tested with a local Genkit server. To start the Genkit development server (which also watches for file changes):
```bash
npm run genkit:watch
```
Or for a single run:
```bash
npm run genkit:dev
```
This will typically start the Genkit developer UI, allowing you to inspect and test your flows.

## Building for Production

To create a production build of the application:
```bash
npm run build
```
This command will generate an optimized version of your application in the `.next` folder.

To run the production build locally:
```bash
npm run start
```

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v15)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit) (with Google AI)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Forms:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation

## Linting and Type Checking

To lint your code:
```bash
npm run lint
```
To check for TypeScript errors:
```bash
npm run typecheck
```
