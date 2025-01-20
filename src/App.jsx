import React, { useState, useEffect } from 'react';
import { verifyUser } from './services/users.js';
import BaseLayout from './components/BaseLayout/BaseLayout.jsx';
import Nav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home.jsx';
import SignUp from './pages/Register/Register.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignOut from './pages/SignOut/SignOut.jsx';
import MyReviews from './pages/MyReviews/MyReviews.jsx';
import MyWatchList from './pages/MyWatchList/MyWatchList.jsx';
import MyMovies from './pages/MyMovies/MyMovies.jsx';
import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import Reviews from './pages/Reviews/Reviews.jsx';
import ReviewDetails from './pages/ReviewDetails/ReviewDetails.jsx';
import EditReview from './pages/EditReview/EditReview.jsx';
import Comments from './pages/Comments/Comments.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const user = await verifyUser();
			user ? setUser(user) : setUser(null);
		};

		fetchUser();
	}, []);

	return (
		<>
			<Nav user={user} />
			<Routes>
				{/* Routes within BaseLayout */}
				<Route element={<BaseLayout />}>
					<Route path='/' element={<Home setUser={setUser} />} />
					<Route path='/movies' element={<Movies user={user} />} />
					<Route path='/movies/:movieId' element={<MovieDetails />} />
					<Route path='/movies/:movieId/reviews' element={<Reviews />} />
					<Route
						path='/movies/:movieId/reviews/:reviewId'
						element={<ReviewDetails />}
					/>
					<Route
						path='/movies/:movieId/reviews/:reviewId/edit'
						element={<EditReview />}
					/>
					<Route
						path='/movies/:movieId/reviews/:reviewId/comments'
						element={<Comments />}
					/>
					<Route
						path='/movies/:movieId/reviews/:reviewId/comments/:commentId'
						element={<Comments />}
					/>
				</Route>

				{/* Public */}
				<Route path='/register' element={<SignUp setUser={setUser} />} />
				<Route path='/sign-in' element={<SignIn setUser={setUser} />} />
				<Route path='/sign-out' element={<SignOut setUser={setUser} />} />
				<Route path='/user/myreviews' element={<MyReviews />} />
				<Route path='/user/mywatchlist' element={<MyWatchList />} />
				<Route path='/user/mywatchlist/:movieId' element={<MyWatchList />} />
				<Route path='/user/mymovies' element={<MyMovies />} />
				<Route path='/user/mymovies/:movieId' element={<MyMovies />} />
			</Routes>
		</>
	);
}

export default App;
