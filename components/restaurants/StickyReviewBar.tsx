"use client";

import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  restaurantName: string;
  loading: boolean;
  onApprove: () => void;
  onReject: () => void;
}

export default function StickyReviewBar({
  restaurantName,
  loading,
  onApprove,
  onReject,
}: Props) {
  return (
    <div className="sticky bottom-0 z-40 mt-10 border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        <div className="min-w-0">

          <p className="text-sm text-muted-foreground">
            Reviewing Restaurant
          </p>

          <h3 className="truncate text-lg font-semibold">
            {restaurantName}
          </h3>

        </div>

        <div className="flex items-center gap-3">

<AlertDialog>
  <AlertDialogTrigger asChild>
    <button
      disabled={loading}
      className="rounded-xl border border-red-500/30 px-6 py-2.5 font-semibold text-red-600 transition hover:bg-red-500/10 disabled:opacity-50"
    >
      Reject
    </button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
        Reject this restaurant?
      </AlertDialogTitle>

      <AlertDialogDescription>
        The restaurant will remain inactive and its onboarding
        request will be marked as rejected.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>
        Cancel
      </AlertDialogCancel>

      <AlertDialogAction
        onClick={onReject}
        className="bg-red-600 hover:bg-red-700"
      >
        Reject Restaurant
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

<AlertDialog>
  <AlertDialogTrigger asChild>
    <button
      disabled={loading}
      className="flex min-w-[180px] items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Saving...
        </>
      ) : (
        "Approve Restaurant"
      )}
    </button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
        Approve this restaurant?
      </AlertDialogTitle>

      <AlertDialogDescription>
        Once approved, this restaurant will become active and
        visible on the BiteLoop platform.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>
        Cancel
      </AlertDialogCancel>

      <AlertDialogAction
        onClick={onApprove}
      >
        Approve Restaurant
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </div>

      </div>

    </div>
  );
}