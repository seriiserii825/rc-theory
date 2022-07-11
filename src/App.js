import React from 'react';
import './App.css';
import { Context } from './hooks/Context';
import { Books } from './components/books/Books';

function App() {
	return (
		<div className='App'>
			<Context>
				<Books />
			</Context>
		</div>
	);
}

export default App;
