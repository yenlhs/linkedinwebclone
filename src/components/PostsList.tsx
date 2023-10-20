import React from 'react';
import Post from './Post';

const posts = [];

export default function PostsList() {
	return (
		<div>
			{posts.map((post) => (
				<Post data={post} />
			))}
		</div>
	);
}
