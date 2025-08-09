import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";

export default function Home() {

  const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/car_ui.jpg"
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/map_ui.jpg"
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/moto_ui.jpg"
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/track.jpg"
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/uber_ui.jpg"
  },
  {
    title: "Pixel Perfect 1",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/rental_ui.jpg"
  },
    {
    title: "Editorially 2",
    link: "https://editorially.org",
    thumbnail: "/moderncar_ui.jpg"
  },
  {
    title: "Editrix AI 2",
    link: "https://editrix.ai",
    thumbnail: "/parking_ui.jpg"
  },
  {
    title: "Pixel Perfect 3",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/thegang_ui.jpg"
  },
      {
    title: "Editorially 25",
    link: "https://editorially.org",
    thumbnail: "/fulluber_ui.jpg"
  },
  {
    title: "Editrix AI 6",
    link: "https://editrix.ai",
    thumbnail: "/direction_ui.jpg"
  },
  {
    title: "Pixel Perfect 8",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/gang_ui.jpg"
  },
  // The component typically works well with 10-15 products
];
  return (
    <div>
      <HeroParallax
      products={products}
      />
    </div>
  );
}
