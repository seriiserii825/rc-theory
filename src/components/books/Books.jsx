import React, { useContext } from 'react';
import { CustomContext } from './../../hooks/Context';
import { Book } from './Book';

export const Books = (props) => {
	const { books } = useContext(CustomContext);
	return (
		<div className='books'>
			<h2>Books</h2>
			{books.map((book) => (
				<Book key={book.id} {...book} />
			))}
		</div>
	);
};
