import Feed from '@/components/Feed';
import Info from '@/components/Info';
import Profile from '@/components/Profile';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl m-auto items-center'>
			<Profile />
			<Feed />
			<Info />
		</div>
	);
}
