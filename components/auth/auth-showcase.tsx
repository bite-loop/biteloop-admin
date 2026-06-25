import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function AuthShowcase() {
  return (
<section className="relative h-full w-full overflow-hidden rounded-r-[36px] bg-white">
  <div className="absolute inset-0 " />

  <div className="relative h-full w-full">
    <Image
      src="/banner4.png"
      alt="BiteLoop Admin Banner"
      fill
      priority
      className="object-contain "
    />
  </div>
</section>
  );
}