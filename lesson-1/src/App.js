import { Router } from './components/Router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const App = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Router />
		</PersistGate>
	</Provider>
)

export default App;
