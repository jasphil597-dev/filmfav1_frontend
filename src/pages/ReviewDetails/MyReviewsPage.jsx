import React from 'react';
import { ReviewCard, ReviewForm } from '../../components/MyReview';

const MyReviewsPage = () => {
	const review = { title: 'Amazing Movie!', content: 'I really enjoyed it.' };

	const handleFormSubmit = (updatedReview) => {
		console.log('Updated Review:', updatedReview);
	};

	return (
		<div>
			<h1>My Reviews</h1>
			<ReviewCard review={review} />
			<h3>Edit Review:</h3>
			<ReviewForm initialReview={review} onSubmit={handleFormSubmit} />
		</div>
	);
};

export default MyReviewsPage;
