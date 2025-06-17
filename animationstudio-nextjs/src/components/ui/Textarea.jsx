import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex h-[100px] w-full text-[#535353] bg-transparent px-0 py-1 text-[14px] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#535353] focus-visible:outline-none  focus-visible:border-destructive  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }