import type { ImgHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SkewImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

/**
 * All the props are passed to the img element.
 */
export default function SkewImage({ className, alt = 'Me' ,...props }: SkewImageProps) {
  return (
    <div
      className={
        "h-56 w-72 transition-all duration-300 ease-in-out [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] hover:scale-95 hover:[clip-path:polygon(0_5%,_100%_0,_100%_95%,_0%_100%)] hover:[&_img]:scale-125"
      }
    >
      <img
        alt={alt}
        {...props}
        className={cn(
          "transition-delay-150 h-full w-full object-cover transition-all duration-300 ease-in-out",
          className,
        )}
      />
    </div>
  );
}
