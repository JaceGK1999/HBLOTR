import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';
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
            <Route path={'/books'}>
              <Books />
            </Route>
            <Route path={'/films'}>
              <Films />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
