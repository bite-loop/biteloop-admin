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
import { useRouter } from "next/navigation";
import ReviewSection from "./ReviewSection";
import ReviewField from "./ReviewField";
import OperatingHoursCard from "./OperatingHoursCard";
import ImageGallery from "./ImageGallery";

interface Props {
  id: string;
}

export default function RestaurantReview({
  id,
}: Props) {
  const [restaurant, setRestaurant] =
    useState<Restaurant | null>(null);

  const [loading, setLoading] = useState(true);
const router = useRouter();

const [reviewLoading, setReviewLoading] =
  useState(false);

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

  const handleReview = async (
  status: "approved" | "rejected"
) => {
    if (!restaurant) return;
  try {
    setReviewLoading(true);

    const res = await fetch(
      "/api/restaurants/review",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          restaurantId: restaurant.id,
          status,
          comment:
            status === "approved"
              ? "Approved"
              : "Rejected",
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    alert(data.message);

    router.push("/restaurants");
  } catch (error: any) {
    alert(error.message);
  } finally {
    setReviewLoading(false);
  }
};

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

<ReviewSection
    title="Restaurant Information"
    icon={<UtensilsCrossed size={22} />}
>

    <ReviewField
        label="Restaurant Name"
        value={restaurant.name}
    />

    <ReviewField
        label="Description"
        value={restaurant.description}
    />

    <ReviewField
        label="Cuisine"
        value={restaurant.cuisine?.join(", ")}
    />

    <ReviewField
        label="Business Type"
        value={restaurant.businessType}
    />

    <ReviewField
        label="Price Range"
        value={restaurant.priceRange}
    />

    <ReviewField
        label="Delivery Time"
        value={restaurant.deliveryTime}
    />

</ReviewSection>

      {/* Address */}

<ReviewSection
    title="Address"
    icon={<MapPin size={22} />}
>

    <ReviewField
        label="Street"
        value={restaurant.address?.street}
    />

    <ReviewField
        label="City"
        value={restaurant.address?.city}
    />

    <ReviewField
        label="State"
        value={restaurant.address?.state}
    />

    <ReviewField
        label="Zip Code"
        value={restaurant.address?.zipCode}
    />

</ReviewSection>

<OperatingHoursCard
  hours={restaurant.operatingHours}
/>

<ImageGallery
  images={restaurant.images}
/>
      {/* Business */}

<ReviewSection
    title="Business Details"
    icon={<Building2 size={22} />}
>

    <ReviewField
        label="Legal Name"
        value={restaurant.businessDetails?.legalName}
    />

    <ReviewField
        label="Business Number"
        value={restaurant.businessDetails?.businessNumber}
    />

    <ReviewField
        label="Business Phone"
        value={restaurant.businessDetails?.businessPhone}
    />

    <ReviewField
        label="GST / HST"
        value={restaurant.businessDetails?.hstNumber}
    />

</ReviewSection>

      {/* Bank */}

<ReviewSection
    title="Bank Details"
    icon={<Wallet size={22} />}
>

    <ReviewField
        label="Account Holder"
        value={restaurant.bankDetails?.accountHolderName}
    />

    <ReviewField
        label="Bank Name"
        value={restaurant.bankDetails?.bankName}
    />

    <ReviewField
        label="Account Number"
        value={restaurant.bankDetails?.accountNumber}
    />

    <ReviewField
        label="Account Type"
        value={restaurant.bankDetails?.accountType}
    />

</ReviewSection>

<section className="flex justify-end gap-4 rounded-3xl border bg-card p-8">

  <button
    disabled={reviewLoading}
    onClick={() =>
      handleReview("rejected")
    }
    className="rounded-2xl border border-red-200 px-8 py-3 font-semibold text-red-600 transition hover:bg-red-50"
  >
    Reject
  </button>

  <button
    disabled={reviewLoading}
    onClick={() =>
      handleReview("approved")
    }
    className="rounded-2xl bg-primary px-8 py-3 font-semibold text-white transition hover:opacity-90"
  >
    {reviewLoading
      ? "Saving..."
      : "Approve Restaurant"}
  </button>

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