import Link from "next/link";

/** 간단한 텍스트 워드마크 — 인증 화면 상단 등에서 사용 */
export function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-tight">
      StarterKit
    </Link>
  );
}
