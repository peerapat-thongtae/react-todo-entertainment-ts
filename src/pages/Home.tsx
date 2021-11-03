import React from 'react';
import { connect } from 'react-redux';
import { setLoadingPage } from 'store/actions/loader';

import { Redirect } from 'react-router-dom';
import UserHome from './UserHome';

const Home = (props: any) => {
  if (props.user.isAuthenticated) {
    return <UserHome />;
  }
  return <Redirect to="/movie" />;
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setLoadingPage })(Home);
