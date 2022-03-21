import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Characters from './views/Characters/Characters';
import Welcome from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path={'/characters'}>
              <Characters />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
