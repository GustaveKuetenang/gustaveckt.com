import Hero from "@/components/Hero";

export const metadata = {
  title: "Gustave Kuetenang",
  description: "Web developer & Graphic designer",
  openGraph: {
    title: "Gustave Kuetenang",
    description: "Web developer & Graphic designer",
    image: "/images/GustaveTSOPMO.webp",
  },
  twitter: {
    title: "A-propos | Gustave Kuetenang",
    description: "Web developer & Graphic designer",
    image: "/images/GustaveTSOPMO.webp",
    card: "summary_large_image",
  },
};

export default function Home() {
  return <Hero />;
}
