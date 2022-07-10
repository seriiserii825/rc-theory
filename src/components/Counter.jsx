import React, { useEffect, useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	useEffect(() => {
		console.log('mounted ====================');
		return () => {
			console.log('unmounted');
		};
	}, []);

	return (
		<>
			<button onClick={decrement}>-</button>
			<span>{count}</span>
			<button onClick={increment}>+</button>
		</>
	);
}

export { Counter };
