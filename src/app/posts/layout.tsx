import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포스트',
  description: 'Front-end 게시글 목록입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
