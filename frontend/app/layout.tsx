import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jahidul Islam Shikdar | Backend & DevOps Engineer",
  description:
    "Backend-focused Software Engineer with 2+ years of experience building scalable production systems with NestJS, Node.js, AWS, Docker, CI/CD, and Redis. AI/ML Researcher with IEEE conference publication.",
  keywords: [
    "Jahidul Islam Shikdar",
    "Backend Engineer",
    "DevOps Engineer",
    "NestJS",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
    "CI/CD",
    "Redis",
    "BullMQ",
    "AI Research",
    "Deep Learning",
    "System Design",
  ],
  authors: [{ name: "Jahidul Islam Shikdar" }],
  openGraph: {
    title: "Jahidul Islam Shikdar | Backend & DevOps Engineer",
    description:
      "Backend-focused Software Engineer with 2+ years of experience building scalable production systems with NestJS, Node.js, AWS, and Linux infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
