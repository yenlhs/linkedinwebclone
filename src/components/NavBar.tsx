import React from 'react';
import {
	HomeIcon,
	UserGroupIcon,
	BriefcaseIcon,
	ChatBubbleLeftEllipsisIcon,
	BellIcon,
	UserCircleIcon,
	Squares2X2Icon,
} from '@heroicons/react/24/outline';

export default function NavBar() {
	return (
		<div className='flex flex-row gap-4'>
			<div className='flex flex-col justify-center items-center px-2'>
				<HomeIcon width={25} color='gray' />
				<p className='text-xs text-gray-400'>Home</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2'>
				<UserGroupIcon width={25} color='gray' />
				<p className='text-xs text-gray-400'>My Network</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2'>
				<BriefcaseIcon width={25} color='gray' />
				<p className='text-xs text-gray-400'>Jobs</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2'>
				<ChatBubbleLeftEllipsisIcon width={25} color='gray' />
				<p className='text-xs text-gray-400'>Messaging</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2'>
				<BellIcon width={25} color='gray' />
				<p className='text-xs text-gray-400'>Notifications</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2 border-r border-black-200'>
				<UserCircleIcon width={25} color='gray' />
				<p className='text-xs text-gray-400'>Me</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2'>
				<Squares2X2Icon width={25} color='gray' />
				<p className='text-xs text-gray-400'>For Business</p>
			</div>
		</div>
	);
}
