
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SignUp from './Pages/SignUp';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/sign" component={SignUp} />

        <Route exact path='/teste'>
                <h2>Rota teste</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
