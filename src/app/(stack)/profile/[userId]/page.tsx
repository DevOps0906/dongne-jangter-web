import { ScreenPlaceholder } from '@/components/shared/screen-placeholder';

export default async function Page({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  return (
    <ScreenPlaceholder
      title="판매자 프로필"
      route="/profile/:userId"
      pattern="G (V-F 매너온도)"
      detail={`사용자 ID: ${userId}`}
    />
  );
}
