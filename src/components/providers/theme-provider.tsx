"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** next-themes 래퍼 — 루트 layout에서 children을 감싸는 용도 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
