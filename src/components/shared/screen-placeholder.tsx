// 구현 전 자리 표시 화면 (T-101). 실제 화면을 만들면 이 컴포넌트 대신 features/ 의 화면을 씁니다.
import Link from 'next/link';

type ScreenPlaceholderProps = {
  title: string;
  route: string;
  pattern: string;
  detail?: string;
};

export function ScreenPlaceholder({ title, route, pattern, detail }: ScreenPlaceholderProps) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-4 px-4 py-6 min-[768px]:max-w-[720px] min-[1200px]:max-w-[1200px]">
      <header className="flex flex-col gap-1">
        <p className="text-[length:var(--text-micro)] text-[color:var(--color-muted)]">
          <code className="tabular-nums">{route}</code> · 패턴 {pattern}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-title)] font-extrabold text-[color:var(--color-ink)]">
          {title}
        </h1>
        {detail ? (
          <p className="text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
            {detail}
          </p>
        ) : null}
      </header>

      <section className="rounded-[var(--radius-card)] bg-[color:var(--color-surface)] p-4 text-[length:var(--text-body)] text-[color:var(--color-ink)]">
        <p>구현 예정 화면입니다. 라우트와 자리만 먼저 만들어 두었습니다.</p>
        <p className="mt-2 text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
          상태 5종 미리보기는{' '}
          <Link href="/dev/states" className="font-bold text-[color:var(--color-brand)] underline">
            /dev/states
          </Link>
          에서 볼 수 있어요.
        </p>
      </section>
    </main>
  );
}
