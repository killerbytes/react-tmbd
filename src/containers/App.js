import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import EntityListContainer from './EntityListContainer'
import EntityContainer from './EntityContainer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Home = ()=> {
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  )

}

const Main = ()=>(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movies/:category' component={EntityListContainer}/>
      <Redirect from="/movies/" to="/movies/now_playing"/>
      <Route path='/shows/:category' component={EntityListContainer}/>
      <Redirect from="/shows/" to="/shows/airing_today"/>
      <Route path='/people/:category' component={EntityListContainer}/>
      <Redirect from="/people/" to="/people/popular"/>
      <Route path='/genre/:id/:category' component={EntityListContainer}/>
      <Route path='/:entity/:id' component={EntityContainer}/>
    </Switch>
)


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar {...this.props}/>
        </div>
        <Main />
      </div>
    )
  }
}

export default withRouter(connect((state)=>{ 
  return {
  ...state,
  entities: state.entities,
}})(App))

// export default App