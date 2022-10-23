import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from './data/db';
import FeedbackList from './components/FeedbackList';


export default function App() {

	const [ feedback, setFeedback ] = useState( FeedbackData );

	return (
		<>
			<Header />
			<div
				className="container">
				<FeedbackList feedback={ feedback } />
			</div>
		</>
	);
}

