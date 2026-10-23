// 공용 상태 5종 (T-103). 기본 상태는 화면이 직접 그리고, 나머지 4종은 이 컴포넌트를 씁니다.
// 로딩은 스피너 대신 스켈레톤을 씁니다 (개발지시서 7장 2번).
import Link from 'next/link';
import type { ReactNode } from 'react';

export type ScreenStateKind = 'loading' | 'empty' | 'error' | 'forbidden';

type StateViewProps = {
  kind: ScreenStateKind;
  title?: string;
  description?: string;
  action?: { label: string; href?: string; onClick?: () => void };
  children?: ReactNode;
};

const DEFAULTS: Record<ScreenStateKind, { title: string; description: string }> = {
  loading: { title: '불러오는 중이에요', description: '' },
  empty: { title: '아직 아무것도 없어요', description: '다음 행동을 눌러 시작해 보세요.' },
  error: { title: '문제가 생겼어요', description: '잠시 후 다시 시도해 주세요.' },
  forbidden: { title: '권한이 필요해요', description: '필요한 권한을 허용한 뒤 다시 시도해 주세요.' },
};

export function StateView({ kind, title, description, action, children }: StateViewProps) {
  if (kind === 'loading') {
    return (
      <div role="status" aria-busy="true" aria-label="불러오는 중" className="flex flex-col gap-3 px-4 py-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-3 rounded-[var(--radius-card)] bg-[color:var(--color-surface)] p-3">
            <div className="size-[var(--size-product-thumb)] shrink-0 animate-pulse rounded-[var(--radius-thumb)] bg-[color:var(--color-placeholder)]" />
            <div className="flex flex-1 flex-col gap-2 pt-1">
              <div className="h-4 w-3/4 animate-pulse rounded bg-[color:var(--color-placeholder)]" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-[color:var(--color-placeholder)]" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-[color:var(--color-placeholder)]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const fallback = DEFAULTS[kind];
  const isDanger = kind === 'error';

  return (
    <section
      role={isDanger ? 'alert' : 'status'}
      className="flex flex-col items-center gap-2 px-6 py-12 text-center"
    >
      <h2
        className={`font-[family-name:var(--font-display)] text-[length:var(--text-headline)] font-extrabold ${
          isDanger ? 'text-[color:var(--color-danger)]' : 'text-[color:var(--color-ink)]'
        }`}
      >
        {title ?? fallback.title}
      </h2>
      <p className="text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
        {description ?? fallback.description}
      </p>
      {children}
      {action &&
        (action.href ? (
          <Link
            href={action.href}
            className="mt-3 inline-flex min-h-[var(--size-touch-min)] items-center rounded-[var(--radius-button)] bg-[color:var(--color-brand)] px-4 text-[length:var(--text-body-strong)] font-bold text-[color:var(--color-surface)]"
          >
            {action.label}
          </Link>
        ) : (
          <button
            type="button"
            onClick={action.onClick}
            className="mt-3 inline-flex min-h-[var(--size-touch-min)] items-center rounded-[var(--radius-button)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 text-[length:var(--text-body-strong)] font-bold text-[color:var(--color-ink)]"
          >
            {action.label}
          </button>
        ))}
    </section>
  );
}
