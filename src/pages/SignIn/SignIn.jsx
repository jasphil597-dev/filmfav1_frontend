import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

export const signIn = async (credentials) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (
				credentials.username === 'admin' &&
				credentials.password === 'password'
			) {
				resolve({ username: 'admin', token: '123456' });
			} else {
				reject(new Error('Invalid username or password'));
			}
		}, 1000);
	});
};

function SignIn({ setUser }) {
	const navigate = useNavigate();
	const [form, setForm] = useState({ username: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userData = await signIn(form);
			setUser(userData);
			navigate('/movies');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input
						type='text'
						name='username'
						value={form.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						name='password'
						value={form.password}
						onChange={handleChange}
						required
					/>
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type='submit'>Log In</button>
			</form>
		</div>
	);
}

export default SignIn;
