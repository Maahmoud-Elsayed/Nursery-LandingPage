import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "./button";
import { LoaderCircle } from "lucide-react";

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
  loadingText: string;
  className?: string;
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ className, isLoading = false, children, loadingText, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "flex items-center gap-2 disabled:pointer-events-auto disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            <span>{loadingText}</span>
          </>
        ) : (
          children
        )}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton"; // Set a display name for easier debugging

export default LoadingButton;
