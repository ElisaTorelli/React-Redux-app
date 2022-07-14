import {Provider} from 'react-redux'
import store from './redux/cake/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MuffinContainer from './components/MuffinContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
// import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <ItemContainer cake/>
        <ItemContainer iceCream/>
        <HooksCakeContainer />
        <CakeContainer/>
        <IceCreamContainer/>
        <MuffinContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
