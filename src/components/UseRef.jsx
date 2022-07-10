import React, { useRef, useEffect } from 'react';

function UseRef() {
	const inputRef = useRef();
	console.log(inputRef, 'inputRef');

	useEffect(() => {
		console.log(inputRef.current.value);
	}, []);

	return (
		<div>
			<input type='text' ref={inputRef} />
		</div>
	);
}

export { UseRef };
