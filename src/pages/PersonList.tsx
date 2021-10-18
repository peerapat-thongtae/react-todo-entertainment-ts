import ButtonFilter from 'components/ButtonFilter';
import DropdownSort from 'components/DropdownSort';
import PersonCard from 'components/PersonCard';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setLoadingPage } from 'store/actions/loader';

const PersonList = (props: any) => {
  const { getPersons, title } = props;
  const [persons, setPersons]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.setLoadingPage(true);
    const query = {
      page: 1,
    };
    getPersons(query).then((res: any) => {
      setPersons(res.results);
      props.setLoadingPage(false);
    });
  }, [getPersons, props]);

  const loadmorePerson = async () => {
    props.setLoadingPage(true);
    setCurrentPage(currentPage + 1);
    // if (currentPage !== 1) {
    const result = await getPersons({ page: currentPage + 1 });
    setPersons([...persons, ...result.results]);
    props.setLoadingPage(false);
    // }
  };
  return (
    <div className="m-5">
      <div className="flex font-bold mb-6">
        <div className="w-1/2 h-12 ml-10">{title}</div>
        <div className="w-1/2 h-12 mr-10 text-right">
          <div className="inline-block mr-4">
            <DropdownSort sortShow={true} />
          </div>
          <div className="inline-block">
            <ButtonFilter filterShow={false} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {persons.map((person: any, index: number) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={loadmorePerson}
        >
          Load more...
        </button>
      </div>
    </div>
  );
};

export default connect(null, { setLoadingPage })(PersonList);
