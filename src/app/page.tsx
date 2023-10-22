import Feed from '@/components/Feed';
import Info from '@/components/Info';
import Profile from '@/components/Profile';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-col md:flex-row md:w-full max-w-screen-xl m-auto place-content-center gap-4 py-6 px-10'>
			<Profile />
			<div className='flex flex-col lg:flex-row gap-4'>
				<Feed />
				<Info />
			</div>
		</div>
	);
}
