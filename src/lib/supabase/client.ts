import { createBrowserClient } from '@supabase/ssr';

// 브라우저용 Supabase 클라이언트. 키는 NEXT_PUBLIC_* 환경 변수에서만 읽습니다.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
