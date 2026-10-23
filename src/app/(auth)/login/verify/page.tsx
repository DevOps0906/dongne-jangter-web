import { ScreenPlaceholder } from '@/components/shared/screen-placeholder';

export default function Page() {
  return <ScreenPlaceholder title="인증번호 입력" route="/login/verify" pattern="I + V-K" />;
}
