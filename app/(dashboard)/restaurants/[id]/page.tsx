import RestaurantReview from "@/components/restaurants/RestaurantReview";

export default async function RestaurantReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RestaurantReview id={id} />;
}