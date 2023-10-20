import React from 'react';
import {
	HandThumbUpIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ArrowPathIcon,
	PaperAirplaneIcon,
	UserCircleIcon,
	EllipsisHorizontalIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Post({ data }) {
	return (
		<div className='flex flex-col border border-gray-300 w-full min-w-[600px] rounded-lg my-4 gap-2'>
			{/* post header */}
			<div className='flex w-full p-2'>
				<UserCircleIcon width={50} />
				<div className='flex-1'>
					<p className='text-sm font-bold'>{data.name}</p>
					<p className='text-xs'>{data.title}</p>
					<p className='text-xs'>3w</p>
				</div>
				<div className='flex items-start'>
					<EllipsisHorizontalIcon width={28} />
					<XMarkIcon width={22} />
				</div>
			</div>

			{/* post content */}
			<div className=''>
				<p className='p-2 text-md'>{data.post}</p>
				{/* post hashtags */}
				<p className='p-2 text-md'>#tags #tags #tags #tags</p>

				<div className='relative w-full h-80'>
					<Image src={data.postImage} fill alt='post image' className='w-full object-cover' />
				</div>
			</div>

			{/* post footer */}
			<div className='flex flex-row justify-evenly p-2'>
				<div className='flex items-center justify-center'>
					<HandThumbUpIcon width={26} />
					<p>Like</p>
				</div>
				<div className='flex items-center justify-center'>
					<ChatBubbleOvalLeftEllipsisIcon width={26} />
					<p>Comment</p>
				</div>
				<div className='flex items-center justify-center'>
					<ArrowPathIcon width={26} />
					<p>Repost</p>
				</div>
				<div className='flex items-center justify-center'>
					<PaperAirplaneIcon width={26} />
					<p>Send</p>
				</div>
			</div>
		</div>
	);
}
