import './BaseLayout.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const BaseLayout = ({ children }) => {
	return (
		<div className='base-layout'>
			<Header />
			<main className='main-content'>{children}</main>
			<Footer />
		</div>
	);
};

export default BaseLayout;

// =====================

// import './BaseLayout.css';

// const BaseLayout = ({ children }) => {
// 	return (
// 		<div className='base-layout'>
// 			{/* Add a header or footer here if needed */}
// 			{children}
// 		</div>
// 	);
// };

// export default BaseLayout;

// ==================

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Nav from './Nav.jsx';
// import Footer from '../Footer/Footer.jsx';

// function BaseLayout() {
// 	return (
// 		<>
// 			<div className='main-layout'>
// 				<Nav />
// 				<main>
// 					<Outlet />
// 				</main>
// 				<Footer />
// 			</div>
// 		</>
// 	);
// }

// export default BaseLayout;
