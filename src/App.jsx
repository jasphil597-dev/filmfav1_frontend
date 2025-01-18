import { useState, useEffect } from 'react';
import { verifyUser } from './services/users.js';
import Nav from './components/Nav';
import Home from './pages/Home';
import SignUp from './pages/SignUp.jsx';
import SignOut from './pages/SignOut.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export const AuthedUserContext = createContext(null);

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const user = await verifyUser();
			user ? setUser(user) : setUser(null);
		};

		fetchUser();
	}, []);

	return (
		<>
			<Nav user={user} />
			<Routes>
				<Route path='/' element={<Home setUser={setUser} />} />
				<Route path='/signUp' element={<SignUp setUser={setUser} />} />
				<Route path='/sign-out' element={<SignOut setUser={setUser} />} />
			</Routes>
		</>
	);
}
export default App;
