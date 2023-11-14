import { PersonCard } from './components/PersonCard';

function App() {
	return (
		<div>
			<PersonCard
				firstName='John'
				lastName='Smith'
				age={8}
				hairColor='Brown'
			/>
			<PersonCard
				firstName='Sampson'
				lastName='Smith'
				age={10}
				hairColor='black'
			/>
			<PersonCard
				firstName='Patricia'
				lastName='Smith'
				age={3}
				hairColor='blonde'
			/>
			<PersonCard
				firstName='Francine'
				lastName='Smith'
				age={15}
				hairColor='brown'
			/>
		</div>
	);
}

export default App;
