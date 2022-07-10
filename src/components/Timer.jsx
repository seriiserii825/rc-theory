import React, { useState, useEffect, useRef } from 'react';

function setDefaultValue() {
	const userCount = localStorage.getItem('count');
	return userCount ? userCount : 0;
}

export default function Timer() {
	const [count, setCount] = useState(setDefaultValue());
	const [isCounting, setIsCounting] = useState(false);
	let counterId = useRef(null);

	const handleReset = () => {
		setCount(0);
		setIsCounting(false);
	};

	const handleStart = () => {
		setIsCounting(true);
	};

	const handleStop = () => {
		setIsCounting(false);
	};

	useEffect(() => {
		localStorage.setItem('count', count);
	}, [count]);

	useEffect(() => {
		if (isCounting) {
			counterId.current = setInterval(() => {
				setCount((count) => +count + 1);
			}, 1000);
		}
		return () => {
			clearInterval(counterId.current);
			counterId.current = null;
		};
	}, [isCounting]);

	return (
		<div className='App'>
			<h1>React Timer</h1>
			<h3>{count}</h3>
			{!isCounting ? (
				<button onClick={handleStart}>Start</button>
			) : (
				<button onClick={handleStop}>Stop</button>
			)}
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}
