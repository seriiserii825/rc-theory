import React, { useContext } from 'react';
import { CustomContext } from '../../hooks/Context';

export const Book = (props) => {
	const { removeBook } = useContext(CustomContext);
	const { id, title } = props;
	return (
		<div className='book'>
			<h3 onClick={() => removeBook(id)}>{title}</h3>
		</div>
	);
};
