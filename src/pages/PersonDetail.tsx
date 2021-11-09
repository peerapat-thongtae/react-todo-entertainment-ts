import Layout from 'components/Layout';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PersonService from 'services/PersonService';
import PersonHelper from 'utils/PersonHelper';
import { setLoadingPage } from 'store/actions/loader';
import PersonBottomTab from 'components/PersonBottomTab';
import Loading from 'components/Loading';

import SocialLink from 'components/SocialLink';

const PersonDetail = (props: any) => {
  const personId = props.match.params.id;
  const [person, setPerson]: any = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    Promise.all([
      PersonService.getPersonDetail(personId).then((res: any) => {
        setPerson(res);
      }),
    ]).finally(() => {
      setLoading(false);
    });
  }, [personId]);
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className="text-gray-700 body-font overflow-hidden justify-center">
            <div className=" px-5 py-12 mx-auto">
              <div className="lg:w-2/4 mx-auto flex flex-wrap">
                <img
                  alt={person.name}
                  className="lg:w-1/2 w1/2 object-cover object-center rounded border border-gray-200 featured_image"
                  src={`${PersonHelper.posterPath(person.profile_path)}`}
                />
                <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-2xl font-bold title-font font-medium mb-1">
                    {person.name}
                  </h1>
                  {/* <h2 className="text-sm ml-4 title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2> */}
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <span className="flex items-center">
                      <span className="text-gray-600 ml-3">
                        {person.known_for_department}
                      </span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <SocialLink
                        external={person.external_ids.facebook_id}
                        type="facebook"
                        className=""
                      />
                      <SocialLink
                        external={person.external_ids.instagram_id}
                        type="instagram"
                        className="ml-2"
                      />
                      <SocialLink
                        external={person.external_ids.twitter_id}
                        type="twitter"
                        className="ml-2"
                      />
                    </span>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <p className="leading-relaxed ">
                      <b>Birth date : </b>
                      {dayjs(person.birthday).format('DD MMM YYYY')}
                    </p>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <p className="leading-relaxed ">
                      <b>Age : </b>
                      {PersonHelper.calculateAge(person.birthday)} Years
                    </p>
                  </div>
                  <div className="flex mb-4 pb-5 border-b-2 border-gray-200 mb-5">
                    <p className="leading-relaxed ">
                      <b>Place of birth : </b>
                      {person.place_of_birth}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PersonBottomTab person={person} />
        </div>
      )}
    </Layout>
  );
};

export default connect(null, { setLoadingPage })(PersonDetail);
