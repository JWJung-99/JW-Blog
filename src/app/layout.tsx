import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/variables.css';
import '@/styles/common.css';
import '@/styles/responsive.css';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "Jinwook's Blog",
	description: 'Jinwook의 Front-end 개발 블로그입니다.',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ko">
			<body className={`${roboto.variable}`}>{children}</body>
		</html>
	);
};

export default RootLayout;
