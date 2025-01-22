import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ user }) {
	const authenticatedOptions = (
		<>
			<NavLink className='nav-link' to='/movies'>
				Movies
			</NavLink>
			<NavLink className='nav-link' to='/user/myreviews'>
				My Reviews
			</NavLink>
			<NavLink className='nav-link' to='/user/mywatchlist'>
				My Watchlist
			</NavLink>
			<NavLink className='nav-link' to='/user/mymovies'>
				My Movies
			</NavLink>
			<NavLink className='nav-link' to='/sign-out'>
				Log Out
			</NavLink>
		</>
	);

	const unauthenticatedOptions = (
		<>
			<NavLink className='nav-link' to='/user/sign-in'>
				{/* Log-In */}
			</NavLink>
			<NavLink className='nav-link' to='/user/sign-up'>
				{/* SignUp */}
			</NavLink>
		</>
	);

	return (
		<nav>
			{/* <img src={headerLogo} alt='FilmFav Logo' /> */}
			{user && <div className='link welcome'>Welcome, {user.username}</div>}
			<div className='nav-links'>
				{user ? authenticatedOptions : unauthenticatedOptions}
			</div>
		</nav>
	);
}

export default Nav;

// ==========

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// function Nav({ user }) {
// 	const authenticatedOptions = (
// 		<>
// 			<NavLink className='nav-link' to='/'>
// 				Home
// 			</NavLink>
// 			<NavLink className='nav-link' to='/movies'>
// 				Movies
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/watchlist'>
// 				Watchlist
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/mymovies'>
// 				My Movies
// 			</NavLink>
// 			<NavLink className='nav-link' to='/sign-out'>
// 				Log Out
// 			</NavLink>
// 		</>
// 	);

// 	const unauthenticatedOptions = (
// 		<>
// 			<NavLink className='nav-link' to='/user/sign-in'>
// 				{/* Log-In */}
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/sign-up'>
// 				{/* SignUp */}
// 			</NavLink>
// 		</>
// 	);

// 	return (
// 		<nav>
// 			{/* <img src={headerLogo} alt='FilmFav Logo' /> */}
// 			{user && <div className='link welcome'>Welcome, {user.username}</div>}
// 			<div className='nav-links'>
// 				{user ? authenticatedOptions : unauthenticatedOptions}
// 			</div>
// 		</nav>
// 	);
// }

// export default NavBar;
