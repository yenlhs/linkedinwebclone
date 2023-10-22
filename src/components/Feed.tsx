import React from 'react';
import { UserCircleIcon, PhotoIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/20/solid';
import PostsList from './PostsList';

export default function Feed() {
	return (
		// <div className='md:w-[500px] w-[700px] max-w-[600px]'>
		<div className='w-full'>
			<div className='flex flex-col border border-gray-200 shadow-sm bg-white w-full min-w-[200px] rounded-lg justify-center'>
				<div className='flex p-2'>
					<UserCircleIcon width={45} />
					<input
						type='text'
						placeholder='Start a post'
						className='flex-1 px-4 outline-none items-center justify-center border border-gray-400 rounded-full'
					/>
				</div>
				<div className='flex justify-around p-2'>
					<div className='flex gap-2'>
						<PhotoIcon width={22} color='blue' />
						<p className='text-sm'>Media</p>
					</div>
					<div className='flex gap-2'>
						<CalendarIcon width={22} color='darkorange' />
						<p className='text-sm'>Event</p>
					</div>
					<div className='flex gap-2'>
						<DocumentTextIcon width={22} color='darkorange' />
						<p className='text-sm'>Write Article</p>
					</div>
				</div>
			</div>
			<div className=''>
				<PostsList />
			</div>
		</div>
	);
}
