import React from 'react'
import './App.scss'
import { Button } from './web'

function App() {
	return (
		<div className="app_container">
			<div>
				<label>Button</label>
				<Button
					id='button'
					size='lg'
				>버튼</Button>
			</div>
		</div>
	)
}

export default App
