import PropTypes from 'prop-types';
import FilterLabel from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
      </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};


