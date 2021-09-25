import React, {useState, useEffect} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const handleRemove = (userToDelete) => {
		setUsers(users.filter(user => userToDelete !== user));
	};


	useEffect(() => {
		const users = JSON.parse(localStorage.getItem('users'));
		if (users) {
			setUsers(users);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users]);

	const getUserData = (uName, uAge) => {
		setUsers((prevState) => {
			return [...prevState, {
				username: uName,
				age: uAge,
				id: Math.random().toString()
			}];
		});
	};

	return (
		<div>
			<AddUser getUserData={getUserData}/>
			<UsersList
				users={users}
				handleRemove={handleRemove}
			/>
		</div>
	);
}

export default App;
