import Layout from 'components/Layout';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonService from 'services/PersonService';
import { setLoadingPage } from 'store/actions/loader';
import MovieHelper from 'utils/MovieHelper';
import PersonList from './PersonList';

const Person = (props: any) => {
  const params = MovieHelper.paramsToObject(props.location.search);

  const getPersons = (query: any) => {
    return PersonService.getPersonByType('popular', { ...params, ...query });
  };
  return (
    <Layout>
      <PersonList getPersons={getPersons} title="Person" />
    </Layout>
  );
};

export default connect(null, { setLoadingPage })(withRouter(Person));
