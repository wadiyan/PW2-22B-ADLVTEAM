"use client";

import { useState, useEffect } from "react";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
    </div>
  ) : (
    <>{children}</>
  );
}
