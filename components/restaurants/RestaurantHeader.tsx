"use client";

import { Store, CalendarDays } from "lucide-react";
import { Restaurant } from "@/types/restaurant";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantHeader({
  restaurant,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
            <Store
              className="h-10 w-10 text-primary"
            />
          </div>

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <h1 className="text-3xl font-bold">
                {restaurant.name}
              </h1>

              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500">
                Pending Review
              </span>

            </div>

            <p className="mt-3 max-w-3xl text-muted-foreground">
              {restaurant.description ||
                "No description provided."}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

              {restaurant.cuisine?.length ? (
                <div className="flex flex-wrap gap-2">

                  {restaurant.cuisine.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-primary/10 px-3 py-1 text-primary"
                    >
                      {item}
                    </span>
                  ))}

                </div>
              ) : null}

              {restaurant.submittedAt && (
                <div className="flex items-center gap-2">

                  <CalendarDays className="h-4 w-4" />

                  <span>
                    Submitted{" "}
                    {new Date(
                      restaurant.submittedAt
                    ).toLocaleDateString()}
                  </span>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}