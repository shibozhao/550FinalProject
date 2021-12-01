import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CriteriaPage from './pages/CriteriaPage';
import BreedPage from './pages/BreedPage';
import HomeSearchPage from './pages/HomeSearchPage';
import ImagePage from './pages/ImagePage';
import RandomPage from './pages/RandomPage';
import 'antd/dist/antd.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact
							path="/"
							render={() => (
								<HomePage />
							)}/>
		<Route exact
							path="/home"
							render={() => (
								<HomeSearchPage />
							)}/>
		<Route exact
							path="/about"
							render={() => (
								<AboutPage />
							)}/>
        <Route exact
							path="/searchbycriteria"
							render={() => (
								<CriteriaPage />
							)}/>
		<Route exact
							path="/breed"
							render={() => (
								<BreedPage />
							)}/>
		<Route exact
							path="/image"
							render={() => (
								<ImagePage />
							)}/>
		<Route exact
							path="/random"
							render={() => (
								<RandomPage />
							)}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

