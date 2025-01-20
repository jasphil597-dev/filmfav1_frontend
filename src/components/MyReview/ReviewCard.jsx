import React from 'react';
import './review.css';

const ReviewCard = ({ review }) => {
	return (
		<div className='review-card'>
			<h3>{review.title}</h3>
			<p>{review.content}</p>
		</div>
	);
};

export default ReviewCard;
