import React, { useState } from 'react';
import { ReviewCard, ReviewForm } from '../../components/MyReview';
import '../../components/MyReview/Review.css';

const ReviewDetailsPage = () => {
	return (
		<div>
			<ReviewCard />
			<ReviewForm />
		</div>
	);
};

export default ReviewDetailsPage;
