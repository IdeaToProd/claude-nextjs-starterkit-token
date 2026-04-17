# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 기술 스택

- **Next.js 16.2.4** — App Router 사용 (`src/app/` 디렉토리 기반)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — `globals.css`에서 `@import "tailwindcss"` 방식으로 로드 (설정 파일 없음)
- **shadcn/ui** — `radix-luma` 스타일, `radix-ui` 패키지 직접 사용 (`components.json` 참고)
- **lucide-react** — 아이콘 라이브러리

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드된 앱 실행
npm run lint     # ESLint 검사
```

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃, 폰트(Geist, Inter) 설정
│   ├── page.tsx        # 홈 페이지
│   └── globals.css     # Tailwind + shadcn CSS 변수 정의
└── lib/
    └── utils.ts        # cn() 유틸리티 (clsx + tailwind-merge)
```

컴포넌트는 `src/components/` (shadcn: `@/components/ui`), 훅은 `src/hooks/`에 추가한다.

## shadcn 컴포넌트 추가

```bash
npx shadcn@latest add <컴포넌트명>
```

`components.json`의 alias 기준: `@/components/ui`, `@/lib`, `@/hooks`

## 주요 주의사항

- **Tailwind v4**: `tailwind.config.*` 파일이 없다. CSS 커스텀 변수는 `globals.css`의 `@theme inline` 블록에서 정의한다.
- **Next.js 16**: 훈련 데이터와 다른 breaking change가 있을 수 있다. 코드 작성 전 `node_modules/next/dist/docs/`를 확인한다.
- **경로 별칭**: `@/` → `src/` (tsconfig `paths` 설정)
