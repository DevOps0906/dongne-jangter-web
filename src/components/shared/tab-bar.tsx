'use client';

// 하단 5탭 (T-102). 현재 경로로 활성 탭을 정합니다.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TAB_ITEMS } from '@/lib/navigation';

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="하단 메뉴"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[480px] border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)] min-[768px]:max-w-[720px] min-[1200px]:max-w-[1200px]"
      style={{ height: 'var(--size-tab-bar-height)' }}
    >
      <ul className="grid h-full grid-cols-5">
        {TAB_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const isWrite = item.key === 'write';

          return (
            <li key={item.key} className="flex">
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="flex min-h-[var(--size-touch-min)] w-full flex-col items-center justify-center gap-1"
              >
                {isWrite ? (
                  <span
                    aria-hidden="true"
                    className="flex size-9 items-center justify-center rounded-[var(--radius-pill)] bg-[color:var(--color-brand)] text-[length:var(--text-title)] font-bold text-[color:var(--color-surface)]"
                  >
                    +
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-[var(--radius-pill)] ${
                      active ? 'bg-[color:var(--color-brand)]' : 'bg-transparent'
                    }`}
                  />
                )}
                <span
                  className={`text-[length:var(--text-micro)] ${
                    active
                      ? 'font-bold text-[color:var(--color-brand)]'
                      : 'font-medium text-[color:var(--color-muted)]'
                  } tabular-nums`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
