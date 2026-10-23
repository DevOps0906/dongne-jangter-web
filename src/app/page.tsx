import { redirect } from 'next/navigation';

// 루트 접근 시 홈 피드로 보냅니다. 로그인 가드는 T-205에서 추가합니다.
export default function RootPage() {
  redirect('/home');
}
