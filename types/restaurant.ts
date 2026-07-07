export interface Restaurant {
  id: string;

  // Restaurant Info
  name: string;
  description?: string;

  // Owner Info
  ownerName?: string;
  ownerEmail?: string;

  // Approval
  onboardingStatus?:
    | "pending_approval"
    | "approved"
    | "rejected";

  status?:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "SUSPENDED";

  isActive?: boolean;

  // Restaurant Details
  businessType?: string;

  cuisine?: string[];

  priceRange?: string;

  deliveryTime?: string;

  estimatedDeliveryTime?: number;

  deliveryFee?: number;

  minOrder?: number;

  rating?: number;

  totalOrders?: number;

  totalRevenue?: number;

  submittedAt?: string;

  createdAt?: string;

  // Address
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };

  // Images
  images?: {
    logo?: string;
    cover?: string[];
    gallery?: string[];
  };

  // Keep remaining Firestore fields
  [key: string]: any;
}