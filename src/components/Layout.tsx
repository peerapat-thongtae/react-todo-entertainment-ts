import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FilterModal from './FilterModal';
import Header from './Header';
import Loading from './Loading';
import SearchModal from './SearchModal';

const Layout = ({ children, loader, modal }: any) => {
  return (
    <>
      {/* <LoadingPage show={loader.isLoading} /> */}
      <main className="md:pt-32 ">
        <Header />
        {loader.isLoading ? <Loading /> : children}
        {/* {loader.isLoading ? <LoadingPage show={loader.isLoading} /> : children} */}
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
