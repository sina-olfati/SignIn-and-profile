
import './App.css';

// Components
import Register from './components/Register';

// SPA
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/register" component={Register}/>
      <Redirect from='/' to='/register' />
      </Switch>
    </div>
  );
}

export default App;
