import './App.css'
import { Route, Router, Switch } from 'react-router-dom'
import { history } from './store/history'
import Main from './components/pages/Main'

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Router>
    </div>
  )
}

export default App