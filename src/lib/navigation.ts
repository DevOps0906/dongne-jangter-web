// 하단 5탭 정의. 가운데 탭(글쓰기)은 상품 등록 화면으로 이어집니다 (개발지시서 4장).
export type TabItem = {
  key: 'home' | 'community' | 'write' | 'chat' | 'my';
  label: string;
  href: string;
};

export const TAB_ITEMS: readonly TabItem[] = [
  { key: 'home', label: '홈', href: '/home' },
  { key: 'community', label: '동네생활', href: '/community' },
  { key: 'write', label: '글쓰기', href: '/product/write' },
  { key: 'chat', label: '채팅', href: '/chat' },
  { key: 'my', label: '나의', href: '/my' },
];

// 탭 바가 보이는 경로 (그 밖의 경로는 탭 바 없이 전체 화면)
export const TAB_ROOTS = ['/home', '/community', '/chat', '/my'] as const;
