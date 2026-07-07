"use client";

import { useEffect, useState } from "react";
import { Restaurant } from "@/types/restaurant";
import {
  Store,
  Clock3,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function PendingRestaurants() {
  const [restaurants, setRestaurants] = useState<
    Restaurant[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(
          "/api/restaurants/pending"
        );

        const data = await res.json();

        if (data.success) {
          setRestaurants(data.restaurants);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-56 animate-pulse rounded-3xl border border-border bg-muted"
          />
        ))}
      </div>
    );
  }

  if (restaurants.length === 0) {
    return (
      <div className="flex h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-border">
        <Store
          size={44}
          className="text-muted-foreground"
        />

        <h2 className="mt-5 text-xl font-semibold">
          No Pending Restaurants
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Every onboarding request has been reviewed.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
        >
          {/* Header */}

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Store
                  size={24}
                  className="text-primary"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  {restaurant.name}
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {restaurant.cuisine?.join(", ") ||
                    "Cuisine not provided"}
                </p>
              </div>
            </div>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Pending
            </span>
          </div>

          {/* Info */}

          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <MapPin size={16} />

              <span>
                {restaurant.address?.city || "-"},{" "}
                {restaurant.address?.state || "-"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 size={16} />

              <span>
                Submitted{" "}
                {restaurant.submittedAt
                  ? new Date(
                      restaurant.submittedAt
                    ).toLocaleDateString()
                  : "-"}
              </span>
            </div>
          </div>

          {/* Footer */}

          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-medium text-white transition hover:opacity-90">
            Review Restaurant

            <ChevronRight size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}