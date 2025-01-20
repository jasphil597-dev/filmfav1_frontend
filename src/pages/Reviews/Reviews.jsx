import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Review.css';

const Reviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await fetch(`/api/movies/${movieId}/reviews`);
				const data = await response.json();
				setReviews(data);
			} catch (error) {
				console.error('Error fetching reviews:', error);
			}
		};

		fetchReviews();
	}, [movieId]);

	return (
		<div>
			<h1>Reviews for Movie {movieId}</h1>
			{reviews.length > 0 ? (
				<ul>
					{reviews.map((review) => (
						<li key={review.id}>
							<h3>{review.title}</h3>
							<p>{review.content}</p>
							<small>By: {review.author}</small>
						</li>
					))}
				</ul>
			) : (
				<p>No reviews yet.</p>
			)}
		</div>
	);
};

export default Reviews;
