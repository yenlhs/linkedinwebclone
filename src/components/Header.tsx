import Image from 'next/image';
import React from 'react';
import Search from './Search';
import NavBar from './NavBar';

export default function Header() {
	return (
		<div className='flex flex-row max-w-screen-xl m-auto gap-4 items-center px-10'>
			<Image src='/linkedin_logo_icon.png' width={35} height={35} alt='LinkedIn' className='border-red-400' />
			<Search />
			<NavBar />
		</div>
	);
}
