import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<h1>Welcome to FilmFav</h1>
			<nav>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
