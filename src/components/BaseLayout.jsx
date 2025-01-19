import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from '../components/Footer.jsx';

function BaseLayout() {
	return (
		<>
			<div className='main-layout'>
				<Nav />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default BaseLayout;
