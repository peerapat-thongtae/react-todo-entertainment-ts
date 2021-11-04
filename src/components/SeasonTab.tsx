import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const SeasonTab = (props: any) => {
  const seasons = props.seasons || [];
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          {seasons &&
            seasons.map((season: any, index: number) => {
              return (
                <div key={index} className="post">
                  <Link to={`/tv/season/${season.id}`}>
                    <div className="card__img">
                      <img
                        src={MovieHelper.posterPath(season.poster_path)}
                        className="lazyload"
                      />
                    </div>
                    <h3 className="cast_name">{season.name}</h3>
                    <p className="post_info">{season.episode_count} Episodes</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SeasonTab;
