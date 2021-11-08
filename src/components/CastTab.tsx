import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';
import ImageCustom from './ImageCustom';

const CastTab = (props: any) => {
  const casts = props.casts || [];
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          {casts &&
            casts.map((cast: any, index: number) => {
              return (
                <div key={index} className="post">
                  <Link to={`/person/${cast.id}`}>
                    <div className="card__img">
                      <ImageCustom
                        src={MovieHelper.posterPath(cast.profile_path)}
                      />
                    </div>
                    <h3 className="cast_name">{cast.name}</h3>
                    <p className="post_info">{cast.character}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CastTab;
