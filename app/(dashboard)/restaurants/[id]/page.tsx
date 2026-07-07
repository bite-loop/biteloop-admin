import RestaurantReview from "@/components/restaurants/RestaurantReview";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RestaurantReview id={id} />;
}