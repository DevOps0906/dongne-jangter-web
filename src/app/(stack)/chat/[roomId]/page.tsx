import { ScreenPlaceholder } from '@/components/shared/screen-placeholder';

export default async function Page({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  return (
    <ScreenPlaceholder
      title="채팅방"
      route="/chat/:roomId"
      pattern="F 본문"
      detail={`채팅방 ID: ${roomId}`}
    />
  );
}
