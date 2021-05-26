import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedPage from './components/pages/ProtectedPage';
import NotProtectedPage from './components/pages/NotProtectedPages';
import UnauthorizedPage from './components/pages/UnauthorizedPage';
import ProtectedRoute from './components/pages/ProtectedRoute';

import NavBar from './components/NavBar/NavBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <ProtectedRoute path="/protected" component={ProtectedPage} />
          <Route path="/unauthorized">
            <UnauthorizedPage />
          </Route>
          <Route path="/">
            <NotProtectedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
