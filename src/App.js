import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
// import { Counter } from './components/Counter';
// import { UseRef } from './components/UseRef';

function App() {
	// const [counterIsVisible, setCounterIsVisible] = useState(false);
	// const toggleCounter = () => setCounterIsVisible(!counterIsVisible);
	const [toggleTimer, setToggleTimer] = useState(false);
	return (
		<div className='App'>
			{/* <button onClick={toggleCounter}>Toggle Counter</button>
			<hr />
			{counterIsVisible && <Counter />}
			<hr />
			<h3>User Ref</h3>
			<UseRef /> */}
			<button onClick={() => setToggleTimer(!toggleTimer)}>
				Toggle timer
			</button>
			<hr />
			{toggleTimer && <Timer />}
		</div>
	);
}

export default App;
