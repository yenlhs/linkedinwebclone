import Feed from '@/components/Feed';
import Info from '@/components/Info';
import Profile from '@/components/Profile';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex max-w-screen-xl m-auto place-content-start gap-4 py-6 px-10'>
			<Profile />
			<Feed />
			<Info />
		</div>
	);
}
