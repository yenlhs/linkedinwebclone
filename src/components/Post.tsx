import React from 'react';

export default function Post({ data }) {
	return <div className='border border-gray-300 w-full min-w-[600px] rounded-lg my-4 py-2'>{data.name}</div>;
}
