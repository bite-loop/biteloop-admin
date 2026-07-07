"use client";

import { useEffect, useState } from "react";
import { Restaurant } from "@/types/restaurant";
import {
  Store,
  Building2,
  MapPin,
  Clock3,
  Wallet,
  UtensilsCrossed,
  Loader2,
} from "lucide-react";

interface Props {
  id: string;
}

export default function RestaurantReview({
  id,
}: Props) {
  const [restaurant, setRestaurant] =
    useState<Restaurant | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(
          `/api/restaurants/${id}`
        );

        const data = await res.json();

        if (data.success) {
          setRestaurant(data.restaurant);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="rounded-3xl border p-10 text-center">
        Restaurant not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border bg-card p-8">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
            <Store
              size={34}
              className="text-primary"
            />
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              {restaurant.name}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {restaurant.description ||
                "No description provided."}
            </p>

          </div>

        </div>

      </div>

      {/* Restaurant */}

      <section className="rounded-3xl border bg-card p-8">

        <div className="mb-6 flex items-center gap-3">

          <UtensilsCrossed
            className="text-primary"
            size={22}
          />

          <h2 className="text-xl font-semibold">
            Restaurant Information
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <Info
            label="Cuisine"
            value={
              restaurant.cuisine?.join(", ") ||
              "-"
            }
          />

          <Info
            label="Price Range"
            value={restaurant.priceRange}
          />

          <Info
            label="Delivery Time"
            value={restaurant.deliveryTime}
          />

          <Info
            label="Business Type"
            value={restaurant.businessType}
          />

        </div>

      </section>

      {/* Address */}

      <section className="rounded-3xl border bg-card p-8">

        <div className="mb-6 flex items-center gap-3">

          <MapPin
            className="text-primary"
            size={22}
          />

          <h2 className="text-xl font-semibold">
            Address
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <Info
            label="Street"
            value={
              restaurant.address?.street
            }
          />

          <Info
            label="City"
            value={
              restaurant.address?.city
            }
          />

          <Info
            label="State"
            value={
              restaurant.address?.state
            }
          />

          <Info
            label="Zip Code"
            value={
              restaurant.address?.zipCode
            }
          />

        </div>

      </section>

      {/* Business */}

      <section className="rounded-3xl border bg-card p-8">

        <div className="mb-6 flex items-center gap-3">

          <Building2
            className="text-primary"
            size={22}
          />

          <h2 className="text-xl font-semibold">
            Business Details
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <Info
            label="Legal Name"
            value={
              restaurant.businessDetails
                ?.legalName
            }
          />

          <Info
            label="Business Number"
            value={
              restaurant.businessDetails
                ?.businessNumber
            }
          />

          <Info
            label="Business Phone"
            value={
              restaurant.businessDetails
                ?.businessPhone
            }
          />

          <Info
            label="GST / HST"
            value={
              restaurant.businessDetails
                ?.hstNumber
            }
          />

        </div>

      </section>

      {/* Bank */}

      <section className="rounded-3xl border bg-card p-8">

        <div className="mb-6 flex items-center gap-3">

          <Wallet
            className="text-primary"
            size={22}
          />

          <h2 className="text-xl font-semibold">
            Bank Details
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <Info
            label="Account Holder"
            value={
              restaurant.bankDetails
                ?.accountHolderName
            }
          />

          <Info
            label="Bank Name"
            value={
              restaurant.bankDetails
                ?.bankName
            }
          />

          <Info
            label="Account Number"
            value={
              restaurant.bankDetails
                ?.accountNumber
            }
          />

          <Info
            label="Account Type"
            value={
              restaurant.bankDetails
                ?.accountType
            }
          />

        </div>

      </section>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <div className="rounded-2xl border bg-background p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-base font-semibold">
        {value || "-"}
      </p>
    </div>
  );
}