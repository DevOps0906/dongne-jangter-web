// 탭 바가 보이는 영역 (홈·동네생활·채팅·나의)
import { TabBar } from '@/components/shared/tab-bar';

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[480px] pb-[var(--size-tab-bar-height)] min-[768px]:max-w-[720px] min-[1200px]:max-w-[1200px]">
      {children}
      <TabBar />
    </div>
  );
}
