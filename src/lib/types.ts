import type { HTMLAttributes,ImgHTMLAttributes } from "react";

export interface TabProps {
    text: string;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export interface BlobProps extends HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
};
  
export interface GibberishTextProps {
    text: string;
    className?: string;
};

export interface SkewImageProps extends ImgHTMLAttributes<HTMLImageElement> {};

export interface OrbitingItemsProps {
    /**
     * The radius of the circle in percentage, relative to the container.
     */
    radius: number;
  
    /**
     * The items to orbit around the center of the parent element.
     */
    items: React.ReactNode[];
  
    /**
     * Pause the animation when the parent element is hovered.
     */
    pauseOnHover?: boolean;
  
    /**
     * Class name for the background element.
     */
    backgroundClassName?: string;
  
    /**
     * Class name for the container element.
     */
    containerClassName?: string;
  
    /**
     * Additional classes for the item container.
     */
    className?: string;
  }
  