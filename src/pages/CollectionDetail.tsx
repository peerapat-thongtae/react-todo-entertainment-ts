import Layout from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieService from 'services/MovieService';
import MovieHelper from 'utils/MovieHelper';
import { setLoadingPage } from 'store/actions/loader';
import { animateScroll as scroll } from 'react-scroll';
import CollectionBottomTab from 'components/CollectionBottomTab';

const CollectionDetail = (props: any) => {
  const collectionId = props.match.params.id;
  const [collection, setCollection]: any = useState({});

  useEffect(() => {
    props.setLoadingPage(true);
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
    Promise.all([
      MovieService.getCollectionDetail(collectionId).then((res) => {
        setCollection(res);
      }),
    ]).finally(() => {
      props.setLoadingPage(false);
    });
  }, [collectionId, props]);
  return (
    <Layout>
      <section className="text-gray-700 body-font overflow-hidden justify-center">
        <div className=" px-5 py-12 mx-auto">
          <div className="lg:w-3/5 mx-auto flex flex-wrap">
            <img
              alt={collection.title}
              className="lg:w-1/2 w1/2 object-cover object-center rounded border border-gray-200 featured_image"
              src={`${MovieHelper.posterPath(collection.poster_path)}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-2xl font-bold title-font font-medium mb-1">
                {collection.name}
              </h1>
              <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                <span className="flex items-center">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                <p className="leading-relaxed ">{collection.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CollectionBottomTab movies={collection.parts} />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setLoadingPage })(CollectionDetail);