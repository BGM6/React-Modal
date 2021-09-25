import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({getUserData}) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState(null);

	const enteredUsernameHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const enteredAgeHandler = event => {
		setEnteredAge(event.target.value);
	};

	const onSubmitFormHandler = event => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).'
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).'
			});
			return;
		}

		getUserData(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<React.Fragment>
			{error && <ErrorModal confirmError={errorHandler} title={error.title} message={error.message}/>}
			<Card className={styles.input}>
				<form onSubmit={onSubmitFormHandler}>
					<label htmlFor="username">Username</label>
					<input
						name="username"
						id="username"
						type="text"
						value={enteredUsername}
						onChange={enteredUsernameHandler}
					/>
					<label htmlFor="age">Age (Years old)</label>
					<input
						name="age"
						id="age"
						type="number"
						value={enteredAge}
						onChange={enteredAgeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
};

export default AddUser;