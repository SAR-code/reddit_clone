"use client";
import { NextUIProvider } from "@nextui-org/react";

// shares the state across diff components

interface ProvidersProp {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProp) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
