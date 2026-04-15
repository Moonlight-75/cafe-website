"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlaceholderImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  label?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-full h-full bg-cream-100 flex items-center justify-center rounded-xl">
        <span className="text-cream-400 text-xs">{label || `Replace: ${src}`}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
