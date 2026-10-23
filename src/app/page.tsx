// 임시 시작 화면. 실제 홈 피드는 (tabs)/home에서 구현합니다.
export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[390px] flex-col items-center justify-center gap-2 px-4">
      <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-title)] font-extrabold">
        동네장터
      </h1>
      <p className="text-[length:var(--text-caption)] text-[color:var(--color-muted)]">
        웹 버전 구현 준비 중
      </p>
    </main>
  );
}
