import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'LinkedIn',
	description: 'LinkedIn Clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' data-theme='cupcake'>
			<body className='bg-base-100'>
				<div className='w-full bg-white border border-b-gray-100 p-2'>
					<Header />
				</div>
				<main className=''>{children}</main>
			</body>
		</html>
	);
}
