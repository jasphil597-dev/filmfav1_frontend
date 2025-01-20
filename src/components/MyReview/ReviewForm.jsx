import React, { useState } from 'react';
import './review.css';

const ReviewForm = ({ onSubmit, initialReview }) => {
	const [review, setReview] = useState(
		initialReview || { title: '', content: '' }
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setReview((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(review);
	};

	return (
		<form className='review-form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={review.title}
				onChange={handleChange}
				placeholder='Review Title'
				required
			/>
			<textarea
				name='content'
				value={review.content}
				onChange={handleChange}
				placeholder='Write your review...'
				required
			/>
			<button type='submit'>Submit Review</button>
		</form>
	);
};

export default ReviewForm;
