import type { HTMLAttributes } from "react";

export interface TabProps {
    text: string;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export interface BlobProps extends HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
};
  