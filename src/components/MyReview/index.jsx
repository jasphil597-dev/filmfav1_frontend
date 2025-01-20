import React from 'react';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import './Review.css';

// const MyReview = () => {
// 	return (
// 		<>
// 			<div style={{ padding: '20px', border: '1px solid black' }}>
// 				<h1>My Review Component</h1>
// 				<p>This is a test to confirm the component renders properly.</p>
// 			</div>

// 			<div>
// 				<h1>My Reviews</h1>
// 				<ReviewCard />
// 				<ReviewForm />
// 			</div>
// 		</>
// 	);
// };

const MyReview = () => {
	const mockReviews = [
		{ id: 1, content: 'Great movie!', author: 'User1' },
		{ id: 2, content: 'Not bad, could be better.', author: 'User2' },
	];

	return (
		<div style={{ padding: '20px', border: '1px solid black' }}>
			<h1>My Review Component</h1>
			{mockReviews.length > 0 ? (
				<ul>
					{mockReviews.map((review) => (
						<li key={review.id}>
							<p>{review.content}</p>
							<small>By: {review.author}</small>
						</li>
					))}
				</ul>
			) : (
				<p>No reviews available.</p>
			)}
		</div>
	);
};

export default MyReview;
export { ReviewCard, ReviewForm };
