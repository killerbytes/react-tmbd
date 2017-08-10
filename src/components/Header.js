import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
              <ul className="sub-menu">
                  <li><Link to={`/movies/now_playing`}>Now Playing</Link></li>
                  <li><Link to={`/movies/popular`}>Popular</Link></li>
                  <li><Link to={`/movies/top_rated`}>Top Rated</Link></li>
                  <li><Link to={`/movies/upcoming`}>Upcoming</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/shows">TV</Link>
              <ul className="sub-menu">
                  <li><Link to={`/shows/airing_today`}>Airing Today</Link></li>
                  <li><Link to={`/shows/popular`}>Popular</Link></li>
                  <li><Link to={`/shows/top_rated`}>Top Rated</Link></li>
              </ul>
              
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
