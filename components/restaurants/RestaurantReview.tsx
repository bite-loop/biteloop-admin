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
import RestaurantHeader from "./RestaurantHeader";
import StickyReviewBar from "./StickyReviewBar";

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
  <div className="mx-auto max-w-7xl space-y-8 pb-32">

    {/* Header */}
<RestaurantHeader restaurant={restaurant} />

    {/* Restaurant + Business */}
    <div className="grid gap-6 xl:grid-cols-2">
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

</div>

    {/* Address + Operating Hours */}
    <div className="grid gap-6 xl:grid-cols-2">

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
</div>

    {/* Images + Empty Menu Placeholder */}
    <div className="grid gap-6 xl:grid-cols-2">
<ImageGallery
  images={restaurant.images}
/>

    </div>
      <div className="rounded-3xl border bg-card p-8">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">
            Menu Preview
          </h2>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Menu preview will be added in the next step.
        </p>
      </div>


    {/* Bank + Empty Settings Placeholder */}
    <div className="grid gap-6 xl:grid-cols-2">

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

      <div className="rounded-3xl border bg-card p-8">
        <h2 className="text-lg font-semibold">
          Settings
        </h2>

        <p className="mt-4 text-sm text-muted-foreground">
          Settings section will be added later.
        </p>
      </div>

    </div>


<StickyReviewBar
  restaurantName={restaurant.name}
  loading={reviewLoading}
  onApprove={() => handleReview("approved")}
  onReject={() => handleReview("rejected")}
/>

    </div>
  );
}

