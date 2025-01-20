import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { verifyUser } from './services/users.js';
import BaseLayout from './components/BaseLayout/BaseLayout.jsx';
import Nav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home.jsx';
import SignUp from './pages/Register/Register.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignOut from './pages/SignOut/SignOut.jsx';
import { ReviewCard, ReviewForm } from './components/MyReview/index.jsx';

import MyWatchList from './components/MyWatchList/MyWatchList.jsx';
import MyMovies from './components/MyMovies/MyMovies.jsx';
import Movies from './components/Movies/Movies.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails.jsx';
import MyReview from './components/MyReview';
import Review from './pages/Reviews/Reviews.jsx';
import ReviewDetails from './pages/ReviewDetails/ReviewDetailsPage.jsx';

import EditReview from './pages/EditReview/EditReview.jsx';
import CommentBox from './components/CommentBox/Comments.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './components/MyReview/Review.css';
import './components/MyReview/Review.css';

import './App.css';

{
	/* <Route path='/movies' element={<MoviesBox />} />; */
}

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

					{/* Show all reviews for a movie */}
					<Route path='/movies/:movieId/reviews' element={<Review />} />

					{/* Show the current user's review for a movie */}
					<Route path='/movies/:movieId/reviews' element={<MyReview />} />
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
						element={<CommentBox />}
					/>
					<Route
						path='/movies/:movieId/reviews/:reviewId/comments/:commentId'
						element={<CommentBox />}
					/>
				</Route>

				{/* Public */}
				<Route path='/register' element={<SignUp setUser={setUser} />} />
				<Route path='/sign-in' element={<SignIn setUser={setUser} />} />
				<Route path='/sign-out' element={<SignOut setUser={setUser} />} />
				<Route path='/user/myreviews' element={<MyReview />} />
				<Route path='/user/mywatchlist' element={<MyWatchList />} />
				<Route path='/user/mywatchlist/:movieId' element={<MyWatchList />} />
				<Route path='/user/mymovies' element={<MyMovies />} />
				<Route path='/user/mymovies/:movieId' element={<MyMovies />} />
			</Routes>
		</>
	);
}

export default App;
