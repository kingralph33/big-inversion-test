type PersonCardProps = {
	firstName: string;
	lastName: string;
	age: number;
	hairColor: string;
};
export function PersonCard(props: PersonCardProps) {
	return (
		<div className='container mx-auto mt-6 px-96 space-y-4'>
			<h1 className='text-6xl font-bold'>
				{props.lastName}, {props.firstName}
			</h1>
			<h2>Age: {props.age}</h2>
			<h2>Hair: {props.hairColor}</h2>
		</div>
	);
}
