import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function AuthShowcase() {
  return (
<section className="relative h-full w-full overflow-hidden rounded-r-[36px] bg-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.06),transparent_45%)]" />

  <div className="relative h-full w-full">
    <Image
      src="/banner4.png"
      alt="BiteLoop Admin Banner"
      fill
      priority
      className="object-contain p-10"
    />
  </div>
</section>
  );
}