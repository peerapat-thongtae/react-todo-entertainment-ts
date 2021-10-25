import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const CompanyTab = (props: any) => {
  const { companies, mediaType } = props;
  return (
    <section id="top_companies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 ">
          {companies &&
            companies.map((company: any, index: number) => {
              return (
                <div key={index} className="">
                  <Link
                    to={`/${mediaType}/discover?with_companies=${company.id}`}
                  >
                    <div className="card__img mb-2">
                      <img
                        src={MovieHelper.logoPath(company.logo_path)}
                        width="100"
                        height="100"
                      />
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
