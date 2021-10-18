import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';
import { connect } from 'react-redux';

const PersonCard = (props: any) => {
  const { person } = props;

  return (
    <div className="justify-center items-center">
      <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white ">
        <div
          className="relative mb-6 card-img"
          style={{ backgroundColor: 'black' }}
        >
          <Link to={`/person/${person.id}`}>
            <img
              className="w-full h-full"
              src={MovieHelper.posterPath(person.profile_path)}
              alt={person.name}
              style={{ maxHeight: 600 }}
            />
          </Link>
        </div>
        <div className="px-6 ">
          <Link to={`/person/${person.id}`}>
            <p className="tracking-wide text-2xl font-bold card-name link-to">
              {person.name}
            </p>
          </Link>

          <p className="tracking-wide text-sm mb-4 mt-2">
            <b>{person.known_for_department}</b>
          </p>
          <p className="tracking-wide text-sm mb-4 mt-2 person-known-for ">
            <b>
              Known for:{' '}
              <Link
                to={`/
                ${person.known_for[0].media_type / person.known_for[0].id}`}
                className="hover:text-orange-500"
              >
                {person.known_for[0].name || person.known_for[0].title || '-'}
              </Link>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  errors: state.errors,
});

export default connect(mapStateToProps, {})(PersonCard);
