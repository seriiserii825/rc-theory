import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
	const [counterIsVisible, setCounterIsVisible] = useState(false);
	const toggleCounter = () => setCounterIsVisible(!counterIsVisible);
	return (
		<div className='App'>
			<button onClick={toggleCounter}>Toggle Counter</button>
      <hr />
			{counterIsVisible && <Counter />}
		</div>
	);
}

export default App;
