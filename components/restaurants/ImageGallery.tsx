"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";

interface Props {
  images?: {
    logo?: string;
    cover?: string[];
    gallery?: string[];
  };
}

function ImageCard({
  title,
  src,
  height,
}: {
  title: string;
  src?: string;
  height: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-muted-foreground">
        {title}
      </p>

      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-muted ${height}`}
      >
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ImageOff size={26} />
              <span className="text-sm">
                No Image
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ImageGallery({
  images,
}: Props) {
  return (
    <section className="rounded-3xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-lg font-semibold">
          Restaurant Images
        </h2>
      </div>

      <div className="space-y-8 p-6">
        <ImageCard
          title="Restaurant Logo"
          src={images?.logo}
          height="h-44"
        />

        <ImageCard
          title="Cover Banner"
          src={images?.cover?.[0]}
          height="h-64"
        />

        <div>
          <p className="mb-4 text-sm font-semibold text-muted-foreground">
            Gallery
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images?.gallery?.length ? (
              images.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-44 overflow-hidden rounded-2xl border border-border"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full flex h-44 items-center justify-center rounded-2xl border border-dashed border-border text-muted-foreground">
                No Gallery Images
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}