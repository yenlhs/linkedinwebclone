import React from 'react';
import { UserGroupIcon, UserCircleIcon, BookmarkIcon, ChartBarSquareIcon } from '@heroicons/react/20/solid';

export default function Profile() {
	return (
		// <div className='max-w-[300px] w-[250px]'>
		<div className='w-full md:max-w-[300px]'>
			{/* <Image src='' alt='profile image' /> */}

			<div className='rounded-lg border border-gray-200 bg-white shadow-sm mb-2'>
				<div className='flex flex-col border-b border-gray-100 items-center justify-center py-2'>
					<UserCircleIcon width={60} className='m-2' />
					<p className='font-bold'>Adrian Li-Hung-Shun</p>
					<p className='text-xs'>Full Stack Developer</p>
				</div>
				<div className='flex justify-between p-2 '>
					<p className='text-xs'>Who&apos;s viewed your profile</p>
					<p className='text-xs text-blue-700'>9</p>
				</div>
				<div className='flex justify-between p-2'>
					<p className='text-xs'>Connections</p>
					<p className='text-xs text-blue-700'>214</p>
				</div>
				<div className='border-b border-gray-100'>
					<p className='p-2 text-xs font-bold'>Grow your network</p>
				</div>
				<div className='border-b border-gray-100 p-2 hidden md:block'>
					<p className='text-xs'>Access exclusive tools & insights</p>
					<div className='flex py-2'>
						<ChartBarSquareIcon width={16} />
						<p className='text-xs font-bold'>Try Premium for A$0</p>
					</div>
				</div>
				<div className='flex border-b border-gray-100 gap-2 p-2 '>
					<BookmarkIcon width={16} />
					<p className='text-xs'>My Items</p>
				</div>
			</div>
			<div className='rounded-lg border border-gray-200 bg-white shadow-sm p-2 hidden md:block'>
				<p className='text-xs'>Recent</p>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'>React Developers- React JS</p>
				</div>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'>Javascript</p>
				</div>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'>AWS Certified Global Community</p>
				</div>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'>React Native</p>
				</div>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'> React Developers- React JS</p>
				</div>
				<p className='text-xs'>Groups</p>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'>React Developers- React JS</p>
				</div>
				<div className='flex gap-2 p-1'>
					<UserGroupIcon width={16} />
					<p className='text-xs'>Javascript</p>
				</div>
			</div>
		</div>
	);
}
