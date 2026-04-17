import Link from "next/link";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center gap-8 p-8 text-center">
      <header className="absolute top-4 right-4">
        <ModeToggle />
      </header>

      <div className="space-y-3">
        <Badge variant="secondary">Next.js 16 · React 19 · Tailwind v4 · shadcn</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">StarterKit</h1>
        <p className="max-w-md text-muted-foreground">
          범용 웹 프로젝트를 즉시 시작할 수 있는 스타터킷입니다.
          다크모드, 폼 검증, 토스트, shadcn 28개 컴포넌트가 포함됩니다.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg">
          <Link href="/login">로그인</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/signup">회원가입</Link>
        </Button>
      </div>

      <footer className="absolute bottom-4 text-xs text-muted-foreground">
        shadcn 컴포넌트 28개 · next-themes · react-hook-form + zod · sonner
      </footer>
    </div>
  );
}
