
import './App.css';

// Components
import Register from './components/Register';
import Login from './components/Login';
import Activate from './components/Activate';
import Profile from './components/Profile';

// SPA
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/activate" component={Activate}/>
      <Route path="/profile" component={Profile}/>
      <Redirect from='/' to='/register' />
      </Switch>
    </div>
  );
}

export default App;
