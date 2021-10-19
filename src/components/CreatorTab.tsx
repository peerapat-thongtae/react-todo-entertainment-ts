import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const CreatorTab = (props: any) => {
  const crews = props.crews || [];
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          {crews &&
            crews.map((cast: any, index: number) => {
              return (
                <div key={index} className="post">
                  <Link to={`/person/${cast.id}`}>
                    <div className="card__img">
                      <img
                        src={MovieHelper.posterPath(cast.profile_path)}
                        className="lazyload"
                      />
                    </div>
                    <h3 className="cast_name">{cast.name}</h3>
                    <p className="post_info">{cast.job}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CreatorTab;
