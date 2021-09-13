import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
import LoadingPage from './LoadingPage';

const Layout = ({ children, loader, user }: any) => {
  console.log(user);
  return (
    <>
      <LoadingPage show={loader.isLoading} />
      {/* <main className="container py-16 pt-48 mx-auto md:pt-32 sm:px-4">
        {children}
      </main> */}
      <main className="md:pt-32 sm:px-4">
        <Header />
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  loader: state.loader,
});

export default connect(mapStateToProps, {})(withRouter(Layout));
