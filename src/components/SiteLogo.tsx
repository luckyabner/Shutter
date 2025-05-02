import Link from "next/link";
import React from "react";

export default function SiteLogo() {
  return (
    <Link href="/">
      <div
        className={
          "flex h-fit items-center gap-2 font-serif text-4xl font-bold"
        }
      >
        <div className="flex-shrink-0 tracking-wide">Shutter</div>
      </div>
    </Link>
  );
}
