import React, { createContext, useState } from 'react';

export const CustomContext = createContext();
export const Context = (props) => {
	const [books, setBooks] = useState([
		{ id: 1, title: 'React' },
		{ id: 2, title: 'Angular' },
		{ id: 3, title: 'Vue' },
	]);

	const addBook = (book) => {
		setBooks([...books, book]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	const value = {
		books,
		addBook,
		removeBook,
	};

	return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>;
};
