import DropdownTodo from 'components/DropdownTodo';
import Layout from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieService from 'services/MovieService';
import MovieHelper from 'utils/MovieHelper';
import { setLoadingPage } from 'store/actions/loader';
import Tag from 'components/Tag';
import TabPanel from 'components/TabPanel';
import WatchProviderTag from 'components/WatchProviderTag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import SocialLink from 'components/SocialLink';

const MovieDetail = (props: any) => {
  const movieId = props.match.params.id;
  const [movie, setMovie]: any = useState({});
  const [watchProviders, setWatchProviders]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const director = () => {
    const arr = movie.credits && movie.credits.crew;
    if (arr) {
      const find = arr.find((o: any) => o.job === 'Director');
      if (find) {
        return find;
      }
    }
    return {};
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      MovieService.getMovieDetail(movieId).then((res) => {
        setMovie(res);
      }),
      MovieService.getMovieWatchProviders(movieId).then((res) => {
        setWatchProviders((res.results.TH && res.results.TH.flatrate) || null);
      }),
    ]).finally(() => {
      setLoading(false);
    });
  }, [movieId]);
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="text-gray-700 body-font overflow-hidden justify-center">
            <div className=" px-5 py-12 mx-auto">
              <div className="lg:w-3/5 mx-auto flex flex-wrap">
                <img
                  alt={movie.title}
                  className="lg:w-1/2 w1/2 object-cover object-center rounded border border-gray-200 featured_image"
                  src={`${MovieHelper.posterPath(movie.poster_path)}`}
                />
                <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-2xl font-bold title-font font-medium mb-1">
                    {movie.title}
                  </h1>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <span className="flex items-center">
                      <span className="text-gray-600 ml-3">
                        {MovieHelper.releaseDate(movie.release_date)}
                      </span>
                    </span>
                    <span className="flex items-center ml-3 border-l-2 border-gray-200">
                      <span className="text-gray-600 ml-3">
                        {movie.vote_average}/10
                      </span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <div className="">
                        <SocialLink
                          type="imdb"
                          external={movie.external_ids.imdb_id}
                        />
                      </div>
                      <div className="">
                        <SocialLink
                          type="facebook"
                          external={movie.external_ids.facebook_id}
                        />
                      </div>
                    </span>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <p className="leading-relaxed ">
                      <b>Director: </b>
                      <Link to={`/person/${director().id}`}>
                        <span className="hover:text-orange-500">
                          {director().name}
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <p className="leading-relaxed ">{movie.overview}</p>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <span className="mr-4">
                      <b>Genre </b>
                    </span>
                    <span className="">
                      <div>
                        {movie.genres &&
                          movie.genres.map((genre: any, index: number) => {
                            return (
                              <Tag
                                key={`genre_${genre.id}`}
                                to={`/movie/discover?with_genres=${genre.id}`}
                                title={genre.name}
                              />
                            );
                          })}
                      </div>
                    </span>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <span className="">
                      <b>Watch Providers (TH): </b>
                    </span>
                    <span className="ml-2">
                      <div>
                        {watchProviders ? (
                          watchProviders.map((flatrate: any, index: number) => {
                            return (
                              <WatchProviderTag
                                key={flatrate.id}
                                imagePath={MovieHelper.logoPath(
                                  flatrate.logo_path
                                )}
                                to={`/movie/discover?with_ott_providers=${flatrate.provider_id}&ott_region=TH`}
                              />
                            );
                          })
                        ) : (
                          <div> No Streaming In TH</div>
                        )}
                      </div>
                    </span>
                  </div>
                  {props.user.isAuthenticated && (
                    <div className="flex justify-center mb-4 pb-5 border-b-2 border-gray-200 mb-5 w-full">
                      <div className="leading-relaxed w-full">
                        <DropdownTodo media={movie} mediaType="movie" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <TabPanel movie={movie} mediaType="movie" />
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setLoadingPage })(MovieDetail);
