"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { TabProps } from "@/lib/types";

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-md p-2 text-sm transition-all",
        selected ? "text-white" : "text-slate-300 hover:font-black"
      )}
    >
      <p className="relative z-50 min-w-20">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-600 to-pink-600"
        />
      )}
    </button>
  );
};

const TopNavbar = ({ tabs }: { tabs: string[] }) => {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <nav className="bg-black py-2">
      <div className="flex flex-wrap items-center justify-center gap-4 mx-auto p-4 bg-white/10 rounded-lg shadow-lg w-1/2">
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
    </nav>
  );
};

export default TopNavbar;
