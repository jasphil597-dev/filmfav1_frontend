import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src='/src/assets/Film Favorite (1).png' alt='Logo' height='200' />
			</div>
			<div className='search-bar'>
				<input type='text' placeholder='Search...' />
			</div>
			<nav>
				<a href='#'>Movies</a>
				<a href='#'>My Movies</a>
				<a href='#'>Watch List</a>
				<a href='#'>Fav Movies</a>
				<a href='#'>Log Out</a>
			</nav>
		</header>
	);
};

export default Header;
