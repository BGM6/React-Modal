import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = ({users, handleRemove}) => {

	const renderUsers = (
		<ul>
			{
				users.map((user) => {
					return <span key={user.id}>
						<li >{user.username} ({user.age} years old)</li>
						<button onClick={() => handleRemove(user)}>Remove</button>
					</span>;
				})
			}
		</ul>
	);

	return (
		<Card className={styles.users}>
			{renderUsers}
		</Card>
	);
};

export default UsersList;