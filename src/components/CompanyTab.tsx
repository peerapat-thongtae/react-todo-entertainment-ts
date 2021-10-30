import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const CompanyTab = (props: any) => {
  const { companies, mediaType } = props;
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          {companies &&
            companies.map((company: any, index: number) => {
              return (
                <div key={index} className="pic post">
                  <Link
                    to={`/${mediaType}/discover?with_companies=${company.id}`}
                  >
                    <div className="card__lightbox poster mb-2">
                      <div className="backdrop">
                        <img
                          src={MovieHelper.logoPath(company.logo_path)}
                          className="lazyload"
                        />
                      </div>
                    </div>
                    <h3 className="cast_name">{company.name}</h3>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTab;
