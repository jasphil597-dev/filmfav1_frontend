import React from 'react';

function Movies({ user }) {
	if (!user) {
		return <p>You must be signed in to view this page.</p>;
	}

	return (
		<div>
			<h1>Welcome, {user.username}!</h1>
			<p>This is your movies dashboard.</p>
		</div>
	);
}

export default Movies;
