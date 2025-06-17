import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const ButtonVariants = cva(
  "rounded-md w-max text-[16px] font-semibold transition-colors duration-700",
  {
    variants: {
      variant: {
        default:
          "bg-foreground hover:bg-background hover:text-foreground",
        secondary:
          "bg-[#d51203] hover:bg-background hover:text-foreground",
        blue:
          "bg-[#0156FF] hover:bg-background hover:text-foreground",
      },
      size: {
        default: "h-[45px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, ButtonVariants }
