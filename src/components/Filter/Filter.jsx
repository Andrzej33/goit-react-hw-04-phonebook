import { FilterBox } from './Filter.styled';
import PropTypes from 'prop-types'

export const Filter = ({ value, onChange }) => (
  <FilterBox>
    <label htmlFor="">Find contacts by name</label>{' '}
    <input type="text" value={value} onChange={onChange} />
  </FilterBox>
);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};