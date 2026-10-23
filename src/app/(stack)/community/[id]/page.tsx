import { ScreenPlaceholder } from '@/components/shared/screen-placeholder';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <ScreenPlaceholder
      title="게시글 상세"
      route="/community/:id"
      pattern="G"
      detail={`게시글 ID: ${id}`}
    />
  );
}
