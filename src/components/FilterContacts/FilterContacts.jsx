import { useDispatch } from 'react-redux';

import { filterContacts } from '../../redux//sliceFilter/sliceFilter';

import { InputFilter } from './FilterContacts.styled';

import PropTypes from 'prop-types';

const FilterContacts = ({ textTitel }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>{textTitel}</h2>
      <InputFilter
        type="text"
        name="filter"
        // value={filter}
        onChange={e =>
          dispatch(filterContacts(e.currentTarget.value.toLocaleLowerCase()))
        }
      />
    </>
  );
};

export default FilterContacts;
FilterContacts.prototype = {
  textTitel: PropTypes.string,
};
