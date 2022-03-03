import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
    </Switch>
  );
}

export default App;
