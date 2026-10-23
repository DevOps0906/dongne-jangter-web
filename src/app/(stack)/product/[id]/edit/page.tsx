import { ScreenPlaceholder } from '@/components/shared/screen-placeholder';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <ScreenPlaceholder
      title="상품 수정"
      route="/product/:id/edit"
      pattern="I"
      detail={`상품 ID: ${id}`}
    />
  );
}
