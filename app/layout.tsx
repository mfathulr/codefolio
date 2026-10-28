import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fathul Radhiansyah — Data & AI Engineer, Builder, Mentor",
  description:
    "Building intelligent products at the intersection of data, AI, and automation from Jakarta, ID. Open for freelance, mentoring, and select full-time roles.",
  openGraph: {
    title: "Fathul Radhiansyah — Data & AI Engineer",
    description:
      "Building intelligent products at the intersection of data, AI, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
