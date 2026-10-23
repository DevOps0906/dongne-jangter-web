import { ScreenPlaceholder } from '@/components/shared/screen-placeholder';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <ScreenPlaceholder
      title="가격 제안 시트"
      route="/product/:id/offer"
      pattern="BottomSheet (V-K)"
      detail={`상품 ID: ${id}`}
    />
  );
}
