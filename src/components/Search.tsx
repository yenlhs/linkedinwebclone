import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
	return (
		<div className='w-96'>
			<div className='flex-row flex bg-blue-50 rounded-md w-52 transition ease-in-out hover:w-96 hover:border hover:border-blue-500'>
				<MagnifyingGlassIcon width={18} />
				<input type='text' placeholder='Search' className='border-none outline-none bg-transparent p-1 transition ease-in-out hover:w-96' />
			</div>
		</div>
	);
}

export default Search;
