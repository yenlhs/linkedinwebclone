import React from 'react';
import { UserCircleIcon, PhotoIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Feed() {
	return (
		<div className='m-2'>
			<div className='border border-gray-300 rounded-lg'>
				<div className='flex p-2'>
					<UserCircleIcon width={35} />
					<input type='text' placeholder='Start a post' />
				</div>
				<div className='flex justify-around p-2'>
					<PhotoIcon width={35} />
					<CalendarIcon width={35} />
					<DocumentTextIcon width={35} />
				</div>
			</div>
		</div>
	);
}
