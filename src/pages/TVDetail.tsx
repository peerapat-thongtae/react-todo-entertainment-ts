import DropdownTodo from 'components/DropdownTodo';
import Layout from 'components/Layout';
import Tag from 'components/Tag';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TVService from 'services/TVService';
import MovieHelper from 'utils/MovieHelper';
import { setLoadingPage } from 'store/actions/loader';
import { Link } from 'react-router-dom';
import WatchProviderTag from 'components/WatchProviderTag';
import TabPanel from 'components/TabPanel';

const TVDetail = (props: any) => {
  const movieId = props.match.params.id;
  const [movie, setMovie]: any = useState({});
  const [watchProviders, setWatchProviders] = useState([]);

  const created_by = movie.created_by && movie.created_by[0];
  useEffect(() => {
    props.setLoadingPage(true);
    Promise.all([
      TVService.getTVDetail(movieId).then((res: Response) => {
        setMovie(res);
      }),
      TVService.getTVWatchProviders(movieId).then((res) => {
        setWatchProviders((res.results.TH && res.results.TH.flatrate) || null);
      }),
    ]).finally(() => {
      props.setLoadingPage(false);
    });
  }, [movieId, props]);
  return (
    <Layout>
      <section className="text-gray-700 body-font overflow-hidden justify-center">
        <div className=" px-5 py-12 mx-auto">
          <div className="lg:w-3/5 mx-auto flex flex-wrap">
            <img
              alt={movie.name}
              className="lg:w-1/2 w1/2 object-cover object-center rounded border border-gray-200 featured_image"
              src={`${MovieHelper.posterPath(movie.poster_path)}`}
            />

            <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-2xl font-bold title-font font-medium mb-1">
                {movie.name}
              </h1>
              <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">
                    {dayjs(movie.first_air_date).format('DD MMM YYYY')}
                  </span>
                </span>
                <span className="flex items-center ml-3 border-l-2 border-gray-200">
                  <span className="text-gray-600 ml-3">
                    {movie.vote_average}/10
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <span className="text-gray-600 font-bold">
                    {movie.status}
                  </span>
                </span>
              </div>
              <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                <p className="leading-relaxed ">
                  <b>Director : </b>
                  <Link to={`/person/${created_by && created_by.id}}`}>
                    <span className="hover:text-orange-500">
                      {created_by && created_by.name}
                    </span>
                  </Link>
                </p>
              </div>
              <div className=" mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                <div className="leading-relaxed ">
                  <b>Number of seasons : </b>
                  <Link to={`/person/${created_by && created_by.id}}`}>
                    <span className="hover:text-orange-500">
                      {movie.number_of_seasons}
                    </span>
                  </Link>
                </div>
                <div className="leading-relaxed ">
                  <b>Next episode air : </b>
                  <Link to={`/person/${created_by && created_by.id}}`}>
                    <span className="hover:text-orange-500">
                      {movie.next_episode_to_air
                        ? `Season 
                        ${movie.next_episode_to_air.season_number} | EP.
                        ${movie.next_episode_to_air.episode_number} |
                        ${dayjs(movie.next_episode_to_air.air_date).format(
                          'DD MMM YYYY'
                        )}`
                        : '-'}
                    </span>
                  </Link>
                </div>
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
                          <>
                            <Tag
                              key={index}
                              to={`/tv/discover?with_genres=${genre.id}`}
                              title={genre.name}
                            />
                          </>
                        );
                      })}
                  </div>
                </span>
              </div>
              <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                <span className="">
                  <b>Watch Providers (TH) : </b>
                </span>
                <span className="ml-2">
                  <div>
                    {watchProviders ? (
                      watchProviders.map((flatrate: any, index: number) => {
                        return (
                          <WatchProviderTag
                            key={index}
                            imagePath={MovieHelper.logoPath(flatrate.logo_path)}
                            to={`/tv/discover?with_ott_providers=${flatrate.provider_id}&ott_region=TH`}
                          />
                        );
                      })
                    ) : (
                      <div> No Streaming In TH</div>
                    )}
                  </div>
                </span>
              </div>
              <div className="flex justify-center mb-4 pb-5 border-b-2 border-gray-200 mb-5 w-full">
                <p className="leading-relaxed w-full">
                  <DropdownTodo media={movie} mediaType="tv" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TabPanel movie={movie} mediaType="tv" />
    </Layout>
  );
};

export default connect(null, { setLoadingPage })(TVDetail);
