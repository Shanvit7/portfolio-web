import { cn } from "@/lib/utils";
import type { BlobProps } from "@/lib/types";

const BlurryBlob = ({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) => {
  return (
    <div className="fixed w-1/3 top-1/4 right-1/3 flex z-10 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "relative -right-1/2 -top-1/2 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            "relative -left-56 -top-1/3  h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
};

export default BlurryBlob;
