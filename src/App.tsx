import React, { useEffect } from 'react';
import './styles/main.css';
import './styles/card.scss';

import { Switch, Route, withRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import TV from 'pages/TV';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import MovieDetail from 'pages/MovieDetail';
import TVDetail from 'pages/TVDetail';
import { checkExpiredToken } from 'store/actions/auth';
import { getProfile } from 'store/actions/user';
import { connect } from 'react-redux';

function App(props: any) {
  useEffect(() => {
    props.getProfile().finally(() => {
      // setLoading(false);
    });
    props.checkExpiredToken(props.history);
  }, [props]);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie" component={Movie} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/movie/popular" component={Movie} />
      <Route exact path="/movie/trending" component={Movie} />
      <Route exact path="/movie/top_rated" component={Movie} />
      <Route exact path="/movie/:id" component={MovieDetail} />
      <Route exact path="/tv/:id" component={TVDetail} />
    </Switch>
  );
}

export default connect(null, { checkExpiredToken, getProfile })(
  withRouter(App)
);
