import React from 'react';
import Post from './Post';

const posts = [
	{
		id: 1,
		name: 'Adrian Li-Hung-Shun',
		title: 'Full Stack Developer',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'As a parent of a neurodivergent child, it is essential that my workplace fosters an environment that actively supports both parents of neurodivergent children and neurodivergent staff members. Recognise, Normalise & Embrace Neuroiversity',
	},
	{
		id: 2,
		name: 'Puja Shrestha',
		title: 'COO',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'this is a post message',
	},
	{
		id: 3,
		name: 'Puja Shrestha',
		title: 'COO',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'this is a post message',
	},
	{
		id: 4,
		name: 'Puja Shrestha',
		title: 'COO',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'this is a post message',
	},
	,
	{
		id: 5,
		name: 'Puja Shrestha',
		title: 'COO',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'this is a post message',
	},
	,
	{
		id: 6,
		name: 'Puja Shrestha',
		title: 'COO',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'this is a post message',
	},
	,
	{
		id: 7,
		name: 'Puja Shrestha',
		title: 'COO',
		profileImage: '',
		postedDate: '1 Jan 2023',
		postImage: '/linkedinpostimage.jpg',
		post: 'this is a post message',
	},
];

export default function PostsList() {
	return (
		<div>
			{posts.map((post) => (
				<Post key={post?.id} data={post} />
			))}
		</div>
	);
}
