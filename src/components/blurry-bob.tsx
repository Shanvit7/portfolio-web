import { cn } from "../lib/utils";
import type { BlobProps } from "../lib/types";

const BlurryBlob = ({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) => {
  return (
    <div className="flex w-screen h-screen relative z-10 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute -right-1/2 -top-0 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
};

export default BlurryBlob;
