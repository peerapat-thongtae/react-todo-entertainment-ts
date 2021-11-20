import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FilterModal from './FilterModal';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import LoadingPage from './LoadingPage';
import SearchModal from './SearchModal';

const Layout = ({ children, loader, modal }: any) => {
  return loader.isLoading ? (
    <LoadingPage show={loader.isLoading} />
  ) : (
    <>
      {/* <LoadingPage show={loader.isLoading} /> */}
      <main className="md:pt-32 pb-20">
        <Header />
        <div className="h-full">
          {loader.isLoading ? <Loading /> : children}
        </div>
      </main>
      <Footer />

      <SearchModal />
      <FilterModal />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  loader: state.loader,
  modal: state.modalSearchMulti,
});

export default connect(mapStateToProps, {})(withRouter(Layout));
