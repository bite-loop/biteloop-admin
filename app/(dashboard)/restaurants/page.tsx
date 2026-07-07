import PendingRestaurants from "@/components/restaurants/PendingRestaurants";

export default function RestaurantsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Restaurant Approvals
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review and approve restaurants that have submitted their onboarding forms.
        </p>
      </div>

      <PendingRestaurants />
    </div>
  );
}