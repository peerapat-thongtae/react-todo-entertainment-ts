import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const CollectionTab = (props: any) => {
  const { collections } = props;
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          <div className="post">
            <Link to={`/collection/${collections.id}`}>
              <div className="card__img">
                <img
                  src={MovieHelper.posterPath(collections.poster_path)}
                  className="lazyload"
                />
              </div>
              <h3 className="cast_name">{collections.name}</h3>
              {/* <p className="post_info">{collections.episode_count} Episodes</p> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionTab;
