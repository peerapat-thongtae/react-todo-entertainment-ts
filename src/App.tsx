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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MoviePopular from 'pages/MoviePopular';
import MovieUpcoming from 'pages/MovieUpcoming';
import MovieTopRated from 'pages/MovieTopRated';
import TodoMovie from 'pages/TodoMovie';
import MovieDiscover from 'pages/MovieDiscover';
import TVTopRated from 'pages/TVTopRated';
import TVPopular from 'pages/TVPopular';
import TodoTV from 'pages/TodoTV';
import Person from 'pages/Person';
import PersonDetail from 'pages/PersonDetail';
import CastTab from 'components/CastTab';
import MovieKeyword from 'pages/MovieKeyword';

function App(props: any) {
  useEffect(() => {
    props.getProfile().finally(() => {
      // setLoading(false);
    });
    props.checkExpiredToken(props.history);
  }, [props]);
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/movie/popular" component={MoviePopular} />
        <Route exact path="/movie/upcoming" component={MovieUpcoming} />
        <Route exact path="/movie/top_rated" component={MovieTopRated} />
        <Route exact path="/tv/popular" component={TVPopular} />
        <Route exact path="/tv/top_rated" component={TVTopRated} />
        <Route exact path="/movie/discover" component={MovieDiscover} />
        <Route exact path="/movie/:id" component={MovieDetail} />
        <Route exact path="/tv/:id" component={TVDetail} />
        <Route exact path="/todo/movie/:status" component={TodoMovie} />
        <Route exact path="/todo/tv/:status" component={TodoTV} />
        <Route exact path="/test" component={CastTab} />
        <Route exact path="/person" component={Person} />
        <Route exact path="/person/:id" component={PersonDetail} />
        <Route exact path="/person/:id" component={PersonDetail} />
        <Route exact path="/keyword/:id" component={MovieKeyword} />
      </Switch>
    </>
  );
}

export default connect(null, { checkExpiredToken, getProfile })(
  withRouter(App)
);
