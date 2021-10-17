import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FilterModal from './FilterModal';
import Header from './Header';
import LoadingPage from './LoadingPage';
import SearchModal from './SearchModal';

const Layout = ({ children, loader, modal }: any) => {
  return (
    <>
      <LoadingPage show={loader.isLoading} />
      <main className="md:pt-32 sm:px-4">
        <Header />
        {children}
      </main>
      <SearchModal />
      <FilterModal />
      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  loader: state.loader,
  modal: state.modalSearchMulti,
});

export default connect(mapStateToProps, {})(withRouter(Layout));
