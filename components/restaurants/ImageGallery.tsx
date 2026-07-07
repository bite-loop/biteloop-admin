"use client";

import Image from "next/image";
import { ImageOff, Images } from "lucide-react";

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
        className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-muted ${height}`}
      >
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ImageOff className="h-7 w-7" />
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
    <section className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-200 hover:shadow-md">

      {/* Header */}

      <div className="flex items-center gap-4 border-b border-border/60 bg-muted/30 px-6 py-5">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
          <Images className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Restaurant Images
          </h2>

          <p className="text-sm text-muted-foreground">
            Review uploaded branding assets.
          </p>
        </div>

      </div>

      {/* Body */}

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

          <div className="mb-4 flex items-center justify-between">

            <p className="text-sm font-semibold text-muted-foreground">
              Gallery
            </p>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {images?.gallery?.length ?? 0} Images
            </span>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {images?.gallery?.length ? (
              images.gallery.map((image, index) => (
                <div
                  key={index}
                  className="group relative h-44 overflow-hidden rounded-2xl border border-border/60"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full flex h-44 items-center justify-center rounded-2xl border border-dashed border-border">

                <div className="flex flex-col items-center gap-3 text-muted-foreground">

                  <ImageOff className="h-8 w-8" />

                  <span>
                    No gallery images uploaded
                  </span>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}