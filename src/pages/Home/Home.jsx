import BaseLayout from '../../components/BaseLayout/BaseLayout';

const Home = () => {
	return (
		<BaseLayout>
			<h1>Welcome to the Home Page</h1>
			<p>This is the content of the Home Page.</p>
		</BaseLayout>
	);
};

export default Home;

// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { signIn } from '../SignIn/SignIn.jsx';
// // import splash from '../assets/creative.png';

// function Home({ setUser }) {
// 	const navigate = useNavigate();

// 	const [form, setForm] = useState({
// 		username: '',
// 		password: '',
// 		isError: false,
// 		errorMsg: '',
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;

// 		setForm((prevForm) => ({
// 			...prevForm,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();

// 		try {
// 			const userData = await signIn(form);
// 			setUser(userData);

// 			navigate('/movies');
// 		} catch (error) {
// 			console.error(error);
// 			setForm((prevForm) => ({
// 				isError: true,
// 				errorMsg: 'Invalid Credentials',
// 				username: prevForm.username,
// 				password: '',
// 			}));
// 		}
// 	};

// 	const renderError = () => {
// 		const toggleForm = form.isError ? 'danger' : '';

// 		if (form.isError) {
// 			return (
// 				<button type='submit' className={toggleForm}>
// 					{form.errorMsg}
// 				</button>
// 			);
// 		} else {
// 			return <button type='submit'>Log In</button>;
// 		}
// 	};

// 	return (
// 		<div className='home-container'>
// 			{/* <div>
// 				<img src='https://via.placeholder.com/300' alt='Creative' />
// 			</div> */}

// 			<div>
// 				<form className='home-form' onSubmit={handleSubmit}>
// 					<h1>Login</h1>
// 					<input
// 						type='text'
// 						name='username'
// 						value={form.username}
// 						placeholder='Enter Username'
// 						onChange={handleChange}
// 						required
// 						autoComplete='off'
// 					/>
// 					<input
// 						type='password'
// 						name='password'
// 						value={form.password}
// 						placeholder='Enter Password'
// 						onChange={handleChange}
// 						required
// 						autoComplete='off'
// 					/>

// 					{renderError()}

// 					<Link to='/register'>
// 						<p>No account? Sign up here!</p>
// 					</Link>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Home;
