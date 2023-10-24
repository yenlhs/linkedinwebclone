import React from 'react';
import {
	HomeIcon,
	UserGroupIcon,
	BriefcaseIcon,
	ChatBubbleLeftEllipsisIcon,
	BellIcon,
	UserCircleIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid';

export default function NavBar() {
	return (
		<div className='flex flex-row gap-4'>
			<div className='flex flex-col justify-center items-center px-2 group'>
				<HomeIcon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>Home</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2 group'>
				<UserGroupIcon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>My Network</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2 group'>
				<BriefcaseIcon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>Jobs</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2 group'>
				<ChatBubbleLeftEllipsisIcon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>Messaging</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2 group relative'>
				<BellIcon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>Notifications</p>
				<div className='absolute -top-1 right-5 bg-red-600 rounded-full px-[7px] py-[2px]'>
					<p className=' text-white text-[11px] font-semibold'>2</p>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center px-2 border-r border-black-200 group'>
				<UserCircleIcon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>Me</p>
			</div>
			<div className='flex flex-col justify-center items-center px-2 group'>
				<Squares2X2Icon width={25} color='gray' className='group-hover:fill-black' />
				<p className='text-xs text-gray-400 group-hover:text-black'>For Business</p>
			</div>
		</div>
	);
}
