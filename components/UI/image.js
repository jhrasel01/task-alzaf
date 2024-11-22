"use client";

import Image from "next/image";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CustomImage = ({
  src,
  alt,
  loader,
  className,
  width,
  height,
  quality = 85,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-auto h-auto">
      {isLoading && (
        <SkeletonTheme baseColor="#F0F1F1" highlightColor="#2B2740">
          <Skeleton
            height="100%"
            width="100%"
            containerClassName="absolute inset-0"
            baseColor="#F0F1F1"
            highlightColor="#2B2740"
          />
        </SkeletonTheme>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        quality={quality}
        {...props}
        className={`transition-opacity duration-300 object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
      />
    </div>
  );
};
