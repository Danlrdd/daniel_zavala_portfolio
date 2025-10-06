import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';

function App() {
	return (
		<main className="font-courier-prime min-h-screen bg-sky-900">
			<div className="relative mx-auto grid max-w-7xl lg:grid-cols-2">
				<Header />
				<Aside className="lg:col-start-2" />
			</div>
		</main>
	);
}

export default App;
