import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const EpisodeTab = (props: any) => {
  const episodes = props.episodes || [];
  const { movieId } = props;
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          {episodes &&
            episodes.map((episode: any, index: number) => {
              return (
                <div key={index} className="post">
                  <Link to={`/tv/${movieId}/season/${episode.season_number}`}>
                    <div className="card__img">
                      <img
                        src={MovieHelper.posterPath(episode.still_path)}
                        className="lazyload"
                      />
                    </div>
                    <h3 className="cast_name">
                      EP.{episode.episode_number} : {episode.name}
                    </h3>
                    <p className="post_info">
                      {MovieHelper.releaseDate(episode.air_date)}
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default EpisodeTab;
