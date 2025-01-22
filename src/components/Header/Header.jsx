import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav.jsx';

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<img src='/src/assets/Film Favorite (2).png' alt='Logo' height='130' />
			</div>
			<div className='search-bar'>
				<input type='text' placeholder='Search...' />
			</div>
			<Nav />
		</header>
	);
};

export default Header;
