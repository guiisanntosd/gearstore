import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

import GlobalStyle from './styles/global'

const Routes: React.FC = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default Routes