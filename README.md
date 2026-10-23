# dongne-jangter-web

동네장터 **웹/PWA 버전** 구현 레포입니다. Next.js App Router로 만듭니다. 기획과 디자인은 `spec/` 서브모듈을 기준으로 합니다.

## 3개 레포의 관계

| 레포 | 역할 | 이 레포와의 관계 |
|---|---|---|
| [dongne-jangter-spec](https://github.com/DevOps0906/dongne-jangter-spec) | 기획·디자인 캔버스·토큰·DB 스키마 | `spec/` 서브모듈로 포함 (읽기 전용) |
| **dongne-jangter-web** (이 레포) | 웹/PWA 구현 | — |
| [dongne-jangter-flutter](https://github.com/DevOps0906/dongne-jangter-flutter) | Flutter 앱 구현 (같은 기획을 다른 방식으로 구현) | 같은 spec과 같은 Supabase 스키마 사용 |

- 디자인 값은 `spec/tokens/tokens.json`에서만 바꿉니다. 이 레포의 `src/styles/tokens.css`는 생성 파일입니다.
- DB 스키마는 `spec/supabase/`에서 관리합니다. 이 레포에는 마이그레이션 파일이 없습니다.

## 시작하기

```bash
# 1) 서브모듈 포함 클론 (처음 한 번)
git clone --recurse-submodules https://github.com/DevOps0906/dongne-jangter-web.git
cd dongne-jangter-web

# 이미 클론했다면
git submodule update --init --recursive

# 2) 패키지 설치
npm install

# 3) 환경 변수 설정 (개발용 Supabase 값)
cp .env.example .env.local

# 4) 토큰 생성 후 개발 서버 실행
npm run dev
```

## 주요 명령어

| 명령어 | 설명 |
|---|---|
| `npm run tokens` | `spec/tokens/tokens.json` → `src/styles/tokens.css` 생성 |
| `npm run dev` | 토큰 생성 후 개발 서버 실행 |
| `npm run build` | 토큰 생성 후 프로덕션 빌드 |
| `npm run typecheck` | 타입 검사 |

## 디자인 토큰 쓰는 법

```tsx
// 색
<div className="bg-[color:var(--color-ground)] text-[color:var(--color-ink)]" />

// 반응형 글자 크기 (모바일·태블릿·데스크탑 값은 tokens.css가 자동 처리)
<h1 className="text-[length:var(--text-title)]" />

// 글꼴
<h1 className="font-[family-name:var(--font-display)]" />
```

Tailwind 테마에 토큰을 다시 정의하지 않습니다. 원본은 `spec` 레포 하나로 유지합니다.

## 폴더 구조

```
dongne-jangter-web/
├── spec/                   공용 기획·토큰·스키마 (서브모듈, 읽기 전용)
├── scripts/build-tokens.mjs  토큰 생성 스크립트
├── src/
│   ├── app/                Next.js App Router (layout, page)
│   ├── components/
│   │   ├── ui/             shadcn 컴포넌트 (추가 예정)
│   │   └── shared/         하단 탭, 상태 5종(로딩·빈·오류·권한없음) (추가 예정)
│   ├── features/           auth, location, listings, community, chat, reviews, my
│   ├── lib/supabase/       클라이언트·서버 Supabase 헬퍼
│   └── styles/             globals.css, tokens.css(생성)
├── public/                 manifest.webmanifest, 아이콘
└── .env.example            필요한 환경 변수 이름 (값 없음)
```

## 현재 상태

- 완료: 프로젝트 구조, 토큰 생성, 타입 검사와 빌드 통과
- 진행 예정: 화면 구현 (`(auth)`, `(tabs)` 라우트 그룹), 미들웨어로 로그인 가드, PWA 아이콘, shadcn 설정

## 주의

- `.env.local`과 키 값은 커밋하지 않습니다.
- 라이트 테마만 있습니다.
- 상품 사진과 지도는 자리 표시 상태이며 실제 연동은 아직 없습니다.
