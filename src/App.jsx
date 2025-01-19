import { useState, useEffect } from 'react';
import { verifyUser } from './services/users.js';
import Nav from './components/Nav';
import Home from './pages/Home';
import SignUp from './pages/SignUp.jsx';
import SignOut from './pages/SignOut.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export const AuthedUserContext = createContext(null);

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
				{/* User Routes */}
				<Route path='/user/sign-up' element={<SignUp setUser={setUser} />} />
				<Route path='/user/sign-in' element={<SignIn setUser={setUser} />} />
				<Route path='/user/sign-out' element={<SignOut setUser={setUser} />} />
				<Route path='/user/myreviews' element={<MyReviews />} />
				<Route path='/user/mywatchlist' element={<MyWatchList />} />
				<Route path='/user/mywatchlist/:movieId' element={<MyWatchList />} />
				<Route path='/user/mymovies' element={<MyMovies />} />
				<Route path='/user/mymovies/:movieId' element={<MyMovies />} />
				{/* Movies */}
				<Route path='/movies' element={<Movies />} />
				<Route path='/movies/:movieId' element={<MovieDetails />} />
				{/* MyReviews */}
				<Route path='/movies/:movieId/reviews' element={<Reviews />} />
				<Route
					path='/movies/:movieId/reviews/:reviewId'
					element={<ReviewDetail />}
				/>
				<Route
					path='/movies/:movieId/reviews/:reviewId/edit'
					element={<EditReview />}
				/>
				{/* Comments */}
				<Route
					path='/movies/:movieId/reviews/:reviewId/comments'
					element={<Comments />}
				/>
				<Route
					path='/movies/:movieId/reviews/:reviewId/comments/:commentId'
					element={<Comments />}
				/>
			</Routes>
		</>
	);
}
export default App;
