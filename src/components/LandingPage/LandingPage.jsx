import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
	const [movies, setMovies] = useState([]);

	// Mock movie data
	useEffect(() => {
		const mockMovies = [
			{
				id: 1,
				title: 'Inception',
				description: 'A mind-bending thriller about dream manipulation.',
				rating: 4.8,
				poster: 'https://via.placeholder.com/300x400',
			},
			{
				id: 2,
				title: 'Interstellar',
				description: 'An epic journey beyond our galaxy to save humanity.',
				rating: 4.6,
				poster: 'https://via.placeholder.com/300x400',
			},
			{
				id: 3,
				title: 'The Dark Knight',
				description: 'A battle for Gotham between Batman and the Joker.',
				rating: 4.9,
				poster: 'https://via.placeholder.com/300x400',
			},
			{
				id: 4,
				title: 'Tenet',
				description: 'A time-inversion thriller from Christopher Nolan.',
				rating: 4.3,
				poster: 'https://via.placeholder.com/300x400',
			},
		];
		setMovies(mockMovies);
	}, []);

	const scroll = (distance) => {
		document.querySelector('.movie-scroll').scrollBy({
			left: distance,
			behavior: 'smooth',
		});
	};

	return (
		<div className='main-content'>
			<h1>Movies</h1>
			<div className='scroll-container'>
				<button className='scroll-button left' onClick={() => scroll(-300)}>
					◀
				</button>
				<div className='movie-scroll'>
					{movies.map((movie) => (
						<div key={movie.id} className='movie-box'>
							<img
								src={movie.poster}
								alt={movie.title}
								className='movie-poster'
							/>
							<h3 className='movie-title'>{movie.title}</h3>
							<p className='movie-description'>{movie.description}</p>
							{/* <p className='movie-rating'>⭐ {movie.rating}</p> */}
						</div>
					))}
				</div>
				<button className='scroll-button right' onClick={() => scroll(300)}>
					▶
				</button>
			</div>
		</div>
	);
};

export default LandingPage;

// =============

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LandingPage = () => {
// 	const [movies, setMovies] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchMovies = async () => {
// 			try {
// 				const response = await axios.get('/api/movies');
// 				setMovies(response.data);
// 			} catch (error) {
// 				setError('Failed to fetch movies');
// 				console.error('error');
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchMovies();
// 	}, []);

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>{error}</p>;

// import React, { useState, useEffect } from 'react';
// import './LandingPage.css';

// const LandingPage = () => {
// 	const mockMovies = [
// 		{ id: 1, title: 'Inception', year: 2010, rating: 4.8 },
// 		{ id: 2, title: 'Interstellar', year: 2014, rating: 4.6 },
// 	];

// 	const [movies, setMovies] = useState([]);

// 	useEffect(() => {
// 		// Simulate data fetching
// 		setTimeout(() => {
// 			setMovies(mockMovies);
// 		}, 1000);
// 	}, []);

// 	if (!movies.length) return <p>Loading...</p>;

// 	return (
// 		<div className='main-content'>
// 			<h1 className='landing-header'>Movies</h1>
// 			<ul className='featured-movies'>
// 				{movies.map((movie) => (
// 					<li key={movie.id} className='movie-card'>
// 						{movie.title} ({movie.year}) - Rating: {movie.rating}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default LandingPage;
