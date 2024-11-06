"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Use any type if ThemeProviderProps is not available
type ThemeProviderProps = {
  children: React.ReactNode;
  // Add any other custom props you expect, or use `any` for flexibility
  [key: string]: any; 
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}