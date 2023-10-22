import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function Info() {
	return (
		<div className=' min-w-[250px] max-w-[300px] w-full'>
			<div className='rounded-lg border border-gray-200 bg-white shadow-sm  p-4'>
				<div className='flex justify-between'>
					<p className='text-md font-semibold'>LinkedIn News</p>
					<InformationCircleIcon width={16} />
				</div>
				<div>
					<ul>
						<li className='flex py-2'>
							<p>&#8226;&nbsp;</p>
							<div>
								<p className=' text-sm font-semibold'>Israel-Hamas war: Latest updates</p>
								<p className='text-xs text-gray-500'>Top news * 7,842 readers</p>
							</div>
						</li>

						<li className='flex py-2'>
							<p>&#8226;&nbsp;</p>
							<div>
								<p className=' text-sm font-semibold'>How stressed are you at work?</p>
								<p className='text-xs text-gray-500'>3 days ago</p>
							</div>
						</li>

						<li className='flex py-2'>
							<p>&#8226;&nbsp;</p>
							<div>
								<p className=' text-sm font-semibold'>An hour of sleep in 15 minutes?</p>
								<p className='text-xs text-gray-500'>2d ago * 212 readers</p>
							</div>
						</li>

						<li className='flex py-2'>
							<p>&#8226;&nbsp;</p>
							<div>
								<p className=' text-sm font-semibold'>Go on, work from the pub</p>
								<p className='text-xs text-gray-500'>3d ago * 1,211 readers</p>
							</div>
						</li>
						<li className='flex py-2'>
							<p>&#8226;&nbsp;</p>
							<div>
								<p className=' text-sm font-semibold'>Australia needs to turn to deep tech</p>
								<p className='text-xs text-gray-500'>2d ago * 316 readers</p>
							</div>
						</li>
					</ul>

					<div>
						<p className='text-sm text-gray-500'>Show More</p>
					</div>
				</div>
			</div>

			<div className='flex rounded-lg border border-gray-200 bg-white shadow-sm  p-4 mt-4 h-52 items-center justify-center'>
				<p>Ads</p>
			</div>
		</div>
	);
}
