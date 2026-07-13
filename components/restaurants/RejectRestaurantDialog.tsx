"use client";

import { useState } from "react";
import { TriangleAlert } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  onReject: (
    reason: string,
    description: string
  ) => void;
}
const REJECTION_REASONS = [
  "Missing Business Documents",
  "Business Information Incorrect",
  "Poor Quality Images",
  "Menu Incomplete",
  "Address Verification Failed",
  "Duplicate Restaurant",
  "Other",
];

export default function RejectRestaurantDialog({
  open,
  onOpenChange,
  onReject,
}: Props) {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setReason("");
    setDescription("");
    onOpenChange(false);
  };

const handleReject = () => {
  onReject(reason, description);

  handleClose();
};

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogContent className="sm:max-w-lg rounded-2xl p-0 overflow-hidden">

        {/* Header */}

        <DialogHeader className="border-b px-6 py-5">

          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
            <TriangleAlert className="h-5 w-5 text-red-500" />
          </div>

          <DialogTitle className="text-xl">
            Reject Restaurant
          </DialogTitle>

          <DialogDescription>
            Tell the restaurant why its
            onboarding request is being
            rejected.
          </DialogDescription>

        </DialogHeader>

        {/* Body */}

        <div className="space-y-5 px-6 py-6">

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Reason
            </label>

            <Select
              value={reason}
              onValueChange={setReason}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>

              <SelectContent>
                {REJECTION_REASONS.map(
                  (reason) => (
                    <SelectItem
                      key={reason}
                      value={reason}
                    >
                      {reason}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>

          </div>

          <div className="space-y-2">

            <div className="flex items-center justify-between">

              <label className="text-sm font-medium">
                Description
              </label>

              <span className="text-xs text-muted-foreground">
                {description.length}/500
              </span>

            </div>

            <Textarea
              rows={5}
              maxLength={500}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              placeholder="Explain what needs to be corrected before the restaurant can resubmit."
              className="resize-none"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t px-6 py-4">

          <Button
            variant="outline"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            disabled={
              !reason || !description
            }
            onClick={handleReject}
          >
            Reject Restaurant
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
}