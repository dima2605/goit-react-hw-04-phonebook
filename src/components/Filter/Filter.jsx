import PropTypes from 'prop-types';
import { FilterInput, FilterInputDescr } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <FilterInputDescr> Find contacts by name</FilterInputDescr>
      <FilterInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Rosie Simpson"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
