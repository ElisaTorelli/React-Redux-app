import {Provider} from 'react-redux'
import store from './redux/cake/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MuffinContainer from './components/MuffinContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCakeContainer />
        <CakeContainer/>
        <IceCreamContainer/>
        <MuffinContainer/>
      </div>
    </Provider>
  );
}

export default App;
