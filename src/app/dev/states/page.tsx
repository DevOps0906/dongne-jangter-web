// 상태 5종 미리보기 (T-104). 운영 빌드에서는 404입니다.
import { notFound } from 'next/navigation';
import { StateView } from '@/components/shared/state-view';

export default function DevStatesPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-6 px-4 py-6 min-[768px]:max-w-[720px] min-[1200px]:max-w-[1200px]">
      <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-title)] font-extrabold">
        상태 5종 미리보기
      </h1>

      <section aria-labelledby="state-default" className="rounded-[var(--radius-card)] bg-[color:var(--color-surface)]">
        <h2 id="state-default" className="px-4 pt-4 text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
          1. 기본 상태는 각 화면이 그립니다
        </h2>
        <p className="px-4 pb-4 text-[length:var(--text-body)]">예: 상품 카드 목록</p>
      </section>

      <section aria-labelledby="state-loading" className="flex flex-col gap-2">
        <h2 id="state-loading" className="text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
          2. 로딩 (스켈레톤)
        </h2>
        <StateView kind="loading" />
      </section>

      <section aria-labelledby="state-empty" className="flex flex-col gap-2 rounded-[var(--radius-card)] bg-[color:var(--color-surface)]">
        <h2 id="state-empty" className="px-4 pt-4 text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
          3. 빈 상태 (다음 행동 안내)
        </h2>
        <StateView
          kind="empty"
          title="이 동네에 아직 올라온 물건이 없어요"
          description="첫 번째 물건을 올려 보세요."
          action={{ label: '물건 올리기', href: '/product/write' }}
        />
      </section>

      <section aria-labelledby="state-error" className="flex flex-col gap-2 rounded-[var(--radius-card)] bg-[color:var(--color-surface)]">
        <h2 id="state-error" className="px-4 pt-4 text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
          4. 오류 (원인과 재시도)
        </h2>
        <StateView
          kind="error"
          title="사진 업로드에 실패했어요"
          description="네트워크 상태를 확인하고 다시 시도해 주세요."
          action={{ label: '다시 시도' }}
        />
      </section>

      <section aria-labelledby="state-forbidden" className="flex flex-col gap-2 rounded-[var(--radius-card)] bg-[color:var(--color-surface)]">
        <h2 id="state-forbidden" className="px-4 pt-4 text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
          5. 권한없음 (필수 권한은 숨기지 않고 안내)
        </h2>
        <StateView
          kind="forbidden"
          title="동네 인증에 위치 권한이 필요해요"
          description="위치 권한을 허용하면 내 동네를 찾을 수 있어요."
          action={{ label: '설정 열기' }}
        />
      </section>
    </main>
  );
}
