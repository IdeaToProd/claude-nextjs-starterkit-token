import { Logo } from "@/components/common/logo";
import { ModeToggle } from "@/components/common/mode-toggle";

/** 인증 페이지 공통 셸 — 중앙 정렬 카드 레이아웃 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh grid place-items-center bg-muted/30 px-4">
      <header className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <Logo />
        <ModeToggle />
      </header>
      <main className="w-full max-w-sm">{children}</main>
    </div>
  );
}
