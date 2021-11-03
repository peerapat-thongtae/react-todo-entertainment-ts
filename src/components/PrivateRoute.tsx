import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      user.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
